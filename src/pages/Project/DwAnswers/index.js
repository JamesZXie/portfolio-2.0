import React from 'react';

import {
  Grid, GridItem, Box, Text, Link, Image, OrderedList, ListItem, Center, Flex, UnorderedList,
} from '@chakra-ui/react';
import Header from '../../../components/Header';
import Section from '../../../components/Section';
import FlexSensorCircuit from '../../../assets/images/PowerGlove/flex-sensor-circuit.png';
import GloveComplete from '../../../assets/images/PowerGlove/completed-glove.jpg';
import GloveExample from '../../../assets/images/PowerGlove/glove-example.gif';
import GloveSkeleton from '../../../assets/images/PowerGlove/glove-skeleton.jpg';
import problemStatement from '../../../assets/images/DwAnswers/problem-statement.png';

import './dw-answers.scss';

const imageBottomPadding = '1rem';

const PowerGlove = ({}) => (
  <>
    <Section
      className="power-glove"
    >
      <GridItem
        colStart={3}
        colSpan={8}
        colEnd={11}
      >
        <Center>
          <Header title="DW-ANSWERS" />
        </Center>
      </GridItem>
      <GridItem
        colStart={3}
        colSpan={8}
        colEnd={11}
        paddingTop="1rem"
      >
        <Text as="h2">THE PROBLEM</Text>
      </GridItem>
      <GridItem
        colStart="3"
        colSpan={8}
      >
        <Image
          src={problemStatement}
          objectFit="cover"
          width="100%"
          alt="On average, IBM support will address over 8,000 tickets before getting to low priority requests"
        />
      </GridItem>
      <GridItem
        colStart={3}
        colSpan={8}
        colEnd={11}
        paddingTop="1rem"
      >
        <Center paddingBottom={imageBottomPadding}>
          <Text as="h5">The NES Power Glove</Text>
        </Center>
        <Text>
          Nintendo tried to make a run at a game system controlled by a glove they dubbed the
          &quot;Power Glove&quot;. Its sales flopped spectacularly, which is probably why
          you&apos;ve never heard of it - but I thought the concept was cool.
        </Text>
      </GridItem>
      <GridItem
        colStart={3}
        colSpan={8}
        colEnd={11}
        paddingTop="1rem"
      >
        <Text as="h2">MY VERSION</Text>
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
          <Image src={GloveExample} width="50%" />
        </Center>
        <Center paddingBottom={imageBottomPadding}>
          <Text as="h5">The Power Glove hooked up to a WebGL sketch</Text>
        </Center>
        <Text marginTop="1rem">
          The PowerGlove measures the voltage change that occurs when a finger bends, and
          interprets it. Thanks to node, johnny-five.js and the power of
          websockets we can take that information and run it through a javascript
          application in real time. Check out the code, an example, and a pseudo-api
          {' '}
          {' '}
          <Link isExternal href="https://github.com/JamesZXie/power-glove">here</Link>
          .
        </Text>
      </GridItem>
      <GridItem
        colStart={3}
        colSpan={8}
        colEnd={11}
        paddingTop="1rem"
      >
        <Text as="h2">HOW IT WORKS</Text>
        <Center>
          <Image src={FlexSensorCircuit} objectFit="cover" width="60%" />
        </Center>
        <Center paddingBottom={imageBottomPadding}>
          <Text as="h5">Arduino circuit with flex sensor</Text>
        </Center>
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
          <Image src={GloveSkeleton} objectFit="cover" width="35%" />
          <Image src={GloveComplete} objectFit="cover" width="35%" />
        </Center>
        <Center paddingBottom={imageBottomPadding}>
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

export default PowerGlove;
