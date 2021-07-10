import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './tile.scss';
import {
  Grid, Box, GridItem, Flex, Text, Link, Button, Image,
} from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Header from '../../../../components/Header';

const Tile = ({
  title, description, to, projectImage, className, id, subtitle,
}) => {
  const history = useHistory();
  const location = useLocation();

  const handleLink = () => {
    if (location.pathname === to) { return; }
    history.push(to);
  };

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // useEffect(() => {
  //   document.addEventListener('scroll', handleScroll);
  //   return () => { document.removeEventListener('scroll', handleScroll); };
  // }, []);

  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      className={`tile ${className}`}
      gap="1rem"
      textAlign={['center', 'left', 'left']}
      paddingTop="2rem"
      paddingBottom="2rem"
      position="relative"
      id={id}
    >
      <GridItem
        colStart={[3]}
        colSpan={[4]}
      >
        <Flex
          height="100%"
          justify="center"
          direction="column"
        >
          <Text as="h4" paddingBottom="1rem">{subtitle}</Text>
          <Box className="container__solid-rectangle">
            <Header title={title} />
            <Box marginTop="2rem">
              {description}
            </Box>
          </Box>
          <Box paddingTop="1rem">
            <Button
              onClick={handleLink}
              className="projects__read-more-button"
            >
              READ MORE
              <ArrowForwardIcon marginLeft=".5rem" />
            </Button>
          </Box>
        </Flex>
      </GridItem>
      <GridItem
        colSpan={[4]}
        position="relative"
        marginBottom="1rem"
      >
        <Flex
          justify="center"
          align="center"
          height="100%"
          piosi
        >
          <Box className="tile__image__frame__hover1" onClick={handleLink}>
            <Box className="tile__image__frame__hover2" onClick={handleLink} />
          </Box>
          <Box
            className="tile__image__frame"
          >
            <Box className="tile__image__container" onClick={handleLink}>
              {projectImage}
            </Box>
          </Box>
        </Flex>
      </GridItem>
    </Grid>

  );
};

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  projectImage: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
};

Tile.defaultProps = {
  className: '',
  projectImage: '',
  id: '',
};
export default Tile;
