import React, { useState } from 'react';
import {
  Image, Box, Text, UnorderedList, ListItem,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import DwAnswersPreview from '../../../../../assets/images/Home/dw-answers-preview.png';
import Tile from '../../Tile';
import '../../projects.scss';

const DwAnswersTile = ({ init }) => {
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
            UX design
          </ListItem>
          <ListItem>
            UX research
          </ListItem>
        </UnorderedList>
      </Text>
      <Text fontWeight="bold">
        DESCRIPTION:
      </Text>
      <Text>Streamlining IBM product support by crowdsourcing solutions for a subset of customer issues.</Text>
    </Box>
  );

  return (
    <Tile
      className="projects__container"
      id="tile--dw-answers"
      description={renderDescription()}
      title="DW ANSWERS"
      subtitle="1. How I work"
      order={1}
      init={init}
      to="/dw-answers"
      projectImage={<Image className="projects__dw-answers-image" src={DwAnswersPreview} />}
    />
  );
};

DwAnswersTile.propTypes = {
  init: PropTypes.bool.isRequired,
};

export default DwAnswersTile;
