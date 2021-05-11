import React from 'react';

import {
  Grid, GridItem, Box, Text, Link, Image, OrderedList, ListItem, Center, Flex, UnorderedList,
} from '@chakra-ui/react';
import Header from '../../../components/Header';
import FlexSensorCircuit from '../../../assets/images/PowerGlove/flex-sensor-circuit.png';
import GloveComplete from '../../../assets/images/PowerGlove/completed-glove.jpg';
import GloveSkeleton from '../../../assets/images/PowerGlove/glove-skeleton.jpg';
import NESPowerGlove from '../../../assets/images/PowerGlove/NES-power-glove.jpg';

import './power-glove.scss';

const imageBottomPadding = '1rem';

const PowerGlove = ({}) => (
  <>
    <Box paddingTop="6rem">
      <Header title="Power Glove" fontSize={100} center />
    </Box>
    <Grid
      templateColumns="repeat(12, 1fr)"
      className="power-glove"
      gap="1rem"
      textAlign={['center', 'left', 'left']}
      minHeight="100vh"
      paddingTop={['2rem', '2rem', '6rem', '6rem']}
      position="relative"
    >
      <Box className="dashed-container" marginTop="6rem" />

      <GridItem colSpan={2} />
      <GridItem colSpan={8} paddingTop="1rem">
        <Text as="h2">NINTENDO&apos;S POWER GLOVE</Text>
        <Center>
          <Image src={NESPowerGlove} objectFit="cover" width="60%" />
        </Center>
        <Center paddingBottom={imageBottomPadding}>
          <Text as="h5">The NES Power Glove</Text>
        </Center>
        <Text>
          Nintendo tried to make a run at a game system controlled by a glove they dubbed the
          &quot;Power Glove&quot;. Its sales flopped spectacularly, which is probably why
          you&apos;ve never heard of it - but I thought the concept was cool.
        </Text>
      </GridItem>
      <GridItem colSpan={2} />
      <GridItem colSpan={2} />
      <GridItem colSpan={8} paddingTop="1rem">
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
        <Text marginTop="1rem">
          The PowerGlove measures voltage changes that occur when fingers bend, and
          interprets it. Thanks to node, johnny-five.js and the power of
          websockets we can take that information and run it through a javascript
          application in real time.
        </Text>
      </GridItem>
      <GridItem colSpan={2} />
      <GridItem colSpan={2} />
      <GridItem colSpan={8} paddingTop="1rem">
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
        <Center marginTop="1rem">
          <Image src={GloveSkeleton} objectFit="cover" width="35%" />
          <Image src={GloveComplete} objectFit="cover" width="35%" />
        </Center>
        <Center paddingBottom={imageBottomPadding}>
          <Text as="h5">Completed circuit</Text>
        </Center>
        <Text>
          If you&apos;re getting a lot of noise, try playing around with the paired
          resistor. Generally flex sensors will have a resistance of 10K,
          so pairing it with another 10K is a good place to start testing; personally,
          I used 22K for all fingers except the thumb.
        </Text>
      </GridItem>
      <GridItem colSpan={2} />
    </Grid>
  </>

);

export default PowerGlove;
