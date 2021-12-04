import React, { useState } from 'react';

import {
  Grid, GridItem, Button, Text, Link, Image, OrderedList, ListItem, Center, Flex, UnorderedList,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';

import AnalyticsImage from '../../../assets/images/Rendezvous/analytics.png';

import './rendezvous.scss';

const lineBreakPadding = '1rem';
const sectionBreakPadding = '2rem';
const colStart = [0, 4];
const colSpan = [12, 6];
const colEnd = [13, 10];

const Rendezvous = ({}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 1;

  const handleLoad = () => {
    if (numLoaded + 1 === total) {
      setLoading(false);
    } setNumLoaded(numLoaded + 1);
  };

  return (
    <>
      {/* <PageLoader
        total={total}
        numLoaded={numLoaded}
        loading={loading}
      /> */}
      <Section
        className="project-page power-glove"
      >
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Center>
            <Text
              as="h1"
              className="blurb"
            >
              RENDEZVOUS
            </Text>
          </Center>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          paddingTop={lineBreakPadding}
        >
          <Text paddingBottom={sectionBreakPadding}>
            I&apos;m still learning how to navigate NDAs, so what I display
            here will just be a very quick summary, and some screenshots / an
            {' '}
            <Link href="https://ibm.invisionapp.com/share/7PO1QA1AVGE#/320071208_Homepage" isExternal>
              InVision prototype.
              {' '}
            </Link>

            <br />
            <br />
            Depending on potential conflicts of interest, I can go into more depth with a
            presentation. Let me know if that&apos;s something you want!
            {' '}
          </Text>
          <SectionBreak />
          <Text as="h2">The Problem</Text>
          <Text as="h4">IBM supercomputer test team costs were at an all time high</Text>
          <Text paddingBottom={lineBreakPadding}>
            The most expensive requirement to run tests on supercomputers is the hardware, which can go up to
            {' '}
            <b>$1,000,000 per setup</b>
            .
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            Each test has very specific environment requirements, which makes finding and assembling environments extremely hard.
            While sharing was theoretically possible,
            {' '}
            <b>barriers to sharing</b>
            {' '}
            meant most teams needed to order and build custom
            environments each year. Not only was this
            {' '}
            <b>extremely cost inefficient</b>
            , but it was also
            {' '}
            <b>too rigid </b>
            - any mid-year
            environment adjustments would force developers to spend weeks hunting for another team
            with the parts they needed.
            {' '}
          </Text>
          <Text>
            In short,
            {' '}
            <b>the resource economy surrounding supercomputer test teams didn&apos;t scale.</b>
          </Text>
          <Text
            marginTop={sectionBreakPadding}
            as="h2"
          >
            The Solution
          </Text>
          <Text as="h4">Breaking down test compatibility.</Text>
          <Text paddingBottom={lineBreakPadding}>
            Rendezvous is an analytics tool that
            {' '}
            <b>breaks down barriers to resource sharing</b>
            {' '}
            by helping developer leads
            understand machine usage and test compatibility to an extent where they can move resources around efficiently,
            allowing the resource economy to scale.
          </Text>
        </GridItem>
        <GridItem
          colStart={[2, 4]}
          colSpan={[10, 6]}
        >
          <Image
            src={AnalyticsImage}
            objectFit="cover"
            width="100%"
            alt="On average, IBM support will address over 8,000 tickets before getting to low priority requests"
            paddingBottom={sectionBreakPadding}
            onLoad={handleLoad}
          />
          <Button
            className="link-button__secondary"
            float="right"
            onClick={() => window.open('https://ibm.invisionapp.com/share/7PO1QA1AVGE#/320071208_Homepage')}
          >
            Check out the full InVision
          </Button>
        </GridItem>

      </Section>
    </>
  );
};

export default Rendezvous;
