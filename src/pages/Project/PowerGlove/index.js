import React, { useState } from 'react';

import {
  Grid, GridItem, Box, Text, Link, Image, OrderedList, ListItem, Center, Flex, UnorderedList,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';

// images
import FlexSensorCircuit from '../../../assets/images/PowerGlove/flex-sensor-circuit.png';
import GloveComplete from '../../../assets/images/PowerGlove/completed-glove.jpg';
import GloveExample from '../../../assets/images/PowerGlove/glove-example.gif';
import GloveSkeleton from '../../../assets/images/PowerGlove/glove-skeleton.jpg';

import './power-glove.scss';

const PowerGlove = ({
  sectionBreakPadding,
  lineBreakPadding,
  colStart,
  colSpan,
  colEnd,
}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 4;

  const handleLoad = () => {
    if (numLoaded + 1 === total) {
      setLoading(false);
    } setNumLoaded(numLoaded + 1);
  };

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
        >
          <Text paddingBottom={sectionBreakPadding}>
            When not dancing, climbing, or gaming, I enjoy playing with bleeding edge tech and imagining how
            it could affect the future of human-computer interaction.
          </Text>
          <SectionBreak />
          <Text as="h2">The Project</Text>
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
            />
          </Center>
          <Center paddingBottom={lineBreakPadding}>
            <Text as="h5">The Power Glove hooked up to a WebGL sketch</Text>
          </Center>

          <Text paddingBottom={lineBreakPadding}>
            From a user perspective, this is worse than using a camera. However image recognition is unreliable, and
            for an experiment that attempts to envision the future, an accurate way to retrieve user input makes sense.
          </Text>
          <Text>
            Plus, working with hardware while blasting rock music makes me feel like Tony Stark.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          paddingTop="1rem"
        >
          <Text as="h2">Functionality</Text>
          <Text as="h4">How does it work?</Text>
          <Image
            src={FlexSensorCircuit}
            objectFit="cover"
            onLoad={handleLoad}
          />
          <Text as="h5">Arduino circuit with flex sensor</Text>
          <Text>
            A Flex sensor is a special resistor that changes value when bent in a direction.
            Arduinos can measure voltage at points in a circuit. Making a circuit with
            two resistors in it, one static and one variable, will make the voltage
            in between them variable. By measuring this voltage, you can interpret
            how much the sensor has been bent.
          </Text>
          <Text marginTop="1rem">
            Put five of these together, slap them on a glove, and voila! I used an
            airsoft glove because they have padding you can easily cut up to create
            a quick shell to protect the sensors, but you can use anything.
          </Text>
          <Center marginTop="2rem">
            <Image
              src={GloveSkeleton}
              objectFit="cover"
              width="35%"
              onLoad={handleLoad}
            />
            <Image
              src={GloveComplete}
              objectFit="cover"
              width="35%"
              onLoad={handleLoad}
            />
          </Center>
          <Center paddingBottom={lineBreakPadding}>
            <Text as="h5">Completed glove</Text>
          </Center>
          <Text>
            I meant to open up the power glove to the community after I created it, hosting a few
            classes and creating a pseudo-api for it so that other developers at IBM could
            make their own sketches for an upcoming event. Unfortuantely, Covid cut that project
            very, very short, as we only had one glove to work with, and as you can imagine
            passing it around was not an option. You can find a copy of that repo linked above or
            {' '}
            <Link isExternal href="https://github.com/JamesZXie/power-glove">here</Link>
            .
          </Text>
        </GridItem>
      </Section>
    </>
  );
};

PowerGlove.propTypes = {
  lineBreakPadding: PropTypes.string.isRequired,
  sectionBreakPadding: PropTypes.string.isRequired,
  colStart: PropTypes.number.isRequired,
  colSpan: PropTypes.number.isRequired,
  colEnd: PropTypes.number.isRequired,
};

export default PowerGlove;
