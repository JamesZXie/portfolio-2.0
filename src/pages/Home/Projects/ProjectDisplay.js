import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Box, Image } from '@chakra-ui/react';

const ProjectDisplay = ({ activeProject }) => {
  const { title, caption, image } = activeProject;

  return (
    <Box paddingTop={2}>
      <Image src={image} />
    </Box>
  );
};

ProjectDisplay.propTypes = {
  activeProject: PropTypes.object.isRequired,
};

export default ProjectDisplay;
