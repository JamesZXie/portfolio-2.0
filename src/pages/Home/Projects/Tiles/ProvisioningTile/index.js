import React, { useState } from 'react';
import {
  Image, Box, Text, UnorderedList, ListItem,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import DwAnswersPreview from '../../../../../assets/images/Home/dw-answers-preview.png';
import Tile from '../../Tile';
import '../../projects.scss';

const DwAnswersTile = ({ onLoad }) => {
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
            Primary UX designer
          </ListItem>
          <ListItem>
            Primary researcher
          </ListItem>
        </UnorderedList>
      </Text>
      <Text fontWeight="bold">
        DESCRIPTION:
      </Text>
      <Text>Redesigning the core of the PowerVS platform to make it a fast, guided experience. </Text>
    </Box>
  );

  return (
    <Tile
      className="projects__container"
      id="tile--provisioning"
      description={renderDescription()}
      title="PROVISIONING"
      order={2}
      to="/dw-answers"
      projectImage={(
        <Image
          className="projects__dw-answers-image"
          src={DwAnswersPreview}
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
