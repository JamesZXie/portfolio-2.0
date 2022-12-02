import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grid, Box, GridItem, Flex, Text, Link, Button, Image,
} from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import './tile.scss';
import ArrowUp from '../../../../components/ArrowUp';
import ArrowDown from '../../../../components/ArrowDown';

const Tile = ({
  title, description, to, projectImage, className, id, subtitle, order, label,
}) => {
  const history = useHistory();
  const location = useLocation();

  const handleLink = () => {
    if (location.pathname === to) { return; }
    history.push(to);
  };

  return (
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
      {/* <Box
        className="tile__order-imprint"
        tabIndex="-1"
        paddingLeft={[0, '4rem']}
      >
        {order}
      </Box> */}
      <GridItem
        colStart={[1, 2]}
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
            <Text as="h6">{label}</Text>
            <Text as="h1">{title}</Text>
            <Box marginTop="2rem" textAlign="left">
              {description}
            </Box>
          </Box>
          <Box
            paddingTop="2rem"
            textAlign={['right']}
          >
            <Button
              onClick={handleLink}
              width={['100%', 'auto']}
              className="projects__read-more-button"
            >
              Read more
              <ArrowForwardIcon marginLeft=".5rem" />
            </Button>
          </Box>
        </Flex>
      </GridItem>
      <GridItem
        display={['none', 'none', 'none', 'flex', 'flex']}
        colStart={[0, 0, 0, 7, 7]}
        colSpan={[0, 0, 0, 5, 5]}
        position="relative"
        marginBottom="1rem"
        className="tile__image-container"
      >
        <Box onClick={handleLink} className="tile__image-container__click-area">
          {window.innerWidth > 666 ? projectImage : ''}
        </Box>
      </GridItem>
      <ArrowDown hidden={order === 4} />
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
  order: PropTypes.number.isRequired,
  label: PropTypes.string,
};

Tile.defaultProps = {
  className: '',
  projectImage: '',
  id: '',
  label: '',
};
export default Tile;
