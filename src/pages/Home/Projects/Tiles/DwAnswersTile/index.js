import React, { useState } from 'react';
import {
  Image, Box, Text, UnorderedList, ListItem,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import powerGloveSkeleton from '../../../../../assets/images/PowerGlove/flex-sensor-circuit.png';
import Tile from '../../Tile';

const PowerGloveTile = ({ init }) => {
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
      <Text>Streamlining product support by crowdsourcing solutions for the easiest customer issues.</Text>
    </Box>
  );

  return (
    <Tile
      className="projects__container"
      description={renderDescription()}
      title="DW ANSWERS"
      subtitle="How I work"
      order={1}
      init={init}
      to="/dw-answers"
      projectImage={<Image className="projects__image" src={powerGloveSkeleton} />}
    />
  );
};

PowerGloveTile.propTypes = {
  init: PropTypes.bool.isRequired,
};

export default PowerGloveTile;
