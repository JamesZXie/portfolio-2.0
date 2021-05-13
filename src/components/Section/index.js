import React from 'react';

import {
  Grid,
} from '@chakra-ui/react';

const AustinCold = ({ children, className }) => (
  <Grid
    templateColumns="repeat(12, 1fr)"
    className={className}
    gap="1rem"
    textAlign={['center', 'left', 'left']}
    margin="4rem"
    paddingBottom="2rem"
    border="2px dashed"
    borderRadius="5px"
    position="relative"
  >
    {children}
  </Grid>
);

export default AustinCold;
