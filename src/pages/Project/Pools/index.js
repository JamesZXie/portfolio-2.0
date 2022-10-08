import React, { useState } from 'react';

import {
  Grid, GridItem, Flex, Text, Link, Image, OrderedList, ListItem, Center, Box, UnorderedList,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';
import Outline from '../../../components/Outline';
import Carousel, { CarouselItem } from '../../../components/Carousel';

import './pools.scss';
import SPPOnPrem from '../../../assets/images/Pools/spp-on-prem.png';
import ServerPlacementGroups from '../../../assets/images/Pools/server-placement-groups.png';
import PlacementGroupsExample from '../../../assets/images/Pools/placement-groups-example.png';
import SPPResearch from '../../../assets/images/Pools/spp-research.png';
import SPPSetupRequirements from '../../../assets/images/Pools/spp-setup-requirements.png';
import SPPMainFilled from '../../../assets/images/Pools/spp-main-filled.png';
import SPPMainCreate from '../../../assets/images/Pools/spp-main-create.png';
import SPPDetailsFilled from '../../../assets/images/Pools/spp-details-filled.png';
import SPPGroupsMain from '../../../assets/images/Pools/spp-groups-main.png';
import SPPVSIProvisioning from '../../../assets/images/Pools/spp-vsi-provisioning.png';
import SPPSolutionConcept from '../../../assets/images/Pools/spp-solution-concept.png';
import SPPExplanationDiagram from '../../../assets/images/Pools/spp-explanation-diagram.png';
import SPPDisasterStrikes from '../../../assets/images/Pools/spp-disaster-strikes.png';

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
  'PROCESS',
];
const ids = [
  'pools-summary',
  'pools-product-context',
  'pools-feature-origin',
  'pools-feature-implementation',
  'pools-process',
];

const Pools = ({}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 8;

  const onLoad = () => {
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
          onLoad={onLoad}
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
            Certain software licenses &#40;think stuff like Sketch&#41; for IBM&apos;s cloud overcharge customers.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Solution:
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            We took an old solution and applied it to the cloud in a way that changes the way licenses charge our customers, reducing the cost of licenses by up to 90%.
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
          <Text as="h4">Info on PowerVS, the cloud, and overcharging for licenses.</Text>
          {/* <Image
            src={SPPExplanationDiagram}
            paddingBottom={subSectionBreakPadding}
          /> */}
          <Image
            src={SPPOnPrem}
            onLoad={onLoad}
          />
          <Text
            as="h5"
            id="licensing-costs-caption"
            paddingBottom={subSectionBreakPadding}
          >
            Shared processor pools, before the cloud.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            The cloud is very similar to real estate. Making a virtual server instance (a.k.a. a VSI or VM) in the cloud is like renting an apartment, and PowerVS, our cloud platform,
            is like a website that
            {' '}
            <strong>automatically assigns apartments</strong>
            {' '}
            to users based on their specified needs.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            Following this analogy, then, you can think of a license like a kind of utility. Say you&apos;re a tenant in one
            of our apartments and you want to switch providers for the electricity service in your apartment. You can&apos;t
            apply the change to
            {' '}
            <strong>only</strong>
            {' '}
            your apartment, you have to pay to swap out electricity for the entire building,
            because all the apartments are connected.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            This is how licenses charge, except licenses are a lot more important to customers.
            Many users have no choice but to pay for a license on the entire server, instead of just license
            usage in the portion they&apos;re renting out.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            Shared processor pools existed as a pre-cloud feature that allowed users to apply
            licenses to just a portion of any server
            {' '}
            <strong>that they owned.</strong>

          </Text>

        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-feature-origin"
        >
          <Text as="h2">PROBLEM</Text>
          <Text as="h4">Challenges associated with shared processor pool replication.</Text>
          <Image
            src={SPPSetupRequirements}
            onLoad={onLoad}
          />
          <Text
            as="h5"
            id="licensing-costs-caption"
            paddingBottom={subSectionBreakPadding}
          >
            Sometimes users need virtual server instances (VSIs or VMs) on the same server, other times they need them on different servers.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            The issue in adapting SPP in the cloud is comes from the fact that selling homes and
            managing tenants are fundamentally different, with the latter requiring many more
            restrictions and rules. There is a delicate balance, and SPP introduced a new
            restriction that threw the balance off.
          </Text>

          <Text
            paddingBottom={lineBreakPadding}
          >
            <strong>
              Our challenge was to help users create and
              use SPPs with all of the following restrictions on user actions in mind:
            </strong>
          </Text>
          <OrderedList
            paddingBottom={lineBreakPadding}
          >
            <ListItem>
              Server location assignments are by default automatic in the cloud.
            </ListItem>
            <ListItem>
              Users can somewhat override the automatic assignment by grouping servers and applying
              a single location rule to their deployment. For example, &quot;these three need to be together&quot;
            </ListItem>
            <ListItem>
              Certain user workloads require VMs located on the same server.
            </ListItem>
            <ListItem>
              Certain user workloads require VMs located on different servers.
            </ListItem>
            <ListItem>
              <strong>&#40;New&#41;</strong>
              {' '}
              Resources using SPP to share licenses must be on the same server.
            </ListItem>
          </OrderedList>
          <Text>
            Figuring out how to hit #1, #2, and #3 had been hard enough, but with another location requirement baked
            into the mix, things got tricky.
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
          {/* </GridItem>
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
        > */}
          {/* <Image
          src={SPPSolutionConcept}
          onLoad={onLoad}
        />
          <Text
            as="h5"
            id="licensing-costs-caption"
            paddingBottom={subSectionBreakPadding}
          >
            We introduced SPP conceptually as a &quot;folder&quot; to put VMs in. Managing placement restrictions for the folders is exactly the same as it is for VMs.
          </Text> */}
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
                src={SPPMainFilled}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={SPPMainCreate}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={SPPDetailsFilled}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={SPPGroupsMain}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={SPPVSIProvisioning}
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
            We solved the logic puzzle above by:
            <OrderedList>
              <ListItem>
                Introducing SPP conceptually as a &apos;folder&apos;, setting expectations about its role, and how it interacts with VMs.
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
            onLoad={onLoad}
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
