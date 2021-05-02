import React, { useState } from 'react';
import {
  Box, List, ListItem, ListIcon,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import PropTypes from 'prop-types';

import Header from '../../../components/Header';

const ProjectMenu = (props) => {
  const { projects } = props;
  const [something, setSomething] = useState('lol');

  const renderProjects = () => (
    <List spacing={6}>
      {projects.map((project) => (
        <ListItem>
          <ListIcon as={ChevronRightIcon} />
          <Box display="inline-block">
            <h3>{project.title}</h3>
            <p>{project.caption}</p>
          </Box>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box className="home__projects-container__projects-menu">
      <Box>
        <Header title="PROJECTS" size={20} />
      </Box>
      {renderProjects()}
    </Box>
  );
};

ProjectMenu.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectMenu;
