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
          paddingTop="1rem"
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
          <Text as="h4">IBM built their supercomputer house on sand</Text>
          <Text paddingBottom={lineBreakPadding}>
            The most expensive requirement to run tests on supercomputers is the supercomputer itself, which can go up to
            {' '}
            <b>$1,000,000 per machine</b>
            , with each
            IBM developer using their own machine to run tests.
          </Text>
          <Text>
            With the IBM Power 10 supercomputers coming out, IBM wanted to see if there was a way to
            {' '}
            <b>cut costs across their current resource economy</b>
            .
          </Text>
          <Text as="h2">The Solution</Text>
          <Text as="h4">Breaking down test compatibility.</Text>
          <Text paddingBottom={lineBreakPadding}>
            Sharing machines is possible. However, the biggest barrier to sharing machines is understanding
            whether or not the tests can be run on the same machine without interfering with each other, which
            usually takes weeks to coordinate. For example, some tests require the machine to be powered on
            and off, which means that obviously no other tests can be run on the same machine for the
            duration of said tests.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            Rendezvous is an analytics tool that helps developer leads understand machine usage and test compatibility to
            an extent where they can move resources around efficiently, allowing the IBM supercomputer resource economy to scale.
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
