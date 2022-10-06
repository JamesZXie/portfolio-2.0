import React, { useState } from 'react';

import {
  Grid, GridItem, Flex, Text, Link, Image, OrderedList, ListItem, Center, Box, UnorderedList,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';
import YTVideo from '../../../components/YTVideo';
import Outline from '../../../components/Outline';

import './pools.scss';
import SPPOnPrem from '../../../assets/images/Pools/spp-on-prem.png';
import ServerPlacementGroups from '../../../assets/images/Pools/server-placement-groups.png';
import PlacementGroupsExample from '../../../assets/images/Pools/placement-groups-example.png';
import SPPResearch from '../../../assets/images/Pools/spp-research.png';
import Supercomputer from '../../../assets/images/Pools/supercomputer.png';
import UserMSP from '../../../assets/images/Pools/user-msp.png';
import UserISV from '../../../assets/images/Pools/user-isv.png';
import Glance from '../../../components/Glance';

const lineBreakPadding = '.5rem';
const subSectionBreakPadding = '1.5rem';
const sectionBreakPadding = '2rem';
const colStart = [1, 7];
const colSpan = [12, 6];
const colEnd = [12, 12];
const titles = [
  'SUMMARY',
  'CONTEXT',
  'PROBLEM',
  'SOLUTION',
  'CHALLENGES',
  'PROCESS',
];
const ids = [
  'pools-summary',
  'pools-product-context',
  'pools-feature-origin',
  'pools-feature-implementation',
  'pools-process-challenges',
  'pools-process',
];

const Pools = ({}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 4;

  const handleLoad = () => {
    if (numLoaded + 1 === total) {
      setLoading(false);
    } setNumLoaded(numLoaded + 1);
  };

  const renderProblem = () => (
    <>
      <Text paddingBottom={lineBreakPadding}>
        Before the cloud existed, IBM customers used a certain feature to save millions each year on software licenses.
      </Text>
      <Text>
        Technical impossibilities in bringing it to the cloud required it to be reimagined for our platform.
      </Text>
    </>
  );

  const renderSolution = () => (
    <>
      <Text paddingBottom={lineBreakPadding}>
        We implemented the feature so that its flow feels familiar to any users who are comfortable
        with the rest of our platform.
      </Text>
      <Text>
        Since it is an advanced feature, the vast majority of its users will fall under this category. We
        have guidance in place for those who are not advanced.
      </Text>
    </>
  );

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
            PSVS POOLS
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
          id="pools-summary"
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
          <Text paddingBottom={lineBreakPadding}>
            In order to save money, users need to define a very complex “folder” to house some of their stuff.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Solution:
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            {' '}
            We sacrificed a few edge cases to make the “folder” creation and usage experience
            intuitive for users, and easier for dev to implement.
          </Text>
        </GridItem>
        <SectionBreak />
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-product-context"
        >
          <Text as="h2">CONTEXT</Text>
          <Text as="h4">What shared processor pools is, and why it was created</Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            “IBM Power” is a family of server computers that IBM has traditionally sold
            directly to consumers.
            The overarching goal of our cloud platform, Power Virtual Server,
            is to help IBM Power users switch to the cloud, which is better for the IBM Power
            organization&apos;s user retention and profit long term.
          </Text>
          <Text>
            The dev team created a feature that reduces licensing costs by allowed users to
            “fence off” a section of a larger computer and pay for licensing on just this portion,
            instead of the entire computer.
            {' '}
            <strong>
              The section is what we call a “shared processor pool”
              and comes with a ton of constraints for its usage and creation.
            </strong>
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-feature-origin"
        >
          <Text as="h2">PROBLEM</Text>
          <Text as="h4">Challenges associated with shared processor pool implementation.</Text>
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
            Understanding how the shared processor pools worked is relatively straightforward for users. However,
            setting up real-life applications requiring multiple virtual machines can be very complex, and baking
            their requirements into shared processor pools could make things confusing.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            Cloud resources have to actually exist somewhere, even if you can access them from anywhere. When
            you store a file on Google Drive, although you don&apos;t define a server for it to reside on, the file
            does exist somewhere as a string of binary numbers, on an actual hard drive.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            Virtual machines (VMs) and shared processor pools (SPPs) must also exist somewhere, and as a result
            have two big placement-related constraints that make their creation and usage unintuitive:
          </Text>
          <OrderedList
            paddingBottom={lineBreakPadding}
          >
            <ListItem>
              VMs created in SPPs
              {' '}
              <strong>must</strong>
              {' '}
              all be on the same Power server for them to use the same “fenced off” portion of a server.
            </ListItem>
            <ListItem>
              Placement requirements unrelated to SPP exist. Sometimes, VMs
              {' '}
              <strong>must</strong>
              {' '}
              be on the same server. Sometimes, VMs must be on different servers.
            </ListItem>
          </OrderedList>
          <Text
            paddingBottom={lineBreakPadding}
          >
            As you can imagine, when these requirements intertwine things get complicated. For example, if the user wants
            to make a backup VM in case the host server of the main VM dies, the backup can’t be on the same host - or that
            would defeat the point. However, it needs to run the same software, and thus needs the same license...
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-feature-implementation"
        >
          <Text as="h2">SOLUTION</Text>
          <Text as="h4">Using existing patterns to make SPP setup intuitive for new and old users alike.</Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <YTVideo>
            <iframe
              src="https://www.youtube.com/embed/qeW0qXJCIJc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </YTVideo>
          <Text
            as="h5"
            paddingBottom=".5rem"
          >
            &#40;No sound&#41; Walkthrough of SPP on our test server showcasing group creation, spp creation, and VM deployment into an SPP.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text paddingBottom={lineBreakPadding}>
            In an effort to make deploying resources using SPPs as intuitive as possible, we tested a few options. The flow we decided on mimicked
            the flow of creating VM placement groups, and so we drew parallels to the existing VM placement group and usage flow.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            In order to create a VM, a user must:
            <OrderedList>
              <ListItem>
                Create a placement group or required VMs.
              </ListItem>
              <ListItem>
                Create the other.
              </ListItem>
              <ListItem>
                Add the VMs to the placement group.
              </ListItem>
            </OrderedList>
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            In order to create an SPP, a user must:
            <OrderedList>
              <ListItem>
                Create a placement group or required SPPs
              </ListItem>
              <ListItem>
                Create the other.
              </ListItem>
              <ListItem>
                Add the SPPs to the placement group.
              </ListItem>
              <ListItem>
                Create and add a VM to the SPP.
              </ListItem>
            </OrderedList>
          </Text>
          <Text paddingBottom={sectionBreakPadding}>
            As you can see,
            {' '}
            <strong>SPP creation and usage functions the same way as VM creation, a flow users are accustomed to.</strong>
          </Text>
          <SectionBreak />
        </GridItem>

        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-process-challenges"
        >
          <Text
            as="h2"
          >
            CHALLENGES
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
            Wires could get crossed very easily, and as a result, being able to add a single VM to multiple placement groups
            {' '}
            <strong>could create failures from operations unrelated to SPP</strong>
            {' '}
            that we wouldn&apos;t be able to explain to the user. In the worst case, this could require a customer to rebuild
            their entire workload.
          </Text>
          <Image
            src={PlacementGroupsExample}
            onLoad={handleLoad}
          />
          <Text as="h5" paddingBottom={subSectionBreakPadding}>
            Visual representation of how untracked requirements can form
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            For example - imagine that virtual machine A is in a placement group with virtual machine B that requires
            {' '}
            <strong>A and B be on the same host server</strong>
            . A is also in a group with another machine, virtual machine C that dictates
            {' '}
            <strong>A and C be on different servers</strong>
            . Now, B and C cannot ever be on the same host server - even though the user has never specified this -
            <strong>
              and an untracked requirement has been created.
            </strong>
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            This sounds like an easy relationship to automatically track, and it should be - except the codebase PowerVS is
            built on is relatively shoddy, and for a variety of reasons this was not feasible without introducing
            exceptionally long load times to a number of operations across other user flows.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-process"
        >
          <Text as="h2">PROCESS</Text>
          <Text as="h4">Initial interface testing and addressing challenges</Text>
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
