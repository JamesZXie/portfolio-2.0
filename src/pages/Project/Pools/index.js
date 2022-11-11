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
  'pools-context',
  'pools-problem',
  'pools-solution',
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
          colStart={[0, 2]}
          colSpan={[12, 4]}
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
            Context:
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            Certain software licenses overcharge users in the cloud by design. A new feature
            works around software license design to make licenses charge “fairly”.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Problem:
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            The new feature requires users to balance performance and
            cost savings.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Solution:
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            We make performance easy to understand and isolate more confusing aspects of setup.
          </Text>
        </GridItem>
        <SectionBreak />
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-context"
        >
          <Text as="h2" paddingBottom={lineBreakPadding}>CONTEXT</Text>
          <Image
            src={SPPExplanationDiagram}
            onLoad={onLoad}
          />
          <Text
            as="h5"
            id="licensing-costs-caption"
            paddingBottom={subSectionBreakPadding}
          >
            What customers with licenses would pay for, versus what they should pay for.
          </Text>
          <Text as="h3" paddingBottom={lineBreakPadding}>Business problem</Text>
          <Text paddingBottom={lineBreakPadding}>
            Software licenses on Power are built for Power server owners, and charge based on the
            size and computing power of an entire server. However, in the cloud, users don&apos;t own servers,
            they just rent a small portion of a server.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            This means users who would want to use licensed software in the cloud on say, a 1 GB virtual
            machine would not pay for 1 GB, but for the 10GB the server hosting the virtual machine has.
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            As a result,
            {' '}
            <strong>
              users who need licensed software won&apos;t move into our cloud because they don&apos;t want
              to pay 10x more for space they won&apos;t use.
            </strong>
          </Text>
          <Text as="h3" paddingBottom={lineBreakPadding}>Business solution</Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            A shared processor pool is a technical workaround that ropes off a section of the server for users to
            build cloud resources in, and “tricks” a license into charging only for the size of the pool.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            This way,
            {' '}
            <strong>
              with pools users pay only for what they use, so users who need licensed software no longer have a
              reason not to use our cloud.
            </strong>
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-problem"
        >
          <Text as="h2">PROBLEM</Text>
          <Image
            src={SPPSetupRequirements}
            onLoad={onLoad}
          />
          <Text
            as="h5"
            id="licensing-costs-caption"
            paddingBottom={subSectionBreakPadding}
          >
            Sometimes users need VMs on the same server, other times they need them on different servers.
          </Text>
          <Text>
            Users face two challenges when using shared processor pools:
          </Text>
          <OrderedList
            paddingBottom={lineBreakPadding}
          >
            <ListItem>
              Any VMs that want to utilize a pool have to be on the same host server. However,
              {' '}
              <strong>certain setups require VMs to be on different host servers.</strong>
            </ListItem>
            <ListItem>
              The smaller a pool is, the slower it performs.
              {' '}
              <strong>Users are incentivized to consolidate VMs that need the same licenses into one large pool.</strong>
            </ListItem>
          </OrderedList>

          <Text
            paddingBottom={lineBreakPadding}
          >
            These challenges make planning a cloud setup using pools something of a balancing act for users, who need to make tradeoffs between cost and performance before they create a setup.
          </Text>
          <Text>
            This sets our goal to be to
            {' '}
            <strong>help users make optimal decisions by</strong>
            :
          </Text>
          <OrderedList>
            <ListItem>
              Making it easy to handle conflicting host requirements.
            </ListItem>
            <ListItem>
              Making it easy to understand the performance of a pool.
            </ListItem>
          </OrderedList>

        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-solution"
        >
          <Text as="h2">SOLUTION</Text>
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
          <Text as="h3" paddingBottom={lineBreakPadding}>1. Handle conflicting host requirements</Text>
          <Image
            src={SPPSetupRequirements}
            onLoad={onLoad}
          />
          <Text paddingBottom={lineBreakPadding}>
            Host placement requirements can be separated into requirements associated with licenses or pools,
            and requirements associated directly with the setup.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            To help users configure their setups, we added “pool placement groups”, a feature that allows users to
            set a placement rule on a group of pools. Users simply create a group and then choose whether the pools
            in the group are placed on the same server or on different servers.
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            This lowers the complexity for handling setup requirements because users only need to worry about pool
            hosting requirements once. After the first setup is created with a pool, future setups can forget about
            pool-related requirements.
          </Text>
          <Accordion
            paddingBottom={subSectionBreakPadding}
            allowMultiple
          >
            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Pros of placement groups
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>
                    Of the options we explored for handling placement conflicts, placement groups were the only
                    option that kept pools separate from VMs, which reduced option complexity for
                    users not looking to use SPP.
                  </ListItem>
                  <ListItem>
                    “VM placement groups” also exist, and are very commonly used, which makes picking up
                    pool placement groups intuitive for experienced users.
                  </ListItem>
                  <ListItem>
                    Pool placement groups were less technically strenuous to implement than the other options,
                    meaning less development work and faster loadtimes.
                  </ListItem>
                </OrderedList>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h3>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Cons of placement groups
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h3>
              <AccordionPanel pb={4}>
                <OrderedList>
                  <ListItem>
                    Does not scale well for some edge case setups; keeping track of pools,
                    in multiple placement groups, with multiple VM placement groups can get hard.
                  </ListItem>
                  <ListItem>
                    If users misuse the feature they will unintentionally create conflicting placement
                    requirements that can require them to re-do a lot of work. Preventing this from
                    happening is possible, but the backend checks to do so would place large loadtimes
                    on many otherwise simple operations.
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

          <Text as="h3" paddingBottom={lineBreakPadding}>2. Understand the performance of a pool</Text>
          <Image
            src={SPPSetupRequirements}
            onLoad={onLoad}
          />
          <Text>
            In a shared processor pool, there are three factors that affect performance:
          </Text>
          <OrderedList paddingBottom={lineBreakPadding}>
            <ListItem>
              Total reserved cores
            </ListItem>
            <ListItem>
              Ratio of allocated cores to unallocated cores
            </ListItem>
            <ListItem>
              Computing usage while a VM is active
            </ListItem>
          </OrderedList>
          <Text paddingBottom={lineBreakPadding}>
            Unfortunately we are unable to access live computing stats on VMs, but based off of what kind of applications users are
            running, they should have a ballpark idea of what their own usage looks like.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            We instead keep track of the #1 and #2, and make it very obvious to users what their performance looks like
            when its relevant to their objective.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            For example, in the image above, you can see that before a user creates a new instance in a shared processor pool, they can clearly see how much space is still available for allocation, and get a ballpark idea of how their allocation could affect performance.
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
          <Text paddingBottom={subSectionBreakPadding}>
            We then talked to SPP developers and our own development team to get a better understanding of the options we could work with on a technical level. Generally this is not a step in our exploration process for features, but adding a restriction to VM placement set off warning bells.
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
