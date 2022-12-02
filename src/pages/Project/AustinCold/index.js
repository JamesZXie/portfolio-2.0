import React, { useState } from 'react';

import {
  Grid, GridItem, Box, Text, Link, Image, OrderedList, ListItem, Center, Flex, UnorderedList,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';
import Outline from '../../../components/Outline';

// images
import HelpFormSpanishImage from '../../../assets/images/AustinCold/help-form--spanish.png';
import InfoArabicImage from '../../../assets/images/AustinCold/info--arabic.png';
import Mobile2 from '../../../assets/images/AustinCold/mobile2.png';
import Flow from '../../../assets/images/AustinCold/flow.png';
import AustinSnow from '../../../assets/images/AustinCold/austin-snow-air.jpg';
import showcase from '../../../assets/images/AustinCold/showcase.png';
import mike from '../../../assets/images/AustinCold/mike.png';
import coldMike from '../../../assets/images/AustinCold/cold-mike.png';
import needHelpFlow from '../../../assets/images/AustinCold/need-help-flow.png';

import './austin-cold.scss';

const lineBreakPadding = '1rem';
const sectionBreakPadding = '2rem';

const colStart = [1, 7];
const colSpan = [12, 6];
const colSpanHalf = [12, 2];
const colEnd = [13, 12];
const titles = [
  'Problem',
  'Solution',
  'Process',
  'What if?',
  'User profile',
  'Insights',
  'Result',
];
const ids = [
  'austincold-the-problem',
  'austincold-the-solution',
  'austincold-process',
  'austincold-what-if',
  'austincold-the-user',
  'austincold-insights',
  'austincold-result',
];

const AustinCold = ({}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 6;

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
        className="project-page austin-cold"
      >
        <Outline
          titles={titles}
          ids={ids}
        />
        <GridItem
          colStart={[0, 2]}
          colSpan={[12, 4]}
        >
          <Text
            as="h6"
            className="project-title"
          >
            CRT &#40;nonprofit&#41;
          </Text>
          <Text
            as="h1"
          >
            Austincold
          </Text>
        </GridItem>

        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="austincold-the-problem"
        >
          <Text as="h2">Problem</Text>
          <Text as="h4">ERCOT cut corners when building the isolated power grid</Text>
          <Image
            src={AustinSnow}
            height="30rem"
            objectFit="cover"
            width="100%"
            alt="Satellite image of Austin covered in snow"
            onLoad={handleLoad}
          />
          <Center paddingBottom={sectionBreakPadding}>
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
          id="austincold-the-solution"
        >
          <Text as="h2">Solution</Text>
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
          id="austincold-process"
        >
          <Text as="h2">Process</Text>
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
          <Center paddingBottom={sectionBreakPadding}>
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

          <Flex wrap="wrap" paddingTop="2rem" paddingBottom={sectionBreakPadding}>
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
          <Text paddingBottom={sectionBreakPadding}>
            We maintained the website for about two weeks,
            updating information about food and water after the storms subsided.
          </Text>
          <SectionBreak />
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="austincold-what-if"
        >
          <Text as="h2">What if?</Text>
          <Text as="h4">We hit a lot of roadbumps... how might we have avoided them?</Text>
          <Text paddingBottom={sectionBreakPadding}>
            A lot of fires broke out over the 72-hour ordeal, such as returning users struggling to find information as updates changed the website,
            or trying to stuff in language accessibility after our initial launch. If I could have frozen time and really thought about the design,
            this is what I would have proposed.
          </Text>
        </GridItem>
        <GridItem
          colStart={0}
          colSpan={12}
        >
          <Image
            src={showcase}
            objectFit="cover"
            width="100%"
            position="relative"
            zIndex="99"
            alt="Screen showcase, mostly eye candy."
            paddingBottom={sectionBreakPadding}
            onLoad={handleLoad}
          />
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="austincold-the-user"
        >
          <Text as="h2">User profile</Text>
          <Text as="h4">Who are we building for?</Text>
          <Text paddingBottom={lineBreakPadding}>
            Although we never had a user research session, we did have discussions with Community Resilience Trust&apos;s about the
            target demographics for this project - in short, we&apos;re looking to help &quot;everyone else&quot;.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            Let&apos;s take a look at one of the
            {' '}
            <strong>toughest</strong>
            {' '}
            users we&apos;re designing for.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpanHalf}
        >
          <Image
            src={mike}
            objectFit="cover"
            width="100%"
            alt="Doodle of mike"
            paddingBottom={sectionBreakPadding}
            onLoad={handleLoad}
            padding={['1rem', '4rem']}
          />
        </GridItem>
        <GridItem
          colSpan={colSpanHalf}
        >
          <Flex
            height="100%"
            justify="center"
            direction="column"
          >
            <Box>
              Mike is a nice dude living in a small homeless camp in East Austin.
              <UnorderedList>
                <ListItem>
                  He&apos;s not too tech saavy, but he does have an iPhone 8 and service -
                  courtesy of Front Steps, a popular nonprofit.
                </ListItem>
                <ListItem>
                  He has no access to food, water, or power.
                </ListItem>
                <ListItem>
                  911 isn&apos;t interested in helping him yet because his situation
                  isn&apos;t considered life-threatening.
                </ListItem>
                <ListItem>
                  If he doesn&apos;t get to warm shelter before sundown,
                  his life may be in danger.
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text paddingBottom={lineBreakPadding}>
            So what makes Mike hard to design for? Well for starters, Mike is cold.
            Have you tried using your phone when your hands are frozen?
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            Not only is Mike cold, but he also has no access to internet, shelter, and
            - worst of all - he can&apos;t charge his phone. He&apos;s checking his battery life
            every other second, because if it hits 0%,
            {' '}
            <strong>he can&apos;t call 911.</strong>
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpanHalf}
        >
          <Image
            src={coldMike}
            objectFit="cover"
            width="100%"
            alt="Doodle of mike, freezing."
            paddingBottom={sectionBreakPadding}
            onLoad={handleLoad}
            padding={['.5rem', '2rem']}
          />
        </GridItem>
        <GridItem
          colSpan={colSpanHalf}
        >
          <Flex align="center" height="100%">
            <Box>
              <Text>
                This means we are designing for someone who:
              </Text>
              <OrderedList>
                <ListItem>
                  Is pressed for
                  {' '}
                  <strong>time and battery life</strong>
                  .
                </ListItem>
                <ListItem>
                  Has an
                  {' '}
                  <strong>old</strong>
                  ,
                  {' '}
                  <strong>slow</strong>
                  {' '}
                  phone with
                  {' '}
                  <strong>slow</strong>
                  {' '}
                  service.
                </ListItem>
                <ListItem>
                  <strong>
                    Struggles to operate his device
                  </strong>
                  {' '}
                  due to the cold.
                </ListItem>
              </OrderedList>
            </Box>
          </Flex>
        </GridItem>

        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="austincold-insights"
        >
          <Text as="h2">Insights</Text>
          <Text as="h4">What AustinCold looks like built for Mike</Text>
          <Text>
            Here&apos;s what this means for our design:
          </Text>
          <UnorderedList>
            <ListItem>
              <strong>Lightweight:</strong>
              {' '}
              Minimal assets with a dev focus on loadtimes and performance.
            </ListItem>
            <ListItem>
              <strong>Big stuff, small screen: </strong>
              {' '}
              Design around stiff users and older devices.
            </ListItem>
            <ListItem>
              <strong>Clear steps: </strong>
              {' '}
              Getting help has to be clean, simple, and easy to follow.
            </ListItem>
            <ListItem>
              <strong>Drive confidence: </strong>
              {' '}
              Mike needs to know that the time and battery life he&apos;s spending to get help will pay off. We can&apos;t let him give up!
            </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="austincold-result"
        >
          <Text paddingTop={sectionBreakPadding} as="h2">Result</Text>
          <Text as="h4">Simple 3 steps he can follow</Text>
          <Image
            src={needHelpFlow}
            objectFit="cover"
            width="100%"
            alt="Two panel flow to get help"
            paddingBottom={sectionBreakPadding}
            onLoad={handleLoad}
          />
          <Text>
            After a one-time selection of language, Mike needs to click 2 very large buttons, and then input his phone number in the resulting form.
            The current site loads in under 4 seconds on 2G internet speeds according to a Lighthouse assessment, but if we lazy-loaded
            our maps, we could cut that time in half.
          </Text>
          <Text paddingTop={lineBreakPadding}>
            What I would hope to see from using this flow is a higher conversion rate due to faster loading times,
            increased confidence in our ability to help everyone who asks, and much clearer steps.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colEnd={colEnd}
          colSpan={colSpan}
        >
          <Text as="h2">The team</Text>
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
