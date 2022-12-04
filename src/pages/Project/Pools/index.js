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
  UnorderedList,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';
import Outline from '../../../components/Outline';
import Carousel, { CarouselItem } from '../../../components/Carousel';
import Lightbox from '../../../components/Lightbox';
import YTVideo from '../../../components/YTVideo';

import './pools.scss';
import SPPHappyPathGuidance from '../../../assets/images/Pools/spp-happy-path-guidance.png';
import SPPHappyPath from '../../../assets/images/Pools/spp-happy-path.png';
import SPPMainFilled from '../../../assets/images/Pools/spp-main-filled.png';
import SPPMainCreate from '../../../assets/images/Pools/spp-main-create.png';
import SPPDetailsFilled from '../../../assets/images/Pools/spp-details-filled.png';
import SPPGroupsMain from '../../../assets/images/Pools/spp-groups-main.png';
import SPPVSIProvisioning from '../../../assets/images/Pools/spp-vsi-provisioning.png';
import SPPInvisionFreehand from '../../../assets/images/Pools/spp-invision-freehand.png';
import SPPMuralBoard from '../../../assets/images/Pools/spp-mural-board.png';
import SPPExploration from '../../../assets/images/Pools/spp-exploration.png';
import SPPExplanationDiagram from '../../../assets/images/Pools/spp-explanation-diagram.png';
import SPPPlacementGroups from '../../../assets/images/Pools/spp-placement-groups.png';

const lineBreakPadding = '.5rem';
const subSectionBreakPadding = '1.5rem';
const sectionBreakPadding = '2rem';
const colStart = [1, 7];
const colSpan = [12, 6];
const colEnd = [12, 12];
const titles = [
  'Business problem',
  'Business goals',
  'User problem',
  'User goals',
  'Solution',
  'Process',
];
const ids = [
  'pools-business-problem',
  'pools-business-goals',
  'pools-user-problem',
  'pools-user-goals',
  'pools-solution',
  'pools-process',
];

const Pools = ({}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 11;

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
            as="h6"
            className="project-title"
          >
            IBM
          </Text>
          <Text
            as="h1"
          >
            Cloud pools
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-business-problem"
        >
          <Text
            paddingBottom={subSectionBreakPadding}
            as="h2"
          >
            Business problem
          </Text>
          <Image
            src={SPPExplanationDiagram}
            onLoad={onLoad}
          />
          <Text as="h5" paddingBottom={sectionBreakPadding}>
            Licenses that charge for an entire system cheat cloud users who only use a portion.
          </Text>
          <Text>
            Many companies charge our users a hefty flat fee for software licenses,
            instead of using a pay-as-you-go model. While this is fine if the user
            owns the entire server, charging a flat fee kills the value proposition of
            our pay-as-you-go IaaS platform,
            {' '}
            <b>
              creating a large financial barrier
              to entry for users who use licensed software
            </b>
            .
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-business-goals"
        >
          <Text
            paddingBottom={subSectionBreakPadding}
            as="h2"
          >
            Business goals
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            In order to reduce the large financial barrier to entry, we reduced the cost
            of licences to
            {' '}
            <b>
              bring license-dependent users onto the platform, while continuing to deliver on
              its premium infrastructure value proposition
            </b>
            .
          </Text>
          <Text>
            The success metric is long-term user growth. This feature has not been out long enough
            to measure its success &#40;Launched mid-September 2022&#41;.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-user-problem"
        >
          <Text as="h2" paddingBottom={subSectionBreakPadding}>User problem</Text>
          <Text paddingBottom={lineBreakPadding}>
            To address this financial barrier, development created a feature, “shared processor
            pools”, that transforms licenses into more of a pay-as-you-go model. However,
            {' '}
            <b>
              it comes with two new restrictions:
            </b>
          </Text>
          <OrderedList>
            <li>
              <b>Performance restriction:</b>
              {' '}
              users pay for, but also use, a smaller chunk of the
              server. A smaller chunk means less processing power.
            </li>
            <li>
              <b>Location restrictions on deployment:</b>
              {' '}
              stuff requiring the same license has to
              be located on the same physical server to share the license.
            </li>
          </OrderedList>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-user-goals"
        >
          <Text as="h2" paddingBottom={subSectionBreakPadding}>User goals</Text>
          <Text paddingBottom={lineBreakPadding}>
            With our premium value proposition in mind, we had
            {' '}
            <b>two primary design goals for the implementation of pools:</b>
          </Text>
          <OrderedList paddingBottom={lineBreakPadding}>
            <ListItem>
              Help users optimally balance cost savings and performance.
            </ListItem>
            <ListItem>Make deployment restrictions easy to understand and manage.</ListItem>
          </OrderedList>
          <Text>
            If we do not accomplish these goals, license-dependent users will go back off
            of our platform because we won&apos;t be delivering on our “premium” value proposition.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-solution"
        >
          <Text as="h2" paddingBottom={subSectionBreakPadding}>Solution</Text>
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
            <CarouselItem>
              <YTVideo>
                <iframe
                  src="https://www.youtube.com/embed/qeW0qXJCIJc"
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
          <Text as="h3" paddingBottom={subSectionBreakPadding}>1. Helping users balance cost savings and performance</Text>
          <Text paddingBottom={lineBreakPadding}>
            In a shared processor pool, there are three factors that affect performance:
          </Text>
          <OrderedList paddingBottom={lineBreakPadding}>
            <ListItem>Total reserved cores</ListItem>
            <ListItem>Ratio of allocated cores to unallocated cores</ListItem>
            <ListItem>Computing usage while a VM is active</ListItem>
          </OrderedList>
          <Text paddingBottom={subSectionBreakPadding}>
            And of course, the less space a user uses for what they need, the less they pay. Since we aren&apos;t actually
            allowed to access users&apos; systems to display #3, while users do know what their systems are used for, our goal here is
            to show the relevant information at key points in the user&apos;s flow to let the user make smart decisions.
          </Text>
          <Text as="h4">Happy path</Text>
          <Lightbox
            id="SPPHappyPath"
            paddingBottom={lineBreakPadding}
            src={SPPHappyPath}
            onLoad={onLoad}
          />
          <Text as="h4">Happy path guidance</Text>
          <Lightbox
            id="SPPHappyPathGuidance"
            paddingBottom={lineBreakPadding}
            src={SPPHappyPathGuidance}
            onLoad={onLoad}
          />
          <Accordion
            paddingBottom={subSectionBreakPadding}
            allowMultiple
          >
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  How do users know which pool has which license?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text paddingBottom={lineBreakPadding}>
                  By name! We&apos;ve found that users naturally use the name of anything they create
                  on our platform to dictate the purpose + anything else they need to identify the resource.
                </Text>
                <Text paddingBottom={lineBreakPadding}>

                  Forcing users to move the license from the name to say another column on the table would
                  just make it harder for users to fill in the mandatory name slot, while shortening the
                  amount of horizontal space on the table.
                </Text>
                <Text paddingBottom={lineBreakPadding}>
                  We spent some time outside this feature exploring the addition of catchall features, such as
                  tags, but in testing found that users ignored them. Instead of trying to teach users
                  to use some new feature, we&apos;ve decided to design around their behavior
                  - and leave as much space for names as possible.
                </Text>
                <Text>
                  Its also worth noting that for users deploying through the CLI, the name of a resource is an unbeatable
                  catchall identifier.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Text as="h3">2. Making deployment restrictions easy to understand and manage</Text>
          <Lightbox
            id="SPPUnderstandGroups"
            paddingBottom={subSectionBreakPadding}
            src={SPPPlacementGroups}
            onLoad={onLoad}
          />
          <Text paddingBottom={lineBreakPadding}>
            To prevent wires from getting crossed, we created another category of the same
            system, to manage restrictions associated specifically with pools. As you can
            see above, there are now two categories of placement groups: server placement
            groups and pool placement groups.
          </Text>

          <Text paddingBottom={subSectionBreakPadding}>
            Once a user define the restrictions on a pool, adding stuff to it falls under
            the same defined restrictions and everything stays organized without the user
            having to think about it again.
          </Text>
          <SectionBreak />
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-process"
        >
          <Text as="h2">Process</Text>
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
            We went through a few use cases with users who used SPP before the cloud, to understand
            the impact of SPP on their workloads, and to get more direction on how to proceed.
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            We then talked to SPP developers and our own development team to get a better
            understanding of the options we could work with on a technical level. Generally this
            is not a step in our exploration process for features, but adding a restriction to
            VM placement set off warning bells.
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
