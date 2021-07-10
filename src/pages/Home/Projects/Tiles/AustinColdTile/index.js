import React, { useState, useEffect } from 'react';
import {
  Image, Box, Text, UnorderedList, ListItem,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import austinCold from '../../../../../assets/images/AustinCold/mobile.png';
import Tile from '../../Tile';

const AustinColdTile = ({ init }) => {
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
            Project Management
          </ListItem>
          <ListItem>
            UX Design
          </ListItem>
          <ListItem>
            Frontend Development
          </ListItem>
        </UnorderedList>
      </Text>
      <Text fontWeight="bold">
        DESCRIPTION:
      </Text>
      <Text>Working with a nonprofit to launch over 400 rescue operations and raise $1.5 million during a natural disaster.</Text>
    </Box>
  );
  return (
    <Tile
      className="projects__container"
      id="tile--austin-cold"
      description={renderDescription()}
      subtitle="3. How I give back"
      order={3}
      title="AUSTINCOLD"
      to="/austin-cold"
      projectImage={(
        <Image
          className="projects__austin-cold-image"
          src={austinCold}
        />
        )}
    />
  );
};

AustinColdTile.propTypes = {
  init: PropTypes.bool.isRequired,
};

export default AustinColdTile;
