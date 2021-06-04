import React, { useState } from 'react';
import {
  GridItem,
  Box,
  Flex,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import arrows from '../../../assets/images/Home/Hero/ExploreArrows.svg';

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
        <Flex
          height="100%"
          justify="space-between"
          direction="column"
        >
          <Box>
            <Header title="AUSTINCOLD" />
            <Text paddingRight="4rem">
              Scrambling to save lives during the 2021 Texas winter storms.
            </Text>
          </Box>
          <Link to="/austin-cold">
            <Button className="projects__read-more-button">
              READ MORE
              <Image src={arrows} className="right-arrow" />
            </Button>
          </Link>
        </Flex>
      </GridItem>
      <GridItem
        colSpan={[5, 5, 5, 5, 5, 3]}
        position="relative"
        marginBottom="1rem"
      >
        <Link to="/austin-cold" unselectable>
          <Image className="projects__image" src={austinCold} />
        </Link>
      </GridItem>
    </Section>
  );
};

export default Projects;
