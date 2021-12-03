import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Image, Box, Text, UnorderedList, ListItem,
} from '@chakra-ui/react';

import SupercomputerImage from '../../../../../assets/images/Home/supercomputer.png';
import Tile from '../../Tile';

const RendezvousTile = ({ onLoad }) => {
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
            Product design
          </ListItem>
          <ListItem>
            Design Research
          </ListItem>
          <ListItem>
            Fullstack development
          </ListItem>
        </UnorderedList>
      </Text>
      <Text fontWeight="bold">
        DESCRIPTION:
      </Text>
      <Text>Helping IBM&apos;s supercomputer test teams scale their resource allocation process.</Text>
    </Box>
  );

  return (

    <Tile
      className="projects__container"
      id="tile--rendezvous"
      description={renderDescription()}
      title="RENDEZVOUS"
      to="/rendezvous"
      order={1}
      projectImage={(
        <Image
          className="projects__rendezvous-image"
          onLoad={onLoad}
          src={SupercomputerImage}
          alt="image of a glove"
        />
)}
    />
  );
};

RendezvousTile.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default RendezvousTile;
