import React, { useState } from 'react';
import {
  Grid,
  GridItem,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';

import './projects.scss';

import austinCold from '../../../assets/images/Home/austincold.png';
import Header from '../../../components/Header';
import Section from '../../../components/Section';

const Projects = (props) => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <Section
      className="projects"
    >
      <GridItem
        colStart={[2, 2, 2, 2, 2, 4]}
        colSpan={[5, 5, 5, 5, 5, 3]}
      >
        <Header title="AUSTINCOLD" />
        <Text>
          Scrambling to save lives during the 2021 Texas winter storms.
        </Text>
      </GridItem>
      <GridItem
        colSpan={[5, 5, 5, 5, 5, 3]}
      >
        <Image className="projects__image" src={austinCold} />
      </GridItem>
    </Section>
  );
};

export default Projects;
