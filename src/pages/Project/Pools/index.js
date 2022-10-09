import React, { useState } from 'react';

import {
  GridItem,
  Text,
  Image,
  OrderedList,
  ListItem,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';
import Outline from '../../../components/Outline';
import Carousel, { CarouselItem } from '../../../components/Carousel';
import Lightbox from '../../../components/Lightbox';

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
import SPPInvisionFreehand from '../../../assets/images/Pools/spp-invision-freehand.png';
import SPPMuralBoard from '../../../assets/images/Pools/spp-mural-board.png';
import SPPExploration from '../../../assets/images/Pools/spp-exploration.png';
import SPPSolutionConcept from '../../../assets/images/Pools/spp-solution-concept.png';
import SPPExplanationDiagram from '../../../assets/images/Pools/spp-explanation-diagram.png';
import SPPDisasterStrikes from '../../../assets/images/Pools/spp-disaster-strikes.png';

import UserMSP from '../../../assets/images/Pools/user-msp.png';
import UserISV from '../../../assets/images/Pools/user-isv.png';

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
  const total = 9;

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
          <Text
            as="h1"
            className="project-title"
          >
            PSVS POOLS
          </Text>
        </GridItem>
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
          <Text paddingBottom={subSectionBreakPadding}>
            Provisioning &#40;creating a virtual machine&#41; was overwhelming, confusing, and punishing for users.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Solution:
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            We broke the form up into digestible chunks, and rearranged it to make branching smoother.
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
          <Text as="h4">Read this if you&apos;re confused about PowerVS, the cloud, or shared processor pools &#40;SPP&#41;.</Text>
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
            The cloud is very similar to real estate. Making a virtual server instance &#40;a.k.a. a VSI or VM&#41; in the cloud is like renting an apartment, and PowerVS, our cloud platform,
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
          <Text>
            <strong>
              Shared processor pools existed as a pre-cloud feature that allowed users to apply
              licenses to just a portion of any server that they owned.
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
            Sometimes users need virtual server instances &#40;VSIs or VMs&#41; on the same server, other times they need them on different servers.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            We needed to help users create and
            use SPPs with the following VM location requirements in mind:
          </Text>
          <OrderedList
            paddingBottom={lineBreakPadding}
          >
            <ListItem>
              Certain user workloads require VMs located on the
              {' '}
              <strong>same server</strong>
              .
            </ListItem>
            <ListItem>
              Certain user workloads require VMs located on
              {' '}
              <strong>different servers</strong>
              .
            </ListItem>
            <ListItem>
              &#40;New&#41; Resources using SPP to share licenses must be on the
              {' '}
              <strong>same server</strong>
              .
            </ListItem>
          </OrderedList>
          <Text paddingBottom={lineBreakPadding}>
            Unlike on servers users own, server location assignments in the cloud are mostly automatic.
            To satisfy requirements #1 and #2, users can tell us &quot;I want a few VMs deployed together/separately&quot;.
          </Text>
          <Text>
            <strong>
              The issue is that users can only
              express one such preference per VM, due to technical requirements.
            </strong>
            {' '}
            We started to see issues emerge when baking requirement #3 into setups requiring either #1 or #2.
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
          <Text paddingBottom={subSectionBreakPadding}>
            <strong>
              We introduced SPPs conceptually as &quot;folders&quot; that, when wrapped around VMs, would make any external licenses
              automatically charge based on the size of the folder.
            </strong>
            {' '}
            Once created, SPPs were treated as individual entities,
            and location requirements were handled in the exact same way location requirements are currently handled with VMs -
            through placement groups.

          </Text>
          <Text
            as="h3"
            paddingBottom={lineBreakPadding}
          >
            Tradeoffs:
          </Text>
          <Accordion
            paddingBottom={subSectionBreakPadding}
            allowMultiple
          >
            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Pros
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>
                    Introducing SPP as a separate entity from VMs and VM placement groups helped us keep it out of
                    mind for users who don&apos;t need the feature.
                  </ListItem>
                  <ListItem>
                    Using the same method for handling VM location requirements as SPP location requirements made
                    using SPP extremely intuitive for advanced users.
                  </ListItem>
                  <ListItem>
                    Implementing SPP as a folder was relatively easy from a development perspective,
                    and allowed for
                    {' '}
                    <strong>much</strong>
                    {' '}
                    quicker loadtimes than other options.
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Cons
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>
                    With more complex setups, things can still get confusing, and some more extreme edge cases are completely infeasible.
                    There were other options where this could have been avoided.
                  </ListItem>
                  <ListItem>
                    The flow is really only easy to pick up for experts, because the base flow for handling location requirements
                    between VMs that we based it off of isn&apos;t super intuitive. New
                    developers will have to read documentation.
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Text paddingBottom={sectionBreakPadding}>
            A pure UI video walkthrough is available
            {' '}
            <a href="https://youtu.be/qeW0qXJCIJc" target="_blank" rel="noreferrer">here</a>
            {' '}
            for those who want to see a functional UI, instead of the key screens above.
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
          <Text as="h4">From exploration, ideation, and testing</Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Exploration
          </Text>
          <Image
            src={SPPExploration}
            paddingBottom={lineBreakPadding}
          />
          <Text paddingBottom={lineBreakPadding}>
            We went through a few use cases with users who used SPP before the cloud, to understand the impact of SPP on their workloads, and to get more direction on how to proceed.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            We then talked to SPP developers and our own development team to get a better understanding of the options we could work with on a technical level. Generally this is not a step in our exploration process for features, but adding a restriction to VM placement set off warning bells.
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            We also read a
            {' '}
            <strong>lot</strong>
            {' '}
            of very technical documentation.
          </Text>

          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Ideation
          </Text>
          <Lightbox
            id="SPPMuralBoard"
            paddingBottom={lineBreakPadding}
            src={SPPMuralBoard}
            onLoad={onLoad}
          />
          <Text paddingBottom={subSectionBreakPadding}>
            We began ideating at an extremely high level using post-it notes and drawings in mural to represent VMs and SPPs, working around user
            needs and development needs to find potential flows we could test.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Testing
          </Text>
          <Lightbox
            id="SPPInvisionFreehand"
            paddingBottom={lineBreakPadding}
            src={SPPInvisionFreehand}
            onLoad={onLoad}
          />
          <Text paddingBottom="50px">
            We tested a very high-level flows with post-it notes, then narrowed it down into a few flushed out but shoddy wireframes in an InVision freehand.
            After eliminating more options, we tested the remaining flows as high-fidelity InVision prototypes.
          </Text>
        </GridItem>

      </Section>
    </>
  );
};

export default Pools;
