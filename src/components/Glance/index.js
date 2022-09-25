import React from 'react';
import PropTypes from 'prop-types';

import './glance.scss';

import {
  Flex,
  Image,
  Text,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import problemIcon from '../../assets/icons/problem.svg';
import solutionIcon from '../../assets/icons/solution.svg';

const colStart = [0, 4];
const colSpan = [12, 6];
const colEnd = [13, 10];

const Glance = ({ problem, solution }) => (
  <>
    <GridItem
      colStart={colStart}
      colSpan={colSpan}
      colEnd={colEnd}
    >
      <Text
        fontStyle="italic"
      >
        At a glance:
      </Text>
    </GridItem>
    <GridItem
      colStart={colStart}
      colSpan={colSpan}
      colEnd={colEnd}
      className="glance"
    >
      <Flex flexWrap="wrap">
        <Flex className="glance__problem">
          <Image
            src={problemIcon}
            className="icon-32"
            marginBottom="1rem"
          />
          <Text paddingBottom="4px"><strong>Problem</strong></Text>
          {problem}
        </Flex>
        <Flex className="glance__solution">
          <Image
            src={solutionIcon}
            className="icon-32"
            marginBottom="1rem"
          />
          <Text paddingBottom="4px"><strong>Solution</strong></Text>
          {solution}
        </Flex>
      </Flex>
    </GridItem>
  </>
);

Glance.propTypes = {
  problem: PropTypes.node.isRequired,
  solution: PropTypes.node.isRequired,
};

export default Glance;
