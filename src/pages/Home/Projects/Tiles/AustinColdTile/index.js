import React from 'react';
import {
  Image, Box, Text,
} from '@chakra-ui/react';

import austinCold from '../../../../../assets/images/AustinCold/mobile.png';
import Tile from '../../Tile';

const AustinColdTile = (props) => {
  const renderDescription = () => (
    <Box className="projects__description">
      <Text as="h3">Project:</Text>
      <Text marginBottom="1rem"> Product design</Text>
      <Text as="h3">Impact:</Text>
      <Text> Helped a nonprofit save lives and raise $1.5 million during a natural disaster.</Text>
    </Box>
  );
  return (
    <Tile
      className="projects__container"
      description={renderDescription()}
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

export default AustinColdTile;
