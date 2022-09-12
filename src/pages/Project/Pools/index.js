import React, { useState } from 'react';

import {
  Grid, GridItem, Button, Text, Link, Image, OrderedList, ListItem, Center, Box, UnorderedList,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';

import './pools.scss';
import SPPOnPrem from '../../../assets/images/Pools/spp-on-prem.png';
import ServerPlacementGroups from '../../../assets/images/Pools/server-placement-groups.png';
import PlacementGroupsExample from '../../../assets/images/Pools/placement-groups-example.png';
import SPPWalkthrough from '../../../assets/images/Pools/spp-walkthrough.mov';
import SPPResearch from '../../../assets/images/Pools/spp-research.png';

const lineBreakPadding = '.5rem';
const subSectionBreakPadding = '1.5rem';
const sectionBreakPadding = '2rem';
const colStart = [0, 4];
const colSpan = [12, 6];
const colEnd = [13, 10];

const Pools = ({}) => {
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
        className="project-page pools"
      >
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Center>
            <Text
              as="h1"
              className="blurb"
            >
              PSVS POOLS
            </Text>
          </Center>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          paddingTop={lineBreakPadding}
        >
          <Text paddingBottom={sectionBreakPadding}>
            Over my year as the primary designer for PSVS, I implemented features of all sizes.
            Shared processor pools &#40;SPP&#41; is one of the larger features I implemented. This feature especially
            got quite technical, and unfortunately I&apos;m not confident I communicated everything well. Please let me know
            if you have any questions.
          </Text>
          <SectionBreak />
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text as="h2">Feature Origin</Text>
          <Text as="h4">Emulating an on-premise feature in the cloud</Text>
          <Image
            src={SPPOnPrem}
            onLoad={handleLoad}
          />
          <Text
            as="h5"
            id="licensing-costs-caption"
            paddingBottom={subSectionBreakPadding}
          >
            Main screens users who own on-premise Power systems use to configure shared processor pools.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            The ultimate objective of shared processor pools &#40;SPP&#41; is to
            <strong> save customers money on licensing costs.</strong>
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            Power Systems Virtual Server is a premium cloud platform with more computing power, but also more cost, compared
            to competitors. As part of a larger attempt to offset the cost difference,
            shared processor pools were created:
            {' '}
            <strong>technical workarounds</strong>
            {' '}
            that make using third-party software licenses on Power
            {' '}
            <strong>10x cheaper</strong>
            .
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            SPP was implemented for IBM on-premise servers about ten years ago, but are created and managed through direct
            management of the host server. In the cloud, users don&apos;t own servers, IBM does - users are just tenants in the space.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            As a result,
            {' '}
            <strong>SPP had to be re-imagined in cloud.</strong>
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text as="h2">Feature Implementation</Text>
          <Text as="h4">Using existing patterns to make SPP setup intuitive for new and old users alike.</Text>
        </GridItem>
        <GridItem
          colStart={[1, 3]}
          colSpan={[12, 8]}
        >
          <video
            src={SPPWalkthrough}
            controls
            autoPlay
            loop
          />
          <Text as="h5">
            An prototype walkthrough of SPP, as it&apos;s not implemented on the test server just yet. This will be replaced with an actual demo once it is.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text paddingBottom={lineBreakPadding}>
            In an effort to make deploying resources using SPPs as intuitive as possible, we tested a few options. The flow we decided on mimicked
            the flow of creating VM placement groups, and so we drew parallels to the existing VM placement group and usage flow. Note the following:
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            In order to create a VM, a user must
            <OrderedList>
              <ListItem>
                Create a placement group or a VM.
              </ListItem>
              <ListItem>
                Create the other.
              </ListItem>
              <ListItem>
                Add the VM to the placement group.
              </ListItem>
            </OrderedList>
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            In order to create an SPP, a user must
            <OrderedList>
              <ListItem>
                Create a placement group or an SPP
              </ListItem>
              <ListItem>
                Create the other.
              </ListItem>
              <ListItem>
                Add the SPP to the placement group.
              </ListItem>
              <ListItem>
                Create and add a VM to the SPP.
              </ListItem>
            </OrderedList>
          </Text>
          <Text paddingBottom={sectionBreakPadding}>
            As you can see, the two flows are very similar, with similar rules applying each step of the way. For example, while you can create either a group or a resource
            as the first step in both flows, it is more time-efficient to create the group first.
          </Text>
          <SectionBreak />
        </GridItem>

        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text
            as="h2"
          >
            Process challenges
          </Text>
          <Text
            as="h4"
          >
            Navigating and addressing consequences of a technical workaround
          </Text>
          <Image
            src={ServerPlacementGroups}
            onLoad={handleLoad}
          />
          <Text
            as="h5"
            paddingBottom={subSectionBreakPadding}
          >
            Placement groups let users define placement rules that would apply to groups of VMs.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            As a somewhat sketchy technical workaround, SPP introduced one large exception to a previously ironclad rule - some VMs in a SPP would need to be
            added to multiple placement groups, groups that essentially let users set the physical locations of their VMs.
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            Being able to add a single VM to multiple placement groups
            {' '}
            <strong>could create catastrophic failures from random operations</strong>
            .
          </Text>
          <Image
            src={PlacementGroupsExample}
            onLoad={handleLoad}
          />
          <Text as="h5" paddingBottom={subSectionBreakPadding}>
            Visual representation of how untracked requirements can form
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            For example - imagine that
            A is in a placement group with B that dictates they be on the
            {' '}
            <strong>same host server</strong>
            . A is also in a group with C that dictates them be on
            {' '}
            <strong>different servers</strong>
            . Now, B and C
            {' '}
            <strong>cannot ever</strong>
            {' '}
            be on the same host server -
            {' '}
            <strong>even though the user has never specified this</strong>
            {' '}
            - and an untracked requirement
            has been created.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            Tracking these unintentional relationships automatically, or even finding them after creation, was technically infeasible given
            our ancient codebase. &#40;Although this should have been a dev problem to solve, the short timeline for this feature meant
            recreating the APIs were impossible, and the requirement for the solution fell on design.&#41;
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text as="h2">Research and solving process challenges</Text>
          <Text as="h4">SPP flow abstraction and initial interface testing</Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Image
            src={SPPResearch}
            onLoad={handleLoad}
          />
          <Text as="h5" paddingBottom={subSectionBreakPadding}>Asking sponsor users to assemble simple setups, both with and without an interface</Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            Because preventing untracked relationships from forming was a hard requirement due to technical constraints,
            we restricted testing to options that could satisfy this requirement.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            Initially we were unsure of how to define shared processor pools, because
            {' '}
            <strong>
              they were essentially a
              same-server placement group with more function
            </strong>
            {' '}
            - SPPs bundled VMs on the same host server before
            reducing licensing costs.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            We&apos;d first show the abstracted setups and ask them to assemble them with minimal guidance, just to
            see the order in which they&apos;d put the pieces together, and to observe how they subconsciously fit SPPs
            into the hierarchy of other organizational structures, like VM placement groups.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            We&apos;d then give them a few flushed-out prototypes, and ask them to
            assemble the same setups.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            We primarily tested the following organizational options for SPP:
            <UnorderedList>
              <ListItem>
                Defining shared processor pools as completely separate entities.
              </ListItem>
              <ListItem>
                Making “use as a shared processor pool” a configuration option for placement groups.
              </ListItem>
              <ListItem>
                Shared processor pools as an entity similar to a VM that can have a placement group applied to it alongside other, independent VMs.
              </ListItem>
            </UnorderedList>

          </Text>
        </GridItem>

      </Section>
    </>
  );
};

export default Pools;
