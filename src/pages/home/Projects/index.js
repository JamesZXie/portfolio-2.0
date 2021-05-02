import React, { useState } from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';

import ProjectMenu from './ProjectMenu';
import ProjectDisplay from './ProjectDisplay';
import './projects.scss';

const Projects = (props) => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [{
    title: 'AustinCold',
    caption: 'A website for crowdsourcing help during the 2021 Texas Freeze',
  },
  {
    title: 'Project PowerGlove',
    caption: 'An IoT art project',
  },
  {
    title: 'Craft Con',
    caption: 'A celebration of making things',
  },
  {
    title: 'Doodles',
    caption: 'An ever-growing collection of generative art',
  }];

  return (
    <Grid
      className="home__projects-container"
      templateColumns="repeat(12, 1fr)"
      gap="1rem"
      textAlign={['center', 'left', 'left']}
      padding={2}
    >
      <GridItem className="grid-placeholder" colSpan={1} />
      <GridItem colSpan={5} rowSpan={5} bg="blue">
        <ProjectDisplay activeProject={projects[activeProject]} />
      </GridItem>
      <GridItem colSpan={5} rowSpan={5}>
        <ProjectMenu projects={projects} setActiveProject={setActiveProject} />
      </GridItem>
      <GridItem className="grid-placeholder" colSpan={1} />
    </Grid>
  );
};

export default Projects;
