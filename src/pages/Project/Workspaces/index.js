import React, { useState } from 'react';

import {
  GridItem, Text, Image, OrderedList, ListItem, Box,
  Accordion, AccordionButton, AccordionItem, AccordionIcon, AccordionPanel,
  UnorderedList,
  List,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';
import YTVideo from '../../../components/YTVideo';
import Outline from '../../../components/Outline';
import Carousel, { CarouselItem } from '../../../components/Carousel';
import Lightbox from '../../../components/Lightbox';
import './workspaces.scss';

import WorkspacesMain from '../../../assets/images/Workspaces/workspaces-main.png';
import WorkspacesEdit from '../../../assets/images/Workspaces/workspaces-edit.png';
import WorkspacesCreate from '../../../assets/images/Workspaces/workspaces-create.png';
import WorkspacesSearch from '../../../assets/images/Workspaces/workspaces-search.png';
import WorkspacesProblems from '../../../assets/images/Workspaces/workspaces-problems.png';
import WorkspacesQuickswap from '../../../assets/images/Workspaces/workspaces-quickswap.mov';

const lineBreakPadding = '.5rem';
const subSectionBreakPadding = '1.5rem';
const sectionBreakPadding = '2rem';
const colStart = [1, 4];
const colSpan = [12, 6];
const colEnd = [12, 10];

const sumStart = [1, 4];
const sum2Start = [1, 7];
const sumSpan = [12, 3];

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
        {/* <Outline
          titles={titles}
          ids={ids}
        /> */}
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
        >
          {/* <Image
            onLoad={onLoad}
            src={WorkspacesMain}
          /> */}
          <Text
            as="h6"
            className="project-title"
          >
            IBM
          </Text>
          <Text
            as="h1"
          >
            Making resource access seamless for returning users
          </Text>
        </GridItem>
        <GridItem
          colStart={sumStart}
          colSpan={sumSpan}
          marginTop="2rem"
          id="provisioning-challenge"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            THE CHALLENGE
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            Make the first step in any returning user&apos;s flow, selecting a workspace, easier for users with over 1,000 workspaces.
          </Text>
        </GridItem>
        <GridItem
          colSpan={sumSpan}
          colStart={sum2Start}
          marginTop={['0rem', '2rem']}
          id="provisioning-outcome"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            THE OUTCOME
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            A scalable experience that users can autopilot through.
          </Text>
        </GridItem>
        <GridItem
          colStart={sumStart}
          colSpan={sumSpan}
          id="provisioning-role"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            ROLE
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            I led design and research for the redesign with support from my design lead Jandra.
          </Text>
        </GridItem>
        <GridItem
          colSpan={sumSpan}
          colStart={sum2Start}
          id="provisioning-impact"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            IMPACT
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            Has only been partially implemented. The key metric we&apos;ll be looking at is the change in time spent selecting a workspace.
          </Text>
        </GridItem>
        <SectionBreak />
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-intro"
        >
          <Text>
            A workspace is a simple organizational structure for cloud resources, like how folders are for files. The feature was created
            to help users group and organize their many resources.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-the-problem"
        >
          <Text as="h2" paddingBottom={subSectionBreakPadding}>Problem</Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            The first step to doing anything in PowerVS is to select a workspace, often from a pool of over a thousand workspaces,
            like double-clicking a folder to modify its files.
          </Text>
        </GridItem>
        <GridItem
          colStart={[1, 3]}
          colSpan={[12, 8]}
          id="provisioning-the-problem"
        >
          <Image
            onLoad={onLoad}
            src={WorkspacesProblems}
            paddingBottom={lineBreakPadding}
          />
          <Text
            as="h5"
            paddingBottom={lineBreakPadding}
          >
            A mixed bag of smaller issues, most stemming from long names, or poor assumptions about user behavior.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-the-problem"
        >
          These issues, mostly stemming from users having really long workspace names, combined to add a lot of friction into the workspace selection process.
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-the-problem"
        >
          <Text as="h2" paddingBottom={subSectionBreakPadding}>Solution</Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            The goal was to help users get into their workspaces as quickly as possible.
          </Text>
        </GridItem>
        <GridItem
          colStart={0}
          colSpan={12}
          marginBottom={subSectionBreakPadding}
        >
          <Carousel>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={WorkspacesMain}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={WorkspacesSearch}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={WorkspacesCreate}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={WorkspacesEdit}
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
            1. Designing for veteran users
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            Exploratory research revealed that getting users to shorten names or adopt features like tags or filters
            wasn&apos;t going to happen. Luckily, this also means veteran users eventually train themselves to identify
            a workspace purely by its name.
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            Taking advantage of this insight, we added a quick-swap feature where users can type the name of the workspace directly into the
            side menu and select it without going to the workspaces page. Voila!
          </Text>
          <video autoPlay loop muted playsinline alt="Overwhelming" controls src={WorkspacesQuickswap} />
          <Text
            paddingTop={subSectionBreakPadding}
            paddingBottom={subSectionBreakPadding}
          >
            Veteran users who really know what they&apos;re doing can get started almost immediately.
          </Text>

          <Text
            as="h3"
            paddingBottom={lineBreakPadding}
          >
            2. Designing for beginner users
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            For users who aren&apos;t as familiar with the workspace they&apos;re looking for just yet, a page that lets them scan a broader range of
            options is still necessary.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            In addition to asking the dev team to implement a fuzzy search instead of an exact search, to allow for typos, we did the following:
          </Text>
          <OrderedList>
            <ListItem>
              <Text>
                <strong>Designed the layout around long names</strong>
              </Text>
              <Text>
                The table format makes names easier to scan, and similar names
                have more prominent differences. Names are no longer truncated.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <strong>Reversed the default sorting order to increase consistency</strong>
              </Text>
              <Text>
                The page is now sorted oldest first → newest last. Previously, if anyone created a workspace in a shared account,
                all of the workspaces would shift in order. Since workspace deletion almost never
                occurs, users can get used to the position of a workspace on their screen.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <strong>Pruned useless information</strong>
              </Text>
              <Text>
                All the information displayed upfront is relevant to identifying the workspace, except the status which is important for alerting the user to
                outages. Any excess information has been moved to the expanded area of the table row.
              </Text>
            </ListItem>
          </OrderedList>
        </GridItem>
      </Section>
    </>
  );
};

export default Provisioning;
