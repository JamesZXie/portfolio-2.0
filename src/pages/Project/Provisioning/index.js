import React, { useState } from 'react';

import {
  GridItem, Text, Image, OrderedList, ListItem, Box,
  Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';
import YTVideo from '../../../components/YTVideo';
import Outline from '../../../components/Outline';
import Carousel, { CarouselItem } from '../../../components/Carousel';
import Lightbox from '../../../components/Lightbox';

import './provisioning.scss';

import General from '../../../assets/images/Provisioning/provisioning-general.png';
import BootImage from '../../../assets/images/Provisioning/provisioning-boot-image.png';
import Profile from '../../../assets/images/Provisioning/provisioning-profile.png';
import StorageVolumes from '../../../assets/images/Provisioning/provisioning-storage-volumes.png';
import NetworkInterfaces from '../../../assets/images/Provisioning/provisioning-network-interfaces.png';
import Complete from '../../../assets/images/Provisioning/provisioning-complete.png';
import Invision from '../../../assets/images/Provisioning/provisioning-invision.png';
import Mural from '../../../assets/images/Provisioning/provisioning-mural.png';

const lineBreakPadding = '.5rem';
const subSectionBreakPadding = '1.5rem';
const sectionBreakPadding = '2rem';
const colStart = [1, 7];
const colSpan = [12, 6];
const colEnd = [13, 12];
const titles = [
  'SUMMARY',
  'PROBLEM',
  'SOLUTION',
  'PROCESS',
];
const ids = [
  'provisioning-summary',
  'provisioning-the-problem',
  'provisioning-the-solution',
  'provisioning-process',
];

const Provisioning = ({}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 5;

  const onLoad = () => {
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
        className="project-page provisioning"
      >
        <Outline
          titles={titles}
          ids={ids}
        />
        <GridItem
          colStart={2}
          colSpan={4}
        >
          <Text
            as="h1"
            className="project-title"
          >
            PROVISIONING
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-summary"
        >
          <Text
            paddingBottom={subSectionBreakPadding}
            as="h2"
          >
            SUMMARY
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Problem:
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            Certain software licenses &#40;think stuff like Sketch&#41; for IBM&apos;s cloud overcharge customers.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Solution:
          </Text>
          <Text>
            We took an old feature and applied it to the cloud in a way that changes how licenses charge our customers, reducing the cost of licenses by up to 90%.
          </Text>
        </GridItem>
        <SectionBreak />
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-the-problem"
        >
          <Text as="h2">PROBLEM</Text>
          <Text as="h4">Issues with the old provisioning page</Text>
          <YTVideo>
            <iframe
              src="https://www.youtube.com/embed/iOHY29x0d18"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </YTVideo>
          <Text
            paddingBottom={lineBreakPadding}
            as="h5"
          >
            (No audio) A quick UI walkthrough showcasing the four issues of the old provisioning form.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text
            paddingBottom={lineBreakPadding}
          >
            The old provisioning page, as you can see above, had four substantial issues:
          </Text>
          <OrderedList>
            <ListItem>
              <strong>Overwhelming</strong>
              : there are too many options to absorb and understand at once.
            </ListItem>
            <ListItem>
              <strong>Confusing</strong>
              : ignoring the technical complexity of provisioning, many selections can push the user down a new path,
              with the reflected visual change being
              {' '}
              <strong>jarring</strong>
              . Its hard for users to keep track of their progress, or
              understand what they should do next.
            </ListItem>
            <ListItem>
              <strong>Punishing</strong>
              : certain options are completely incompatible with others, while other options are completely
              dependent on others. Making an error can mean wiping progress.
            </ListItem>
            <ListItem>
              <strong>Ugly</strong>
              : The form felt outdated and unusable due to either poor or inconsistent aesthetic choices.
            </ListItem>
          </OrderedList>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-the-solution"
        >
          <Text as="h2">SOLUTION</Text>
          <Text as="h4">Breaking the form into digestible chunks, and preparing to optimize for bulk</Text>
        </GridItem>
        <GridItem
          colStart={1}
          colSpan={12}
          colEnd={13}
          marginBottom={subSectionBreakPadding}
        >
          <Carousel>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={General}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={BootImage}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={Profile}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={StorageVolumes}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={NetworkInterfaces}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={Complete}
              />
            </CarouselItem>
          </Carousel>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text
            as="h3"
            paddingBottom={lineBreakPadding}
          >
            1. Reducing cognitive load
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            By breaking the page up into bite-sized chunks, we can turn a complex process
            into multiple smaller, simple decisions to reduce cognitive load. With most of the loading
            components hidden, the page also feels faster and simpler.
          </Text>

          <Text
            as="h3"
            paddingBottom={lineBreakPadding}
          >
            2. Eliminating confusion from branching
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            Simplifying the page helps with this, but we also broke the page into sections in such a way to hide
            the vast majority of the changes, making user flow branching easier. Users will only observe small,
            understandable changes within each section, and when they&apos;re sent down a different path due to a
            decision on the form, they don&apos;t need to process the change.
          </Text>

          <Text
            as="h3"
            paddingBottom={lineBreakPadding}
          >
            3. Reducing error severity
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            After placing fields into sections to make branching smoother, we rearranged each section to make it so
            that any changes or fixes to selections can only affect fields below them. This heavily reduces the
            chances a user steers themselves into making an error that forces them to re-do large swathes of the page.
          </Text>

          <Text
            as="h3"
            paddingBottom={lineBreakPadding}
          >
            4. Improving consistency and aesthetic
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            We made scanning easier by improving spacing and typography consistentcy throughout the form, as well as aligning
            everything vertically so the user&apos;s eye didn&apos;t have to jump from left to right. A few color and
            component tweaks brought everything together to give the page a much more modern finish.
          </Text>

          <Accordion
            paddingBottom={subSectionBreakPadding}
            allowMultiple
          >
            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    There are many different ways to break a form up. Why choose this layout?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                <Text paddingBottom={lineBreakPadding}>
                  The layout choice actually comes as part of a flow that I&apos;m not covering in this
                  case study. A lot of our customers have to provison multiple VMs at a time, and
                  going through the form for every VM is an awful experience.
                </Text>
                <Text>
                  We&apos;re soon going to
                  implement
                  {' '}
                  <strong>VM templates</strong>
                  , where users can start with a pre-populated form. Understanding what edits they need
                  to make is important, and this layout allows them to scan each section much easier
                  than other options we explored.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Text>
            If you&apos;d like to see the redesign in action, a pure UI video walkthrough is available
            {' '}
            <a href="https://youtu.be/hN3EjaBQsAI" target="_blank" rel="noreferrer">here</a>
            {' '}
            for those who want to see a functional UI, instead of the key screens above.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-process"
        >
          <Text as="h2">PROCESS</Text>
          <Text as="h4">Conception to implementation</Text>
          <Lightbox
            id="ProvisioningMural"
            paddingBottom={lineBreakPadding}
            src={Mural}
            onLoad={onLoad}
          />
          <Lightbox
            id="ProvisioningInVision"
            paddingBottom="30rem"
            src={Invision}
            onLoad={onLoad}
          />
        </GridItem>
      </Section>
    </>
  );
};

export default Provisioning;
