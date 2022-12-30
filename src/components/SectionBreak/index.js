import React from 'react';
import {
  Box, Center, GridItem,
} from '@chakra-ui/react';
import './section-break.scss';

const colStart = [2, 4];
const colEnd = [12, 10];

const SectionBreak = (props) => (
  <GridItem
    colStart={colStart}
    colEnd={colEnd}
    paddingTop="1rem"
    paddingBottom="1rem"
  >
    <Box
      className="section-break"
    />
  </GridItem>
);

export default SectionBreak;
