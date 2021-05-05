import React from 'react';

import { Grid, GridItem, Box } from '@chakra-ui/react';
import Header from '../../../components/Header';

const AustinCold = ({}) => {
  const test = 1;
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      gap="1rem"
      textAlign={['center', 'left', 'left']}
      minHeight="100vh"
    >
      <GridItem>
        <Box>
          hello
        </Box>
      </GridItem>
    </Grid>
  );
};

export default AustinCold;
