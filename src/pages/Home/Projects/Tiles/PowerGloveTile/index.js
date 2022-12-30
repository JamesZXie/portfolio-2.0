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
        Roles:
      </Text>
      <Text marginBottom="2rem">
        <UnorderedList>
          <ListItem>
            Creator
          </ListItem>
          <ListItem>
            Community organizer
          </ListItem>
        </UnorderedList>
      </Text>
      <Text fontWeight="bold">
        Description:
      </Text>
      <Text>
        Turning a different way to interact with digital art into a community art project.
      </Text>
    </Box>
  );

  return (

    <Tile
      className="projects__container"
      id="tile--power-glove"
      description={renderDescription()}
      label="Personal"
      title="Making digital art more interactive"
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
