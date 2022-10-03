import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Image, Box, Text, UnorderedList, ListItem,
} from '@chakra-ui/react';

import austinCold from '../../../../../assets/images/Home/mobile.png';
import Tile from '../../Tile';

const AustinColdTile = ({ onLoad }) => {
  const renderDescription = () => (
    <Box
      className="projects__description"
    >
      <Text fontWeight="bold">
        ROLES:
      </Text>
      <Text marginBottom="2rem">
        <UnorderedList>
          <ListItem>
            Primary designer
          </ListItem>
          <ListItem>
            Primary developer
          </ListItem>
        </UnorderedList>
      </Text>
      <Text fontWeight="bold">
        DESCRIPTION:
      </Text>
      <Text>Working with a nonprofit to quickly launch over 400 rescue operations and raise $1.5 million during a natural disaster.</Text>
    </Box>
  );
  return (
    <Tile
      className="projects__container"
      id="tile--austin-cold"
      description={renderDescription()}
      order={5}
      title="AUSTINCOLD"
      to="/austin-cold"
      projectImage={(
        <Image
          className="projects__austin-cold-image"
          src={austinCold}
          onLoad={onLoad}
        />
        )}
    />
  );
};

AustinColdTile.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default AustinColdTile;
