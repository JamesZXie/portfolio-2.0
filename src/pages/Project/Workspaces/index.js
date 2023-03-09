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
import WorkspacesProblems from '../../../assets/images/Workspaces/workspaces-problems.png';

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
  const total = 1;

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
          <Image
            onLoad={onLoad}
            src={WorkspacesMain}
          />
          <Text
            as="h5"
            paddingBottom={sectionBreakPadding}
          >
            The workspaces page
          </Text>
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
            A mixed bag of smaller issues with their root causes outlined below.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-the-problem"
        >
          <Text
            paddingBottom={lineBreakPadding}
          >
            There were two underlying reasons for the above issues:
          </Text>
          <OrderedList paddingBottom={lineBreakPadding}>
            <ListItem>
              <Text>
                <strong>Really long names</strong>
                :
              </Text>
              <Text>
                Names for workspaces were typically a bunch of traits listed out into a long string of abbreviations, such as
                &quot;purpose-location-creator&quot;. Features like tags and location filters were added as band-aids to get
                users to move some traits from their names into the UI, but the features were rarely used.
              </Text>
            </ListItem>
            <ListItem>
              <Text>
                <strong>
                  Poor layout choice
                </strong>
                :
              </Text>
              <Text>
                Using tiles was a purely aesthetic choice, made without functionality in mind. The tile layout didn&apos;t scale,
                and was hard to scan, making the page cumbersome for users.
              </Text>
            </ListItem>
          </OrderedList>
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
            The goal was to help users &quot;autopilot&quot; their way into a workspace and get started immediately.
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
          </Carousel>
        </GridItem>
      </Section>
    </>
  );
};

export default Provisioning;
