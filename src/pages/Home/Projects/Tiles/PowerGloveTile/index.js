import React, { useState } from 'react';
import {
  Image, Box, Text, UnorderedList, ListItem,
} from '@chakra-ui/react';

import powerGloveSkeleton from '../../../../../assets/images/PowerGlove/flex-sensor-circuit.png';
import Tile from '../../Tile';

const PowerGloveTile = (props) => {
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
      subtitle="2. How I grow"
      title="POWERGLOVE"
      to="/power-glove"
      order={2}
      projectImage={<Image className="projects__image" src={powerGloveSkeleton} />}
    />
  );
};

export default PowerGloveTile;
