import React, { useState } from 'react';

import {
  Box, Button, Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons';
import Section from '../../../../components/Section';
import './sketches.scss';

import Oysters from './Oysters';
import Dew from './Dew';

const lineBreakPadding = '1rem';
const sectionBreakPadding = '2rem';
const colStart = [0, 4];
const colSpan = [12, 6];
const colEnd = [13, 10];

const Sketches = ({}) => {
  const allSketches = [
    'Oysters',
    'Dew',
  ];

  const [currSketch, setCurrSketch] = useState(0);

  const handleCycle = (inc) => {
    if (inc > 0) {
      if (currSketch + 1 < allSketches.length) {
        setCurrSketch(currSketch + 1);
      } else setCurrSketch(0);
    }
    if (inc < 0) {
      if (currSketch - 1 >= 0) {
        setCurrSketch(currSketch - 1);
      } else setCurrSketch(allSketches.length - 1);
    }
  };

  return (
    <Box position="relative" zIndex="99" backgroundColor="white">
      <Button
        className="sketches__arrow sketches__arrow__back"
        onClick={() => handleCycle(-1)}
      >
        <ArrowBackIcon />
      </Button>
      <Button
        className="sketches__arrow sketches__arrow__forward"
        onClick={() => handleCycle(1)}
      >
        <ArrowForwardIcon />
      </Button>
      <Box className="sketches__label">
        <Text>
          &quot;
          {allSketches[currSketch]}
          &quot;
        </Text>
      </Box>
      { allSketches[currSketch] === 'Oysters' ? <Oysters /> : ''}
      { allSketches[currSketch] === 'Dew' ? <Dew /> : ''}
    </Box>
  );
};

export default Sketches;
