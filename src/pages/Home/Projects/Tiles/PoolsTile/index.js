import React, { useState } from 'react';
import {
  Image, Box, Text, Link, UnorderedList, ListItem,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import PoolsPreview from '../../../../../assets/images/Home/pools-preview.png';
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
      <Text>
        Dismantling a financial barrier to entry for an IaaS platform.
      </Text>
    </Box>
  );

  return (
    <Tile
      className="projects__container"
      id="tile--pools"
      description={renderDescription()}
      label="IBM"
      title="Cloud pools"
      order={1}
      to="/pools"
      projectImage={(
        <Image
          className="projects__pools-image"
          src={PoolsPreview}
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
