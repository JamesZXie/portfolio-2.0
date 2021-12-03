import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Image, Box, Text, UnorderedList, ListItem,
} from '@chakra-ui/react';

import PowerGloveImage from '../../../../../assets/images/Home/glove.png';
import Tile from '../../Tile';

const PowerGloveTile = ({ onLoad }) => {
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
            Interaction design
          </ListItem>
          <ListItem>
            Software Engineering
          </ListItem>
          <ListItem>
            Computer Engineering
          </ListItem>
        </UnorderedList>
      </Text>
      <Text fontWeight="bold">
        DESCRIPTION:
      </Text>
      <Text>Exploring alternate ways of interacting with the digital world.</Text>
    </Box>
  );

  return (

    <Tile
      className="projects__container"
      id="tile--power-glove"
      description={renderDescription()}
      title="POWERGLOVE"
      to="/power-glove"
      order={3}
      projectImage={(
        <Image
          className="projects__power-glove-image"
          onLoad={onLoad}
          src={PowerGloveImage}
          alt="image of a glove"
        />
)}
    />
  );
};

PowerGloveTile.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default PowerGloveTile;
