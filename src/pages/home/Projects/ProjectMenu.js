import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';

import Header from '../../../components/Header';

const ProjectMenu = (props) => {
  const [something, setSomething] = useState('lol');
  return (
    <Box className="projects-menu">
      <Box marginLeft="-12px">
        <Header title="PROJECTS" size={20} />
      </Box>
      <Box className="projects-menu__list-container">
        <h3>&gt; AustinCold</h3>
        <h3>&gt; PowerGlove</h3>
        <h3>&gt; Doodles</h3>
      </Box>
    </Box>
  );
};

export default ProjectMenu;
