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
import Glance from '../../../components/Glance';

import UserMSP from '../../../assets/images/Pools/user-msp.png';
import UserISV from '../../../assets/images/Pools/user-isv.png';

const lineBreakPadding = '.5rem';
const subSectionBreakPadding = '1.5rem';
const sectionBreakPadding = '2rem';
const colStart = [1, 7];
const colSpan = [12, 6];
const colEnd = [13, 12];
const titles = [
  'PROBLEM',
  'SOLUTION',
  'CONTEXT',
];
const ids = [
  'provisioning-the-problem',
  'provisioning-the-solution',
  'provisioning-product-context',
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
          <Box
            className="project-title__fun-box"
          />
          <Text
            as="h1"
            className="project-title"
          >
            PSVS REDESIGN
          </Text>
        </GridItem>
        {/* <Glance
          problem={renderProblem()}
          solution={renderSolution()}
          onLoad={handleLoad}
        /> */}
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
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-product-context"
        >
          <Text as="h2">CONTEXT</Text>
          <Text as="h4">Some context on what PowerVS is, and who its users are</Text>
          <Text paddingBottom={lineBreakPadding}>
            PowerVS is, simply put,
            {' '}
            <strong>cloud infrastructure for IBM Power hardware users</strong>
            .
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            IBM Power has better computing power than competitor hardware, but is much more expensive. Most end users have
            extreme performance-based needs.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            There are really just two types of users:
          </Text>

          <Image src={UserMSP} />
          <Text as="h6">
            1. Managed cloud service providers &#40;MSPs&#41;
          </Text>
          <Text>
            MSPs account for
            {' '}
            <strong>80%</strong>
            {' '}
            of our userbase. They are Power experts who manage
            Power resources for companies who want to build on power, but only understand software. MSPs may have to manage thousands of VMs,
            due to their large clientele.
          </Text>
          <Flex>
            <Flex>
              <Image src={UserISV} />
            </Flex>
            <Flex>
              <Text as="h6">
                2. OS users with hybrid workloads
              </Text>
              <Text>
                Power expertise is extremely hard to find, so only 20% of our userbase have enough expertise to
                work directly with Power hardware. Still, they tend to have less expertise than MSPs, and work with
                much smaller workloads.
              </Text>
            </Flex>
          </Flex>
          <Text>
            Both types of users have expertise in Power, and acquired this expertise by working with Power on-premise. New users
            who want to use IBM Power will go through MSPs the vast majority of the time, rather than hire employees with Power
            expertise.
          </Text>
        </GridItem>
      </Section>
    </>
  );
};

export default Provisioning;
