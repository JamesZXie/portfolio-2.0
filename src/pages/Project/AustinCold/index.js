import React from 'react';

import {
  Grid, GridItem, Box, Text, Link, Image, OrderedList, ListItem, Center, Flex, UnorderedList,
} from '@chakra-ui/react';
import Header from '../../../components/Header';

import './austin-cold.scss';
import LandingImage from '../../../assets/images/AustinCold/landing.png';
import HelpFormSpanishImage from '../../../assets/images/AustinCold/help-form--spanish.png';
import InfoArabicImage from '../../../assets/images/AustinCold/info--arabic.png';
import NeedHelpTile from '../../../assets/images/AustinCold/need-help-tile.png';
import WantToHelpTile from '../../../assets/images/AustinCold/want-to-help-tile.png';
import SheltersMap from '../../../assets/images/AustinCold/shelters-map.png';
import AustinSnow from '../../../assets/images/AustinCold/austin-snow-air.jpg';

const AustinCold = ({}) => (
  <Grid
    templateColumns="repeat(12, 1fr)"
    className="austin-cold"
    gap="1rem"
    textAlign={['center', 'left', 'left']}
    minHeight="100vh"
    paddingTop={['2rem', '2rem', '6rem', '6rem']}
    position="relative"
  >
    <Box className="dashed-container" marginTop="6rem" />

    <GridItem colSpan={2} />
    <GridItem colSpan={8} paddingTop="1rem">

      <Header title="Austin Cold" fontSize={100} center />

      <Text as="h3">PROBLEM</Text>
      <Image src={AustinSnow} height="30rem" objectFit="cover" width="100%" />
      <Text>
        In Febuary of 2021, Texas froze as three simultaneous winter storms
        relentlessly battered the state for days on end, killing over 100 people and
        causing food, water, and power shortages for millions.
      </Text>
    </GridItem>
    <GridItem colSpan={2} />
    <GridItem colSpan={2} />
    <GridItem colSpan={8}>
      <Text as="h3">WHAT WE DID</Text>
      <Link href="https://www.austincold.com" target="blank">
        <Image
          src={LandingImage}
          alt="landing page of austincold.com"
          marginBottom="1rem"
        />
      </Link>
      <Text>
        Two of my best friends and I who still had
        power teamed up with the nonprofit
        {' '}
        <Link color="blue" href="https://communityresiliencetrust.org/" isExternal>Community Resilience Trust </Link>
        {' '}
        to rapidly deploy
        {' '}
        <Link color="blue" href="https://austincold.com" isExternal>austincold.com</Link>
        , a foundational piece of an emergency relief effort that
        raised
        {' '}
        <strong>$1.5 million</strong>
        {' '}
        for aid and deployed community volunteers to
        rescue over
        {' '}
        <strong>400 people and families</strong>
        {' '}
        in Austin who were left without shelter.
      </Text>
    </GridItem>
    <GridItem colSpan={2} />
    <GridItem colSpan={2} />
    <GridItem colSpan={8}>
      <Text as="h3">OUR PROCESS</Text>
      <Text paddingBottom="1rem">
        Our main limitation was time; we knew people would soon begin
        to freeze and starve by the time we began the project.
        We started pushing the website the same night we started it, with traffic
        spiking early the next day as
        {' '}
        <Link
          color="blue"
          isExternal
          href="https://cbsaustin.com/news/local/austin-volunteers-create-online-crowdsourcing-hub-to-help-neighbors-in-need-of-storm-aid"
        >
          the site gained attention
        </Link>
        .
      </Text>
      <Text>
        We had 3 focuses:
      </Text>
      <OrderedList paddingBottom="1rem">
        <ListItem>
          Identify Victims - we needed to know who required immediate assistance from a person.
        </ListItem>
        <ListItem>
          Organize Volunteers - we needed bodies on the ground for emergency relief.
        </ListItem>
        <ListItem>
          Distribute information on resources - for those who could
          find food and shelter themselves.
        </ListItem>
      </OrderedList>
      <Flex>
        <Center>
          <Image
            height="100%"
            src={NeedHelpTile}
          />
        </Center>
        <Center>
          <Image
            height="100%"
            src={WantToHelpTile}
          />
        </Center>
        <Center>
          <Image
            height="100%"
            src={SheltersMap}
          />
        </Center>
      </Flex>

      <Flex wrap="wrap" paddingTop="1rem" paddingBottom="1rem">
        <Center flex="1">
          <Image
            src={InfoArabicImage}
            paddingRight=".5rem"
          />
        </Center>
        <Center flex="1">
          <Image
            objectFit="cover"
            paddingLeft=".5rem"
            src={HelpFormSpanishImage}
          />
        </Center>
        <Center width="100%">
          <Text as="h5">All information and site functions were translated into five different languages.</Text>
        </Center>
      </Flex>
      <Text>
        We also prioritized accessibility for communities who needed it most, knowing that
        while Austin&apos;s downtown area was kept warm and lit, less fortunate
        neighborhoods were left in the cold.
      </Text>
    </GridItem>
    <GridItem colSpan={2} />
    <GridItem colSpan={2} />
    <GridItem colSpan={8}>
      <Text>
        We maintained the website for about two weeks,
        updating information about food and water after the storms subsided.
      </Text>
    </GridItem>
    <GridItem colSpan={2} />
    <GridItem colSpan={2} />
    <GridItem colSpan={8}>
      <Text as="h3">THE TEAM</Text>
      <UnorderedList>
        <ListItem>
          <Link
            color="blue"
            href="https://www.linkedin.com/in/alexandermelo1/"
          >
            Alexander Melo, a bodega enthusiast
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color="blue"
            href="https://www.linkedin.com/in/alexandermelo1/"
          >
            Josefina Mancilla, a great climber of rocks
          </Link>
        </ListItem>
        <ListItem>
          Me
        </ListItem>
      </UnorderedList>
      <Text paddingTop="1rem">
        And of course, Angelica Orazo from
        {' '}
        <Link color="blue" href="https://communityresiliencetrust.org">
          Community Resilience Trust
        </Link>
        {' '}
        who led the charge, as well as the hundreds of volunteers
        on the ground and thousands who donated.
      </Text>
    </GridItem>
  </Grid>
);

export default AustinCold;
