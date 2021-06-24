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
  title, description, to, projectImage, className, id,
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
        colSpan={[5]}
      >
        <Flex
          height="100%"
          justify="center"
          direction="column"
        >
          <Box>
            <Header title={title} />
            <Box paddingRight="4rem">
              {description}
            </Box>
          </Box>
          <Box paddingTop="2rem">
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
        colSpan={[5]}
        position="relative"
        marginBottom="1rem"
      >
        <Box onClick={handleLink}>
          {projectImage}
        </Box>
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
};

Tile.defaultProps = {
  className: '',
  projectImage: '',
  id: '',
};
export default Tile;
