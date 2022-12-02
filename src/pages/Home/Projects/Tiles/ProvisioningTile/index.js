import React, { useState } from 'react';
import {
  Image, Box, Text, UnorderedList, ListItem,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import ProvisioningPreview from '../../../../../assets/images/Home/provisioning-preview.png';
import Tile from '../../Tile';
import '../../projects.scss';

const DwAnswersTile = ({ onLoad }) => {
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
            Primary UX designer
          </ListItem>
          <ListItem>
            Primary researcher
          </ListItem>
        </UnorderedList>
      </Text>
      <Text fontWeight="bold">
        Description:
      </Text>
      <Text>Redesigning the core of the PowerVS platform to make it a fast, guided experience. </Text>
    </Box>
  );

  return (
    <Tile
      className="projects__container"
      id="tile--provisioning"
      description={renderDescription()}
      title="Cloud checkout"
      order={2}
      to="/psvsredesign"
      projectImage={(
        <Image
          className="projects__provisioning-image"
          src={ProvisioningPreview}
          onLoad={onLoad}
        />

)}
    />
  );
};

DwAnswersTile.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default DwAnswersTile;
