import React, { useState } from 'react';

import {
  Grid, GridItem, Box, Text, Link, Image, OrderedList, ListItem, Center, Flex, UnorderedList,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';
import Sketches from './Sketches';
import Outline from '../../../components/Outline';

// images
import FlexSensorCircuit from '../../../assets/images/PowerGlove/flex-sensor-circuit.png';
import GloveComplete from '../../../assets/images/PowerGlove/completed-glove.jpg';
import GloveExample from '../../../assets/images/PowerGlove/glove-example.gif';
import GloveSkeleton from '../../../assets/images/PowerGlove/glove-skeleton.jpg';
import MK01 from '../../../assets/images/PowerGlove/mk-01.png';
import CraftCon from '../../../assets/images/PowerGlove/powerglove-craftcon.GIF';
import PrototypeTest from '../../../assets/images/PowerGlove/powerglove-prototypetest.mov';
import Complete from '../../../assets/images/PowerGlove/powerglove-complete.mov';

import YTVideo from '../../../components/YTVideo';

import './power-glove.scss';

const lineBreakPadding = '1rem';
const sectionBreakPadding = '2rem';
const subSectionBreakPadding = '1.5rem';
const colStart = [2, 4];
const colSpan = [12, 6];
const colEnd = [12, 10];

const sumStart = 4;
const sumSpan = 3;

const PowerGlove = ({}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 5;

  const handleLoad = () => {
    if (numLoaded + 1 === total) {
      setLoading(false);
    } setNumLoaded(numLoaded + 1);
  };

  const titles = [
    'Origin',
    'Mechanisms',
    'Process',
  ];
  const ids = [
    'powerglove-project-origin',
    'powerglove-how-it-works',
    'powerglove-process',
  ];

  return (
    <>
      <PageLoader
        total={total}
        numLoaded={numLoaded}
        loading={loading}
      />
      <Section
        className="project-page power-glove"
      >
        {/* <Outline
          titles={titles}
          ids={ids}
        /> */}
        <GridItem
          colStart={colStart}
          colSpan={[4, 6]}
        >
          <Text
            as="h6"
            className="project-title"
          >
            Personal
          </Text>
          <Text
            as="h1"
          >
            Making digital art more interactive
          </Text>
        </GridItem>
        <GridItem
          colStart={sumStart}
          colSpan={sumSpan}
          marginTop="2rem"
          id="powerglove-challenge"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            THE CHALLENGE
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            Create a cool, aesthetic, and interactive exhibit for a
            festival celebrating &quot;making with hands&quot;.
          </Text>
        </GridItem>
        <GridItem
          colSpan={sumSpan}
          marginTop="2rem"
          id="powerglove-outcome"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            THE OUTCOME
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            A glove that the IBM developer and design community can hook
            up to digital art pieces and make them more interactive.
          </Text>
        </GridItem>
        <GridItem
          colStart={sumStart}
          colSpan={sumSpan}
          id="powerglove-role"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            ROLE
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            I built the glove and began hosting workshops to teach IBM developers and
            designers how to interface with it, before covid hit.
          </Text>
        </GridItem>
        <SectionBreak />
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="powerglove-intro"
        >
          <Text paddingBottom={lineBreakPadding}>
            In 2020 when the IBM Austin design studio asked me to organize its annual Craft Con, a festival
            celebrating &quot;making with hands&quot;, my closest friends and I jumped at the opportunity. We hung up posters, created
            promo videos, built a website, and reached out to other designers to submit topics for talks.
          </Text>
          <Image
            src={CraftCon}
            width="100%"
            onLoad={handleLoad}
            paddingBottom={lineBreakPadding}
          />
          <Text paddingBottom={lineBreakPadding}>
            The problem is that we were also expected to each submit our own topics for talks, and traditionally
            the hosts put the most effort into their workshops. The year before, Zak Crapo had done a live screen
            printing demo, which was cool, aesthetic, and interactive, making it a tough one to follow up on.
            The most interactive thing I had built to date was a hunk of plastic that made a noise based off of
            specific motions, such as a bat crack when swung quickly. It was duct taped to a cast, and had the
            entertainment value of a pull-string toy.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            The extremely general question &quot;what&apos;s a cool, aesthetic, and interactive thing that I can
            feasibly build&quot; became &quot;how can I make my digital art more interactive&quot;, which led to
            a spark of inspiration in the IBM kitchen during a snack run.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="powerglove-prototype"
        >
          <Text as="h2" paddingBottom={lineBreakPadding}>Prototype</Text>
          <Image
            src={MK01}
            width="100%"
            onLoad={handleLoad}
            paddingBottom={lineBreakPadding}
          />
          <Text
            paddingBottom={lineBreakPadding}
          >
            I took food serving gloves and coffee stirrers from the kitchen, breaking off one of the coffee stirrers
            so that it was shorter than the other. Taping the ends together with duct tape formed an arch, and after
            some simple wiring the result was a glove that let me complete/break a circuit by curling my finger. Not bad!
          </Text>
          <video autoPlay loop muted playsinline alt="PrototypeTest" controls src={PrototypeTest} />
          <Text as="h5">
            Unfortunately the only video I could find of
            the prototype - In my excitement, I forgot to document :&#40;
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="powerglove-result"
        >
          <Text as="h2" paddingBottom={lineBreakPadding}>Result</Text>
          <Text paddingBottom={lineBreakPadding}>
            My friends thought the prototype was fun to use, so I went ahead and substituted the cafeteria components for flex sensors.
            Flex sensors change resistance based on how much they&apos;re bent, so if you measure voltage across the sensor you
            can tell how bent they are, which is much more information than a simple on/off.
          </Text>
          <Image
            src={FlexSensorCircuit}
            objectFit="cover"
            onLoad={handleLoad}
          />
          <Text as="h5" paddingBottom={lineBreakPadding}>The actual circuit I used for each finger, made with circuit.io. The extra resistor is for calibration.</Text>
          <Text paddingBottom={lineBreakPadding}>
            Put five of the circuits above together, slap them on a glove, and voila! I used an
            airsoft glove because they have plastic padding you can easily cut up to create a quick
            shell to protect the sensors.
          </Text>
          <Center width="100%">
            <Image
              src={GloveSkeleton}
              flex=".5"
              width="50%"
              height="100%"
              onLoad={handleLoad}
            />
            <Image
              src={GloveComplete}
              width="50%"
              height="100%"
              onLoad={handleLoad}
            />
          </Center>
          <Center paddingBottom={lineBreakPadding}>
            <Text as="h5">Completed glove</Text>
          </Center>
          <Text paddingBottom={lineBreakPadding}>
            I made a basic hand sketch to visually prove that the glove was getting proper data, then built an interfacing model
            &#40;kind of like an API&#41; for pulling data from it. It&apos;s in the IBM github, but I made a copy
            {' '}
            <Link isExternal href="https://github.com/JamesZXie/power-glove">here</Link>
            .
          </Text>
          <video autoPlay loop muted playsinline alt="Complete" controls src={Complete} />
        </GridItem>
      </Section>
    </>
  );
};

export default PowerGlove;
