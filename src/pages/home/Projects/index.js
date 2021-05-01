import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';

import './projects.scss';

const Projects = (props) => (
  <Grid
    className="home__projects-container"
    templateColumns="repeat(12, 1fr)"
    gap="1rem"
    textAlign={['center', 'left', 'left']}
    padding={2}
  >
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
    <Box w="100%" h="10" bg="blue.500" />
  </Grid>
);

export default Projects;
