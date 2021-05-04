import React, { useState } from 'react';
import {
  Box, Flex, List, ListItem, ListIcon,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import PropTypes from 'prop-types';

import Header from '../../../components/Header';

const ProjectMenu = (props) => {
  const { projects } = props;

  const renderProjects = () => (
    <List spacing={6}>
      {projects.map((project) => (
        <ListItem>
          <Flex direction="columns" align="center">
            <ListIcon as={ChevronRightIcon} />
            <Box display="inline-block">
              <h3>{project.title}</h3>
              <p>{project.caption}</p>
            </Box>
          </Flex>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box className="home__projects-container__projects-menu">
      {renderProjects()}
    </Box>
  );
};

ProjectMenu.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectMenu;
