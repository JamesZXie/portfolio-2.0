import React, { useState } from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';

import ProjectMenu from './ProjectMenu';
import ProjectDisplay from './ProjectDisplay';
import './projects.scss';

import AustinCold from '../../../assets/images/Home/austincold.png';
import Header from '../../../components/Header';
import Section from '../../../components/Section';

const Projects = (props) => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [{
    title: 'AustinCold',
    caption: 'A website for crowdsourcing rescue and resources during the 2021 Texas Freeze',
    image: AustinCold,
    to: '/austin-cold',
  },
  {
    title: 'Project PowerGlove',
    caption: 'An IoT art project',
    to: '/power-glove',
  },
  // {
  //   title: 'Doodles',
  //   caption: 'An ever-growing collection of generative art',
  //   to: '/doodles',
  // }
  ];

  return (
    <Section
      className="home__projects-container"
    >
      <>
        <GridItem colSpan={1} />
        <GridItem colSpan={10} paddingTop="2rem" paddingLeft=".5rem">
          <Header title="PROJECTS" size={20} />
        </GridItem>
        <GridItem colSpan={1} />
        <GridItem className="grid-placeholder" colSpan={1} />
        <GridItem className="grid-placeholder" colSpan={1} display={['block', 'block', 'block', 'none']} />
        <GridItem colSpan={[10, 10, 5]}>
          <ProjectMenu projects={projects} setActiveProject={setActiveProject} />
        </GridItem>

        <GridItem colSpan={[0, 10, 10, 5]}>
          <ProjectDisplay activeProject={projects[activeProject]} />
        </GridItem>
        <GridItem className="grid-placeholder" colSpan={1} display={['block', 'block', 'block', 'none']} />
        <GridItem className="grid-placeholder" colSpan={1} />

      </>
    </Section>
  );
};

export default Projects;
