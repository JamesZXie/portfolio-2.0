import React, { useState } from 'react';
import {
  Box, Flex, List, ListItem, ListIcon,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import Header from '../../../components/Header';

const ProjectMenu = (props) => {
  const { projects } = props;

  const renderProjects = () => (
    <List spacing={6}>
      {projects.map((project) => (
        <Link to={project.to}>
          <ListItem marginBottom="1rem">
            <Flex direction="columns">
              <ListIcon as={ChevronRightIcon} marginTop=".25rem" />
              <Box display="inline-block">
                <h3>{project.title}</h3>
                <p>{project.caption}</p>
              </Box>
            </Flex>
          </ListItem>
        </Link>
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
