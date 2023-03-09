import React, { useState } from 'react';

import {
  Grid, GridItem, Box, Text, Link, Image, OrderedList, ListItem, Center, Flex, UnorderedList,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';
import Lightbox from '../../../components/Lightbox';
import Outline from '../../../components/Outline';
import Carousel, { CarouselItem } from '../../../components/Carousel';

// images
import HelpFormSpanishImage from '../../../assets/images/AustinCold/help-form--spanish.png';
import InfoArabicImage from '../../../assets/images/AustinCold/info--arabic.png';
import InitialDesign from '../../../assets/images/AustinCold/austincold-initialdesigns.png';
import Maps from '../../../assets/images/AustinCold/austincold-maps.png';
import Resources from '../../../assets/images/AustinCold/austincold-resources.png';
import Volunteer from '../../../assets/images/AustinCold/austincold-volunteer.png';

import './austin-cold.scss';

const lineBreakPadding = '.5rem';
const subSectionBreakPadding = '1.5rem';
const sectionBreakPadding = '2rem';

const colStart = [1, 4];
const colSpan = [12, 6];
const colEnd = [2, 10];

const sumStart = [1, 4];
const sum2Start = [1, 7];
const sumSpan = [12, 3];

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
        className="project-page austin-cold"
      >
        {/* <Outline
          titles={titles}
          ids={ids}
        /> */}
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
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
            Crowdsourcing rescue during a winter storm
          </Text>
        </GridItem>
        <GridItem
          colStart={sumStart}
          colSpan={sumSpan}
          marginTop="2rem"
          id="austincold-challenge"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            THE CHALLENGE
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            Help a popular Austin nonprofit crowdsource help for Austinites during an extreme winter storm.
          </Text>
        </GridItem>
        <GridItem
          colSpan={sumSpan}
          colStart={sum2Start}
          marginTop={['0rem', '2rem']}
          id="austincold-outcome"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            THE OUTCOME
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            AustinCold.com, a website that allows users to quickly find or ask for food, water, power, and shelter from others.
          </Text>
        </GridItem>
        <GridItem
          colStart={sumStart}
          colSpan={sumSpan}
          id="austincold-role"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            ROLE
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            I led design and development on the website, with development support from my friends Alexander Melo and Josefina Mancilla.
          </Text>
        </GridItem>
        <GridItem
          colSpan={sumSpan}
          id="austincold-impact"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            IMPACT
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            <UnorderedList>
              <ListItem>
                Recruited 300 volunteers to answer 400 resource / rescue requests
              </ListItem>
              <ListItem>
                Raised $1.5 million in donations used to purchase food and water
              </ListItem>
            </UnorderedList>
          </Text>
        </GridItem>
        <SectionBreak />
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="austincold-intro"
        >
          <Text paddingBottom={lineBreakPadding}>
            In 1935, Congress passed the Federal Power Act, giving the federal government the power to regulate the transfer
            of electricity between states. In a show of defiance and state pride, the Texas utility companies
            came together and decided to eliminate the transfer of electricity in or out of Texas. Almost overnight, the
            Lone Star became the only state to have a completely independent power grid.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            In 2021, that independent power grid shut down as the
            {' '}
            <a href="https://www.texastribune.org/2022/02/15/texas-power-grid-winter-storm-2021/" target="_blank" rel="noreferrer">
              entirety of Texas froze.
            </a>
            {' '}
            Unable to rely on Texas generators and without the ability to borrow electricity from outside states, other
            utilities across the state collapsed and millions lost access to electricity, gas, water, and eventually, shelter.
            Local emergency services were quickly overwhelmed.
          </Text>
          <Text>
            When
            {' '}
            <a href="https://communityresiliencetrust.org/" target="_blank" rel="noreferrer">
              Community Resilience Trust
            </a>
            {' '}
            reached out to the Austin tech community for help establishing volunteer rescue operations,
            I grabbed two friends who still had access to power and internet, and together we launched AustinCold.com in five hours.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="austincold-problem"
        >
          <Text as="h2" paddingBottom={lineBreakPadding}>Problem</Text>
          <Text paddingBottom={lineBreakPadding}>
            Austinites faced a few problems. In order of decreasing severity:
          </Text>
          <OrderedList>
            <ListItem>
              Any life-threatening emergency.
            </ListItem>
            <ListItem>
              No shelter, or transportation to get to designated community shelters
            </ListItem>
            <ListItem>
              No access to food, water, and/or power
            </ListItem>
            <ListItem>
              No understanding of proper cold weather safety precautions
            </ListItem>
          </OrderedList>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="austincold-goals"
        >
          <Text as="h2" paddingBottom={lineBreakPadding}>Goals</Text>
          <Text paddingBottom={lineBreakPadding}>
            Our primary goal was to reduce the number of Austinites that reach problem #1, a
            life-threatening emergency. To do so we built the website with the following priorities,
            in order of decreasing importance:
            {' '}

          </Text>
          <OrderedList>
            <ListItem>
              Connect volunteers to Austinites who need transportation to shelter, and direct them to areas with available shelter.
            </ListItem>
            <ListItem>
              Connect volunteers to Austinites who need food, water, or power.
            </ListItem>
            <ListItem>
              Communicate best practices for cold weather safety.
            </ListItem>
          </OrderedList>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="austincold-the-solution"
        >
          <Text as="h2">Solution</Text>
        </GridItem>
        <GridItem
          colStart={1}
          colSpan={12}
          marginBottom={subSectionBreakPadding}
        >
          <Carousel>
            <CarouselItem>
              <Image
                onLoad={handleLoad}
                src={Volunteer}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={handleLoad}
                src={Maps}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={handleLoad}
                src={Resources}
              />
            </CarouselItem>
          </Carousel>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text paddingBottom={lineBreakPadding}>
            The website is one page, with less important sections further down the page. The majority of visitors to our site were
            looking for information within 1-2 scrolls from the top.
          </Text>
          <Text>
            It has been taken down to preserve CRT resources.
          </Text>
        </GridItem>

        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="austincold-process"
        >
          <Text as="h2" paddingBottom={lineBreakPadding}>Process</Text>
          <Text paddingBottom={lineBreakPadding}>
            While CRT worked with CBS Austin and the mayor&apos;s office to
            {' '}
            <Link
              isExternal
              href="https://cbsaustin.com/news/local/austin-volunteers-create-online-crowdsourcing-hub-to-help-neighbors-in-need-of-storm-aid"
            >
              get the news out
            </Link>
            {' '}
            about austincold.com, my friends and I got to work.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            CRT didn&apos;t have anyone who could interface with sketch or figma, so I actually made the initial designs
            in Microsoft word. This way, CRT stakeholders could adjust content and give feedback asynchronously - time was precious
            and we didn&apos;t have the luxury for a live collaboration session.
          </Text>
          <Lightbox
            id="ProvisioningMural"
            src={InitialDesign}
            onLoad={handleLoad}
          />
          <Text as="h5" paddingBottom={subSectionBreakPadding}>An iteration of the crude, 2-page microsoft word design</Text>

          <Text paddingBottom={lineBreakPadding}>
            Once we were satisfied with the basic outline, we decided to hash out the design details during implementation, and got
            straight to building.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            In order to direct users to areas with available shelter, we needed to implement a way for users to figure out what the closest
            shelter was to them. Because launching as soon as humanly possible was our priority, we decided to put feasibility at the
            forefront of our decision making, and focus on the minimum viable product.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            We started throwing around ideas, and realized with no need for solution scalability, maintenance, or efficient data distribution,
            there was little value in pulling information from an API or building out a backend. The absolute MVP would be a static image of a map
            that showed where the shelters were.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            The quickest way we could think of to create an accurate map was to just create a Google maps list, and then embed it directly
            into the website. We coordinated with CRT to create shelter maps and general resource maps, with a few volunteers assigned to keeping
            the shelter and resource station availability details up-to-date.
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
            We also added language accessibility for communities who needed it most, knowing that
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
        </GridItem>
      </Section>
    </>
  );
};

export default AustinCold;
