import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './tile.scss';
import {
  Grid, Box, GridItem, Flex, Text, Link, Button, Image,
} from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Waypoint } from 'react-waypoint';
import ArrowUp from '../../../../components/ArrowUp';
import ArrowDown from '../../../../components/ArrowDown';

const Tile = ({
  title, description, to, projectImage, className, id, subtitle, order,
}) => {
  const history = useHistory();
  const location = useLocation();

  const handleLink = () => {
    if (location.pathname === to) { return; }
    history.push(to);
  };

  return (
    <Waypoint>
      <div>
        <Grid
          templateColumns="repeat(12, 1fr)"
          className={`tile ${className}`}
          gap="1rem"
          textAlign={['center', 'left', 'left']}
          paddingTop="2rem"
          paddingBottom="2rem"
          paddingLeft={['1rem', 0]}
          paddingRight={['1rem', 0]}
          position="relative"
          id={id}
        >
          <ArrowUp />
          <Box
            position="absolute"
            height="100%"
            width="50%"
            textAlign="left"
            paddingLeft={[0, '4rem']}
            zIndex="-1"
            color="#2d1d1d"
            fontFamily="RobotoCondensed"
            fontSize="100vh"
            lineHeight="100vh"
            userSelect="none"
            tabIndex="-1"
          >
            {order}
          </Box>
          <GridItem
            colStart={[1, 3]}
            colSpan={[12, 4]}
          >
            <Flex
              height="100%"
              justify="center"
              direction="column"
            >
              <Text
                as="h4"
                paddingBottom="1rem"
              >
                {subtitle}
              </Text>
              <Box className="container__solid-rectangle">
                <Text as="h1">{title}</Text>
                <Box marginTop="1rem" textAlign="left">
                  {description}
                </Box>
              </Box>
              <Box
                paddingTop="1rem"
                textAlign={['right']}
              >
                <Button
                  onClick={handleLink}
                  width={['100%', 'auto']}
                  className="projects__read-more-button"
                >
                  READ MORE
                  <ArrowForwardIcon marginLeft=".5rem" />
                </Button>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            display={['none', 'none', 'none', 'block', 'block']}
            colSpan={[0, 0, 0, 3, 4]}
            position="relative"
            marginBottom="1rem"
          >
            <Flex
              justify="center"
              align="center"
              height="100%"

            >
              <Box
                className="tile__image__frame"
                display={['none', 'none', 'none', 'block']}
              >
                <Box className="tile__image__container" onClick={handleLink}>
                  {projectImage}
                </Box>
              </Box>
            </Flex>
          </GridItem>
          <ArrowDown hidden={order === 3} />
        </Grid>
      </div>
    </Waypoint>
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
  order: PropTypes.number.isRequired,
};

Tile.defaultProps = {
  className: '',
  projectImage: '',
  id: '',
};
export default Tile;
