import React, { useState } from 'react';

import {
  GridItem, Text, Image, OrderedList, ListItem, Box,
  Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel,
  UnorderedList,
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
import Validation from '../../../assets/images/Provisioning/provisioning-validation.png';
import ExplorationMural from '../../../assets/images/Provisioning/provisioning-exploration-mural.png';
import Ideation from '../../../assets/images/Provisioning/provisioning-ideation.png';
import Testing from '../../../assets/images/Provisioning/provisioning-testing.png';

const lineBreakPadding = '.5rem';
const subSectionBreakPadding = '1.5rem';
const sectionBreakPadding = '2rem';
const colStart = [1, 7];
const colSpan = [12, 6];
const colEnd = [13, 12];
const titles = [
  'Summary',
  'Problem',
  'Solution',
  'Process',
  'Next Steps',
];
const ids = [
  'provisioning-summary',
  'provisioning-the-problem',
  'provisioning-the-solution',
  'provisioning-process',
  'provisioning-next-steps',
];

const Provisioning = ({}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 8;

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
          colStart={[0, 2]}
          colSpan={[12, 4]}
        >
          <Text
            as="h6"
            className="project-title"
          >
            IBM
          </Text>
          <Text
            as="h1"
          >
            Cloud checkout
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
            Summary
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Problem:
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            Provisioning &#40;creating a virtual machine&#41; was overwhelming, confusing, and punishing for users.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Solution:
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            We broke the form up into digestible chunks, and rearranged it to make branching smoother.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Impact:
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            <UnorderedList>
              <ListItem>
                Increased form completion rate by 13% &#40;58.5% to 66%&#41;
              </ListItem>
              <ListItem>
                Cut average time to complete the form by 55% &#40;263s to 145s&#41;
              </ListItem>
              <ListItem>
                Eliminated 95% of monthly negative NPS reviews about provisioning &#40;18 to 1&#41;
              </ListItem>
            </UnorderedList>
          </Text>
        </GridItem>
        <SectionBreak />
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-the-problem"
        >
          <Text as="h2" paddingBottom={subSectionBreakPadding}>Problem</Text>
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
            &#40;No audio&#41; A quick UI walkthrough showcasing the four issues of the old provisioning form.
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
          <Text as="h2">Solution</Text>
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
            <CarouselItem>
              <YTVideo>
                <iframe
                  src="https://www.youtube.com/embed/hN3EjaBQsAI"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </YTVideo>
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
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  There are many different ways to break a form up. Why choose this layout?
                </Box>
                <AccordionIcon />
              </AccordionButton>
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
                  to make is important, and this layout allows them to scan pre-filled sections much easier
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
          <Text as="h2" paddingBottom={subSectionBreakPadding}>Process</Text>
          <Text
            as="h3"
            paddingBottom={lineBreakPadding}
          >
            Validation and Buy-in
          </Text>
          <Image
            paddingBottom={lineBreakPadding}
            src={Validation}
            onLoad={onLoad}
          />
          <Text
            as="h5"
            paddingBottom={lineBreakPadding}
          >
            Shadowing a user while they provision a 5 VM workload using the command-line interface (CLI)

          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            The biggest reason the provisioning page had deteriorated so far without a redesign
            is that its actually not used very often. The provisioning page was so cumbersome that it
            was used only for smaller workloads. Anything larger than a few VMs,
            {' '}
            <strong>
              customers would prefer to
              provision directly via our API using the command line
            </strong>
            , even building scripts to perform a
            variety of bulk-friendly options.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            However, we&apos;re planning on completely refactoring our API for completely unrelated reasons.
            This will introduce a number of breaking changes across the board, which gives design an
            opportunity to move provisioning into the UI, as devs will have to use the UI while they re-learn
            our API. If they move back to the CLI, we won&apos;t be able to improve their provisioning
            experience, since we have no control over the CLI.
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            After preliminary research,
            {' '}
            <strong>
              we convinced PM and dev that the breaking changes coming from
              the API refactor are too big of an impediment to users&apos; workflows
            </strong>
            {' '}
            without redesigning provisioning
            for bulk, and if we win our users&apos; trust in provisioning via the UI, we&apos;d
            open up a lot of opportunities for future experience enhancements, which would drive sales
            and increase user retention.
          </Text>

          <Text
            as="h3"
          >
            Exploration
          </Text>
          <Lightbox
            id="ProvisioningMural"
            paddingBottom={lineBreakPadding}
            src={ExplorationMural}
            onLoad={onLoad}
          />
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            Once we defined what the provisioning page&apos;s role would be in the newly redesigned provisioning
            experience &#40;provisioning involves many more steps than just the provisioning page&#41;, we picked it
            apart and then listed and grouped all of its issues. This helped us decide on a direction
            for ideation.
          </Text>

          <Text
            as="h3"
          >
            Ideation
          </Text>
          <Lightbox
            id="IdeationInVision"
            paddingBottom={lineBreakPadding}
            src={Ideation}
            onLoad={onLoad}
          />
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            Resource creation as a concept is pretty common throughout IBM&apos;s other cloud platforms. There isn&apos;t
            a lot of consistency across the products, but there&apos;s an overarching effort to drive consistency -
            so most of this portion of the process was actually taking existing interfaces and rehashing
            them to fit our needs. Most of this was done in InVision Freehand.
          </Text>

          <Text
            as="h3"
          >
            Testing
          </Text>
          <Lightbox
            id="TestingInVision"
            paddingBottom={lineBreakPadding}
            src={Testing}
            onLoad={onLoad}
          />
          <Text
            paddingBottom={lineBreakPadding}
          >
            Because redesigns require very little product-specific context, we took advantage of the broader
            community of IBM designers and ran a few feedback sessions with various other teams across cloud.
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            Once the general flow had been locked in, we tested smaller variations with users to check very
            specific things, such as error handling for edge cases, with high-fi prototypes.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-next-steps"
        >
          <Text as="h2" paddingBottom={subSectionBreakPadding}>Next steps</Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            The biggest addition I would have added to the page, given more time, is motion. I think there
            are a lot of opportunities to add motion throughout the page, especially to smooth out certain &quot;trigger&quot; actions,
            such as going from one section to the other, or how certain selections enable or disable
            other fields.
          </Text>
          <Text
            paddingBottom={sectionBreakPadding}
          >
            Also, the broader provisioning experience extends much further than just this page, and this redesign
            is part of a larger effort to make the provisioning experience as a whole faster. We have quite
            a bit planned for future enhancements, including addressing bulk provisioning, decreasing loadtimes,
            and adding automation to a few of the more annoying processes.
          </Text>

        </GridItem>
      </Section>
    </>
  );
};

export default Provisioning;
