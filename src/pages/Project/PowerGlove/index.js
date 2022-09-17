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

import YTVideo from '../../../components/YTVideo';

import './power-glove.scss';

const lineBreakPadding = '1rem';
const sectionBreakPadding = '2rem';
const subSectionBreakPadding = '1.5rem';
const colStart = [0, 4];
const colSpan = [12, 6];
const colEnd = [13, 10];

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
    'Project Origin',
    'How It Works',
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
        <Outline
          titles={titles}
          ids={ids}
        />
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
              POWERGLOVE
            </Text>
          </Center>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          paddingTop="1rem"
          id="powerglove-project-origin"
        >
          <Text as="h2">Project Origin</Text>
          <Text as="h4">IoT can be a lot of fun</Text>
          <Text paddingBottom={lineBreakPadding}>The PowerGlove is a glove I scrapped together that can &quot;see&quot; what a user&apos;s hand looks like.</Text>
          <Text paddingBottom={sectionBreakPadding}>
            It senses voltage changes in a pretty simple circuit that runs through the glove.
            Thanks to node, johnny-five.js and the power of websockets we can
            take that information and run it through any javascript application in real time.
            Check out the code, an example, and a pseudo-api
            {' '}
            <Link isExternal href="https://github.com/JamesZXie/power-glove">here</Link>
            .
          </Text>
          {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/XQOroTvtn90"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      /> */}
          <Center>
            <Image
              src={GloveExample}
              onLoad={handleLoad}
              height="100%"
              objectFit="contain !important"
            />
          </Center>
          <Center paddingBottom={lineBreakPadding}>
            <Text as="h5">The Power Glove hooked up to a WebGL sketch</Text>
          </Center>

          <Text paddingBottom={lineBreakPadding}>
            Putting on a glove to track hand movements is probably more cumbersome or annoying than using a camera.
            BUT, this project was more about fun and exploration than practicality.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          paddingTop="1rem"
          id="powerglove-how-it-works"
        >
          <Text as="h2">How It Works</Text>
          <Text as="h4">A quick, high-level tutorial</Text>
          <Text paddingBottom={sectionBreakPadding}>
            A Flex sensor is a special resistor that changes value when bent in a direction.
            Arduinos can measure voltage at points in a circuit. Making a circuit with
            two resistors in it, one static and one variable, will make the voltage
            in between them variable. By measuring this voltage, you can interpret
            how much the sensor has been bent.
          </Text>
          <Image
            src={FlexSensorCircuit}
            objectFit="cover"
            onLoad={handleLoad}
          />
          <Text as="h5" paddingBottom={sectionBreakPadding}>Arduino circuit with flex sensor</Text>
          <Text marginTop="1rem">
            Put five of these together, slap them on a glove, and voila! I used an
            airsoft glove because they have padding you can easily cut up to create
            a quick shell to protect the sensors, but you can use anything.
          </Text>
          <Center width="100%" marginTop="2rem">
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
            I meant to open up the power glove to the community after I created it, hosting a few
            classes and creating a pseudo-api for it so that other developers at IBM could
            make their own sketches for an upcoming event.
          </Text>
          <Text paddingBottom={sectionBreakPadding}>
            Unfortunately, I was only able to host one class before Covid cut the project short,
            as not only did it kick us out of the office, but we only had one glove to work with, and as you can imagine
            passing it around was not an option. The glove itself was lost in the 2021 Texas Freeze
            when a ceiling pipe burst and water flooded the entire design building, including
            the lab where it was held. You can find a copy of the repo linked at the top of the page or
            {' '}
            <Link isExternal href="https://github.com/JamesZXie/power-glove">here</Link>
            .
          </Text>
          <SectionBreak />
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          paddingBottom="4rem"
          id="powerglove-process"
        >
          <Text as="h2">Process</Text>
          <Text as="h4">Really just a photo / video dump</Text>
          <Text paddingBottom={subSectionBreakPadding}>
            I did not take nearly enough photos or videos. I was kind of counting on documenting this during the CraftCon event
            that never happened, but here&apos;s what I do have...
          </Text>
          <Image
            src={MK01}
            width="100%"
            onLoad={handleLoad}
          />
          <Text as="h5" paddingBottom={lineBreakPadding}>Cheap prototype before I spent like $300 on the actual glove. </Text>
          <Text paddingBottom={lineBreakPadding}>
            The makelab wasn&apos;t too well equipped at the time, so I had to grab stuff from the IBM kitchen, hence the gloves and coffee stirrers.
            I just wanted to see if people would find it fun to use.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            <strong>It works by completing a circuit</strong>
            {' '}
            which an arduinos read as on/off. If you have one short stick and one longer stick, and bind the ends together with duct tape, the longer stick will create an arch.
            If you push the bottom up from the middle with a knuckle, the top arch doesn&apos;t bend, and so the middles touch - which can make a complete circuit.
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            I literally plugged this into a p5 sketch I had from a youtube tutorial, and then changed the variable dictating speed to
            create speed depending on on/off. Loaded the sketch, and told friends to put their hand in and try to squeeze their finger.
            They weren&apos;t like super impressed but I got a few surprised laughs so I figured it was worth investing into.
          </Text>
          <YTVideo>
            <iframe
              src="https://www.youtube.com/embed/FuFNcOKOYR8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </YTVideo>
          <Text as="h5" paddingBottom={lineBreakPadding}>Flex sensor circuit proof-of-concept test</Text>
          <Text paddingBottom={subSectionBreakPadding}>
            This is the sketch I used with the plastic glove, with a similar circuit, but I have an actual flex sensor plugged into the actual planned circuit.
            The speed was
            {' '}
            <strong>supposed</strong>
            {' '}
            to depend on how hard you press, but as you can see, its poorly calibrated.
          </Text>
          <YTVideo>
            <iframe
              src="https://www.youtube.com/embed/MI5E1K1rgJM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </YTVideo>
          <Text as="h5" paddingBottom={lineBreakPadding}>Getting the shortest finger, the thumb, to finally work. The other interaction near the end did not.. you were supposed to see pulses.</Text>
          <Text
            paddingBottom={sectionBreakPadding}
          >
            I also attached and attempted to use an accelerometer as you can see near the end of the clip above. It didn&apos;t really go that well, although I did include info it collected
            in the API which you can see in the repo above. I attempted to try to calculate position from the acceleration in the accelerometer using kalman filters, but I wasn&apos;t smart
            enough to figure it out in time for CraftCon.
          </Text>
        </GridItem>
        {/* <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          paddingTop="1rem"
          display={['none', 'block']}
        >
          <SectionBreak />
          <Text as="h2">More fun</Text>
          <Text as="h4">A growing museum of web-feasible work I&apos;ve done</Text>
          <Text
            paddingBottom={sectionBreakPadding}
          >
            I also love creating generative art using web technologies that can
            be integrated into real websites and web apps. Here&apos;s some
            &quot;web-feasible&quot; art that I&apos;m periodically translating
            from python / adding to.
            <br />
            <br />
            A lot of these are taken from a book that challenges artists to draw random things.
            I decided to try and interpret the challenges through the lens of generative art. You can
            find the subject / challenge in the top left.
            <br />
            <br />
            Controls:
            <br />
            Keyboard and Mouse to interact, if indicated.
            <br />
            Click arrows to cycle through installations

          </Text>
        </GridItem>
        <GridItem
          colSpan={12}
          marginBottom="-3.75rem"
          overflow="hidden"
          display={['none', 'block']}
        >
          <Sketches />
        </GridItem> */}

      </Section>
    </>
  );
};

export default PowerGlove;
