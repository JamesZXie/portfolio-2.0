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
            I&apos;m still learning how to navigate NDAs, so what I display here will just be a very quick summary, and some screenshots / an
            {' '}
            <Link href="https://ibm.invisionapp.com/share/7PO1QA1AVGE#/320071208_Homepage" isExternal>
              InVision prototype.
              {' '}
            </Link>
            Please let me know if you want a more in depth exploration.
          </Text>
          <SectionBreak />
          <Text as="h2">The Problem</Text>
          <Text as="h4">IBM&apos;s hardware costs are too high</Text>
          <Text paddingBottom={lineBreakPadding}>
            IBM&apos;s supercomputer developer teams need their own hardware to run tests on.
            <br />
            <br />
            Each system can go up to
            {' '}
            <b>$5,000,000</b>
            , and typically each tester has around 3 of their own systems.
            This results in an incredibly high hardware cost that doesn&apos;t scale.

          </Text>

          <Text
            marginTop={sectionBreakPadding}
            as="h2"
          >
            The Solution
          </Text>
          <Text as="h4">Connecting complex teams with diverse requirements.</Text>
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

          </GridItem>
          <Text paddingBottom={lineBreakPadding}>
            Rendezvous is a platform that
            {' '}
            <b>helps developer leads coordinate hardware sharing</b>
            , which reduces hardware bloat and lets IBM&apos;s hardware costs scale.
          </Text>
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
