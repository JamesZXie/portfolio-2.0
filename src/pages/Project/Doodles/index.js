import React from 'react';

import {
  Grid, GridItem, Box, Text, Link, Image, OrderedList, ListItem, Center, Flex, UnorderedList,
} from '@chakra-ui/react';
import Header from '../../../components/Header';
import Section from '../../../components/Section';

import './doodles.scss';

const imageBottomPadding = '1rem';

const Doodles = ({}) => (
  <>
    <Box paddingTop="6rem">
      <Header title="Doodles" fontSize={100} center />
    </Box>
    <Section
      className="power-glove"
    >
      <GridItem colSpan={2} />
      <GridItem colSpan={8}>
        <Text as="h2">MY BEST DOODLES</Text>
        <Text>
          I spend a lot of my time playing around with processing;
          here are some of the better sketches.
        </Text>
      </GridItem>
      <GridItem colSpan={2} />
    </Section>
  </>
);

export default Doodles;
