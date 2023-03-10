import React, { useState } from 'react';
import {
  Image, Box, Text, UnorderedList, ListItem,
} from '@chakra-ui/react';

import PropTypes from 'prop-types';
import WorkspacesPreview from '../../../../../assets/images/Home/workspaces-preview.png';
import Tile from '../../Tile';
import '../../projects.scss';

const WorkspacesTile = ({ onLoad }) => {
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
      <Text>Making the first step in every returning user&apos;s day &quot;autopilot-able&quot;</Text>
    </Box>
  );

  return (
    <Tile
      className="projects__container"
      id="tile--workspaces"
      description={renderDescription()}
      label="IBM"
      title="Making resource access seamless for returning users"
      order={2}
      to="/workspaces"
      projectImage={(
        <Image
          className="projects__provisioning-image"
          src={WorkspacesPreview}
          onLoad={onLoad}
        />
)}
    />
  );
};

WorkspacesTile.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default WorkspacesTile;
