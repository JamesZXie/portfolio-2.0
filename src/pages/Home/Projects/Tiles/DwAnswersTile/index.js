import React, { useState } from 'react';
import {
  Image, Box, Text,
} from '@chakra-ui/react';

import powerGloveSkeleton from '../../../../../assets/images/PowerGlove/flex-sensor-circuit.png';
import Tile from '../../Tile';

const PowerGloveTile = (props) => {
  const renderDescription = () => (
    <Box
      className="projects__description"
    >
      <Text
        as="h3"
      >
        Project:
      </Text>
      <Text marginBottom="1rem">UX design</Text>
      <Text as="h3">Impact:</Text>
      <Text>Streamlined IBM product support saving $48 million annually.</Text>
    </Box>
  );

  return (
    <Tile
      className="projects__container"
      description={renderDescription()}
      title="DW - ANSWERS"
      to="/dw-answers"
      projectImage={<Image className="projects__image" src={powerGloveSkeleton} />}
    />
  );
};

export default PowerGloveTile;
