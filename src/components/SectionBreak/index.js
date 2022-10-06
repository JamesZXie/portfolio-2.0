import React from 'react';
import {
  Box, Center, GridItem,
} from '@chakra-ui/react';
import './section-break.scss';

const colStart = [1, 7];
const colSpan = [12, 6];
const colEnd = [12, 12];

const SectionBreak = (props) => (
  <GridItem
    colStart={colStart}
    colSpan={colSpan}
    colEnd={colEnd}
    paddingTop="1rem"
  >
    <Box
      className="section-break"
    />
  </GridItem>
);

export default SectionBreak;
