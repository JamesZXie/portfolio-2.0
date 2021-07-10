import React, { useState } from 'react';

import {
  Grid, GridItem, Box, Text, Link, Image, OrderedList, ListItem, Center, Flex, UnorderedList,
} from '@chakra-ui/react';
import Header from '../../../components/Header';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';

// images
import LandingImage from '../../../assets/images/AustinCold/landing.png';
import HelpFormSpanishImage from '../../../assets/images/AustinCold/help-form--spanish.png';
import InfoArabicImage from '../../../assets/images/AustinCold/info--arabic.png';
import Mobile from '../../../assets/images/AustinCold/mobile.png';
import Mobile2 from '../../../assets/images/AustinCold/mobile2.png';
import Flow from '../../../assets/images/AustinCold/flow.png';
import AustinSnow from '../../../assets/images/AustinCold/austin-snow-air.jpg';

import './austin-cold.scss';

const imageBottomPadding = '2rem';
const colStart = 4;
const colSpan = 6;
const colEnd = 10;

const AustinCold = ({}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 5;

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
        className="austin-cold"
      >
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Center>
            <Header title="AUSTIN COLD" />
          </Center>
        </GridItem>

        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text as="h2">The Problem</Text>
          <Text as="h4">ERCOT cut corners when building the isolated power grid</Text>
          <Image
            src={AustinSnow}
            height="30rem"
            objectFit="cover"
            width="100%"
            alt="Satellite image of Austin covered in snow"
            onLoad={handleLoad}
          />
          <Center paddingBottom={imageBottomPadding}>
            <Text as="h5">Satellite image of Austin covered in snow</Text>
          </Center>
          <Text>
            In Febuary of 2021, Texas froze as three simultaneous winter storms
            relentlessly battered the state for days on end, killing over 100 people and
            causing food, water, and power shortages for millions.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text as="h2">Our Solution</Text>
          <Text as="h4">We built a base of operations for CRT&apos;s rescue operations in 5 hours</Text>
          <Link href="https://www.austincold.com" target="blank">
            <Image
              src={Mobile2}
              onLoad={handleLoad}
            />
          </Link>
          <Text>
            Two of my best friends and I still had
            power, so we teamed up with the nonprofit
            {' '}
            <Link href="https://communityresiliencetrust.org/" isExternal>Community Resilience Trust </Link>
            {' '}
            to rapidly deploy
            {' '}
            <Link href="https://austincold.com" isExternal>austincold.com</Link>
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

        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text as="h2">Our Process</Text>
          <Text as="h4">Priorities and designing without time to test</Text>
          <Text paddingBottom="2rem">
            Our main limitation was time. We started pushing the website five hours
            after we started it, with traffic spiking from thousands of views as
            {' '}
            <Link
              isExternal
              href="https://cbsaustin.com/news/local/austin-volunteers-create-online-crowdsourcing-hub-to-help-neighbors-in-need-of-storm-aid"
            >
              the site gained attention from local media
            </Link>
            .
          </Text>
          <Center>
            <Image
              height="%"
              objectFit="cover"
              src={Flow}
              padding="2rem"
              onLoad={handleLoad}
            />
          </Center>
          <Center paddingBottom={imageBottomPadding}>
            <Text as="h5">How austincold.com helped CRT coordinate efforts</Text>
          </Center>

          <Text>
            We had 4 tasks, by priority:
          </Text>
          <OrderedList paddingBottom="2rem">
            <ListItem>
              Identify victims
            </ListItem>
            <ListItem>
              Recruit volunteers
            </ListItem>
            <ListItem>
              Help inform rescue efforts
            </ListItem>
            <ListItem>
              Gather information about safety and resources.
            </ListItem>
          </OrderedList>

          <Text paddingBottom="2rem">
            We sketched initial wireframes in 5 minutes and started building immediately, adjusting designs when necessary
            to preserve visual hierarchy and trying to leave as much space for site updates as we laid components down.
          </Text>

          <Flex wrap="wrap" paddingTop="2rem" paddingBottom={imageBottomPadding}>
            <Center flex="1">
              <Image
                src={InfoArabicImage}
                paddingRight=".5rem"
                onLoad={handleLoad}
              />
            </Center>
            <Center flex="1">
              <Image
                objectFit="cover"
                paddingLeft=".5rem"
                src={HelpFormSpanishImage}
                onLoad={handleLoad}
              />
            </Center>
            <Center width="100%">
              <Text as="h5">All information and site functions were translated into five different languages.</Text>
            </Center>
          </Flex>
          <Text>
            We also prioritized language accessibility for communities who needed it most, knowing that
            while Austin&apos;s downtown area was kept warm and lit, less fortunate
            neighborhoods were left in the cold.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colEnd={colEnd}
          colSpan={colSpan}
        >
          <Text>
            We maintained the website for about two weeks,
            updating information about food and water after the storms subsided.
          </Text>
        </GridItem>

        <GridItem
          colStart={colStart}
          colEnd={colEnd}
          colSpan={colSpan}
        >
          <Text as="h2">The Team</Text>
          <UnorderedList>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/alexandermelo1/"
              >
                Alexander Melo, a bodega enthusiast
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/josefinamancilla/"
              >
                Josefina Mancilla, a great climber of rocks
              </Link>
            </ListItem>
            <ListItem>
              Me
            </ListItem>
          </UnorderedList>
          <Text paddingTop="2rem">
            And of course, Angelica Orazo from
            {' '}
            <Link href="https://communityresiliencetrust.org">
              Community Resilience Trust
            </Link>
            {' '}
            who led the charge, as well as the hundreds of volunteers
            on the ground and thousands who donated.
          </Text>
        </GridItem>
      </Section>
    </>
  );
};

export default AustinCold;
