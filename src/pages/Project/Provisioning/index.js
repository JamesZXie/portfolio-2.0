import React, { useState } from 'react';

import {
  Grid, GridItem, Button, Text, Link, Image, OrderedList, ListItem, Box, UnorderedList, Flex,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';

import './provisioning.scss';
import YTVideo from '../../../components/YTVideo';
import Outline from '../../../components/Outline';

import UserMSP from '../../../assets/images/Pools/user-msp.png';
import UserISV from '../../../assets/images/Pools/user-isv.png';

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
];
const ids = [
  'provisioning-summary',
  'provisioning-the-problem',
  'provisioning-the-solution',
];

const Provisioning = ({}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 0;

  const handleLoad = () => {
    if (numLoaded + 1 === total) {
      setLoading(false);
    } setNumLoaded(numLoaded + 1);
  };

  const renderProblem = () => (
    <Text>
      Using our platform to create cloud resources was slow and frustrating.
      It was easy to make errors during the process, and very hard to diagnose and recover from the errors.
    </Text>
  );

  const renderSolution = () => (
    <>
      <Text paddingBottom={lineBreakPadding}>
        We broke the process up into easily understandable chunks, increased guidance, made enhancements to
        error diagnosis and recovery, and are introducing a system that creates templates for
        users to reduce repetition.
      </Text>
    </>
  );

  return (
    <>
      {/* <PageLoader
        total={total}
        numLoaded={numLoaded}
        loading={loading}
      /> */}
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
          <Text as="h4">PowerVS outgrows its initial, simple provisioning flow</Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
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
            (No audio) An example of how a user might provision a virtual machine using the pre-redesign interface, including recovering from a mistake.
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
            PowerVS started with few provisioning options and a simple provisioning flow. This
            fit on a single page form, with around ten fields. As the product grew, the page
            became much less simple, creating two issues.
            {' '}
          </Text>
          <Text
            as="h3"
            paddingBottom={lineBreakPadding}
            paddingTop={subSectionBreakPadding}
          >
            1. Feature bloat
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            New fields were heavily intertwined. Depending on user selections, the form could change in
            unpredictable ways, as many selections required a different set of follow-up specifications.
          </Text>
          <Text>
            This made the form
            {' '}
            <strong>confusing</strong>
            {' '}
            and
            {' '}
            <strong>hard to digest.</strong>
          </Text>
          <Text
            as="h3"
            paddingTop={subSectionBreakPadding}
            paddingBottom={lineBreakPadding}
          >
            2. Bigger workloads
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            Over time, as workloads grew, the number of VMs a user needed to provision per workload
            grew as well.
          </Text>
          <Text>
            This meant users went through the form more often, creating
            {' '}
            <strong>
              frustrating and repetitive steps
            </strong>
            {' '}
            in the provisioning flow. Its not uncommon to see users provisioning dozens of VMs at once, and many accounts have thousands of VMs to manage.
          </Text>
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
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <YTVideo>
            <iframe
              src="https://www.youtube.com/embed/hN3EjaBQsAI"
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
            (No audio) An example of how a user might provision a virtual machine using the redesigned interface, including recovering from a mistake.
          </Text>
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
            1. Improving guidance and hierarchy
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            In addition to implementing various best-practice improvements throughout the form, such as
            aligning all fields vertically to make the form easier to follow, we made major improvements
            to the hierarchical organization of the page. We grouped the fields into sections such that
            the majority of responsive changes from user selections hidden.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            We also arranged the order of the sections such that earlier sections could change later sections,
            but not vice versa, giving the changes some well-needed structure.
          </Text>
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
            2. Optimizing for large workloads
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            To support users who spend a lot of time going through provisioning, we&apos;ve planned
            to release a system that lets users create templates to pre-fill parts of the provisioning form.
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            This is one of  two large reasons we decided to use a more open layout even after splitting
            our form into sections: the current open layout allows users who come into the form with
            a template to know where they should start editing their template at a glance.
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            Unfortunately at this very moment I can&apos;t share too much about this enhancement. I will be
            able to soon though! Stay tuned.
          </Text>
        </GridItem>
      </Section>
    </>
  );
};

export default Provisioning;
