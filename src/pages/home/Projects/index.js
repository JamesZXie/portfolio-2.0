import React, { useState } from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';

import ProjectMenu from './ProjectMenu';
import ProjectDisplay from './ProjectDisplay';
import './projects.scss';

import AustinCold from '../../../assets/images/Home/austincold.png';
import Header from '../../../components/Header';

const Projects = (props) => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [{
    title: 'AustinCold',
    caption: 'A website for crowdsourcing rescue and resources during the 2021 Texas Freeze',
    image: AustinCold,
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
      paddingBottom="2rem"
      paddingTop="2rem"
      position="relative"
    >
      <GridItem colSpan={1} />
      <GridItem colSpan={[10, 10, 10, 10]}>
        <Header title="PROJECTS" size={20} />
      </GridItem>
      <GridItem colSpan={1} />
      <Box position="absolute" paddingBottom={4} border="2px dashed" borderRadius="5px" width="calc(100% - 8rem)" marginLeft="4rem" bg="white" height="100%" paddingLeft={2} zIndex={-1} />
      <GridItem className="grid-placeholder" colSpan={1} />
      <GridItem colSpan={[0, 10, 10, 5]} rowSpan={5} display={['none', 'none', 'block']}>
        <ProjectDisplay activeProject={projects[activeProject]} />
      </GridItem>
      <GridItem className="grid-placeholder" colSpan={1} display={['block', 'block', 'block', 'none']} />

      <GridItem colSpan={[10, 10, 5]} rowSpan={5}>
        <ProjectMenu projects={projects} setActiveProject={setActiveProject} />
      </GridItem>
      <GridItem className="grid-placeholder" colSpan={1} />
    </Grid>
  );
};

export default Projects;
