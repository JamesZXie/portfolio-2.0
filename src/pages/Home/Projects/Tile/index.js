import React from 'react';
import PropTypes from 'prop-types';
import './tile.scss';
import {
  Grid, Box, GridItem, Flex, Text, Link, Button, Image,
} from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../../../../components/Header';
import arrows from '../../../../assets/images/Home/Hero/ExploreArrows.svg';

const Tile = ({
  title, description, to, projectImage, className,
}) => {
  const history = useHistory();
  const location = useLocation();

  const handleLink = () => {
    if (location.pathname === to) { return; }
    history.push(to);
  };

  return (
    <>
      <Box className="section__line__top" />
      <Grid
        templateColumns="repeat(12, 1fr)"
        className={className}
        gap="1rem"
        textAlign={['center', 'left', 'left']}
        paddingTop="2rem"
        paddingBottom="2rem"
        position="relative"
      >
        <GridItem
          colStart={[2]}
          colSpan={[5]}
        >
          <Flex
            height="100%"
            justify="space-between"
            direction="column"
          >
            <Box>
              <Header title={title} />
              <Text paddingRight="4rem">
                {description}
              </Text>
            </Box>
            <Box paddingTop="1rem">
              <Button onClick={handleLink} className="projects__read-more-button">
                READ MORE
                <Image src={arrows} className="right-arrow" />
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
      <Box className="section__line__bottom" />
    </>
  );
};

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  projectImage: PropTypes.node,
  className: PropTypes.string,
};

Tile.defaultProps = {
  className: '',
  projectImage: '',
};
export default Tile;
