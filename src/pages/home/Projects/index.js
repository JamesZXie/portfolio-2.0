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
    <GridItem className="grid-placeholder" colSpan={1} />
    <GridItem colSpan={5} rowSpan={5} bg="blue" />
  </Grid>
);

export default Projects;
