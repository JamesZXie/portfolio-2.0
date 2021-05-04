import React, { useState } from 'react';

import { Box, Image } from '@chakra-ui/react';

const ProjectDisplay = ({ activeProject }) => {
  const { title, caption, image } = activeProject;

  return (
    <Box paddingTop={2}>
      <Image src={image} />
    </Box>
  );
};
export default ProjectDisplay;
