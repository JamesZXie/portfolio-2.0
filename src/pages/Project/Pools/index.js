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
import SPPExploration1 from '../../../assets/images/Pools/spp-exploration-1.png';
import SPPExploration2 from '../../../assets/images/Pools/spp-exploration-2.png';

import SPPProcess from '../../../assets/images/Pools/spp-process.mov';

const lineBreakPadding = '1rem';
const subSectionBreakPadding = '2rem';
const sectionBreakPadding = '2.5rem';
const colStart = [1, 4];
const colSpan = [12, 6];
const colEnd = [14, 10];

const sumStart = [1, 4];
const sum2Start = [1, 7];
const sumSpan = [14, 3];

const titles = [
  'Summary',
  'Business problem',
  'Business goals',
  'User problem',
  'User goals',
  'Solution',
  'Process',
];
const ids = [
  'pools-summary',
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
  const total = 10;

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
            Helping cloud users circumvent license costs
          </Text>
        </GridItem>
        <GridItem
          colStart={sumStart}
          colSpan={sumSpan}
          marginTop="2rem"
          id="pools-summary-1"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            THE CHALLENGE
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            If users arrange their cloud stuff in a certain way, they can save a lot of money on software licenses.
            Unfortunately, the result is complex, and time-consuming to maintain in the long-term.
          </Text>
        </GridItem>
        <GridItem
          colSpan={sumSpan}
          colStart={sum2Start}
          marginTop={['0rem', '2rem']}
          id="pools-summary-2"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            THE OUTCOME
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            A flow that helps users break up the complexity into digestible pieces, and lets users focus on
            just the pieces that really matter.
          </Text>
        </GridItem>
        <GridItem
          colStart={sumStart}
          colSpan={sumSpan}
          id="pools-summary-3"
        >
          <Text
            paddingBottom={lineBreakPadding}
            className="summary-title"
          >
            ROLE
          </Text>
          <Text paddingBottom={subSectionBreakPadding}>
            I led UX design and research on this feature with support from my design lead
            {' '}
            <a href="https://www.linkedin.com/in/jandra-aranguren-9174a1a4/" target="_blank" rel="noreferrer">Jandra</a>
            .
          </Text>
        </GridItem>
        <SectionBreak />
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-problem"
          marginTop="1rem"
        >
          <Text as="h2" paddingBottom={lineBreakPadding}>Problem</Text>
          <Text paddingBottom={lineBreakPadding}>
            Software licenses will charge users based on how much they can get out of the license. This is dependent on
            how powerful the computer holding a user&apos;s VM is - the more powerful the host, the more the license can be used.

          </Text>
          <Text paddingBottom={lineBreakPadding}>
            On PowerVS, we host users on supercomputers, so unfortunately this charge ends up being quite high.

            To lower these charges, users must perform a procedure to &quot;weaken&quot; what&apos;s hosting their VMs.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            To do this, users have to put all of their virtual machines that need licenses into one area on one host.
            A license is then applied only to this isolated area, and the user is charged accordingly.
          </Text>
          <video autoPlay loop muted playsinline alt="SPPProcess" controls src={SPPProcess} />
          <Text as="h5">
            How a user might consolidate virtual machines &#40;blue boxes&#41; and create an isolated area to reduce licensing charges (circled in red)
          </Text>
          <Text
            paddingTop={lineBreakPadding}
            paddingBottom={lineBreakPadding}
          >
            Seems simple, right? There are three catches that work together to make this a hard for users:
          </Text>
          <OrderedList paddingBottom={lineBreakPadding}>
            <ListItem>
              The virtual machines have constraints on their placement.
              Some can&apos;t be together in the same larger area. Others must to be placed in the same area together.
            </ListItem>
            <ListItem>
              VMs placed in the same area share work - meaning the more in an area, the better the performance
              for each VM.
            </ListItem>
          </OrderedList>
          <Text paddingBottom={lineBreakPadding}>
            Due to the first catch, cramming a lot of VMs together creates a nasty web of relationships.
            The second heavily incentivizes users to, well, cram a lot of VMs together.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            As a result, having to track of a complex web of relationships unavoidable, and in the long run maintaining and expanding
            upon this web can get extremely tough.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-solution"
        >
          <Text as="h2" paddingBottom={subSectionBreakPadding}>Solution</Text>
          <Text paddingBottom={subSectionBreakPadding}>
            The impact of the second catch was out of the design team&apos;s hands - it was
            just how computers worked. As a result, our design goal was to mitigate the long
            term costs of this procedure by helping users navigate the inevitable web.
          </Text>
        </GridItem>
        <GridItem
          colStart={1}
          colSpan={14}
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
            Simplified,
            {' '}
            <b>more space = more performance</b>
            . However, the amount of space a VM uses changes over time, which makes
            it hard to define just how much space a VM needs.
            To help users gauge usage, and decide on the optimal amount of space to purchase,  we have to break
            &quot;space&quot; down into three factors:
          </Text>
          <OrderedList paddingBottom={lineBreakPadding}>
            <ListItem>
              <b>Total reserved cores: </b>
              the maximum space a VM can use
            </ListItem>
            <ListItem>
              <b>Allocated cores: </b>
              the minimum space a VM will use
            </ListItem>
            <ListItem>
              <b>Ratio of allocated to unallocated cores: </b>
              The average space a VM uses
            </ListItem>
          </OrderedList>
          <Text paddingBottom={subSectionBreakPadding}>
            The goal is to show these at key points in the UI
            to help the user assess the need to add or subtract space before modifying the contents of a pool.
          </Text>
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
                  on our platform to dictate the purpose + anything else they need to identify the resource. For example,
                  &quot;Figma_JX_DONTTOUCH&quot;.
                </Text>
                <Text paddingBottom={lineBreakPadding}>
                  In testing, we&apos;ve found that
                  even if given the option to input a license, or just generally the purpose of a resource,
                  users will still include it in the name. Having users input the license would just shorten the
                  amount of horizontal space on the table left for the name.
                </Text>
                <Text paddingBottom={lineBreakPadding}>
                  We spent some time outside this feature exploring the addition of catchall features, such as
                  tags, but in testing found that users ignored them. Instead of trying to teach users
                  to use some new feature, we&apos;ve decided to design around their behavior
                  - and leave as much space for names as possible.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Text as="h3" paddingBottom={subSectionBreakPadding}>2. Making deployment restrictions easier to understand and manage</Text>
          <Text paddingBottom={lineBreakPadding}>
            Shared processor pools introduced a new category of restrictions that required more conscious
            management, and had a higher chance of wires getting crossed, where users could end up in
            situations where they could have something that needs to be deployed, but is completely
            restricted from deployment.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            An existing location restriction system already existed, “placement groups”, which let users
            create rulesets that let them manage the location restrictions on their stuff.
          </Text>
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
          id="pools-generative-research"
        >
          <Text
            as="h2"
            paddingBottom={lineBreakPadding}
          >
            Generative research

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
            is not a step in my exploration process for features, but adding a restriction to
            VM placement set off warning bells.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-ideation"
        >
          <Text
            as="h2"
            paddingBottom={lineBreakPadding}
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
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="pools-testing"
        >
          <Text
            paddingBottom={subSectionBreakPadding}
            as="h2"
          >
            Testing and exploration
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
            as="h3"
          >
            Exploration #1: Save money in the simplest way possible
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            The hypothesis we tested here was that a simple flow with less optimization options may be preferable
            to users than the opposite. This exploration surfaced the minimum amount of information and
            functionality required to help a user save money on VM licenses.
          </Text>
          <Lightbox
            id="SPPExploration1"
            paddingBottom={lineBreakPadding}
            src={SPPExploration1}
            onLoad={onLoad}
          />
          <Text
            paddingBottom={lineBreakPadding}
          >
            We removed processor sharing to reduce setup complexity, and eliminate location restrictions.
            Without location restrictions, there is no need for maintenance.
            Above,
            {' '}
            <b>the only two necessary steps for setup and fine-tuning are highlighted.</b>
            {' '}
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            This exploration failed because even with such a simple setup with no overhead costs,
            our users preferred being able to optimize.
          </Text>

          <Accordion
            paddingBottom={subSectionBreakPadding}
            allowMultiple
          >
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Can you explain this tradeoff simply, ignoring the technical stuff?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text paddingBottom={lineBreakPadding}>
                  Sure! You can think of it this way: we have a bunch of kids that want to draw on a massive canvas.
                  The hypothesis is that automatically splitting up the canvas into equal parts so that each kid gets some
                  space to draw is preferable to having the parents micromanage their kids.
                </Text>
                <Text paddingBottom={lineBreakPadding}>
                  <b>
                    Not all kids will draw the same amount
                  </b>
                  ; some will want more space, and others won&apos;t
                  use space that the other kids could have used.

                  So its not optimal, but its a very simple solution that requires little input from the parents.
                </Text>
                <Text>
                  Unfortunately, our parents don&apos;t care about the ease of managing the kids, they want their kids
                  to have the
                  {' '}
                  <b>maximum</b>
                  {' '}
                  amount of fun. They care significantly more about the fun than the management.
                </Text>

              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Text paddingBottom={lineBreakPadding}>
            <b>Pros:</b>
          </Text>
          <UnorderedList paddingBottom={lineBreakPadding}>
            <ListItem>
              Very simple deployment flow, almost no impact to the experience of other users who don&apos;t care about licenses.
            </ListItem>
            <ListItem>
              Virtually no new learning required to save some money on licenses.
            </ListItem>
          </UnorderedList>
          <Text paddingBottom={lineBreakPadding}>
            <b>Cons:</b>
          </Text>
          <UnorderedList paddingBottom={subSectionBreakPadding}>
            <ListItem>
              No optimization or customization options for users.
            </ListItem>
          </UnorderedList>

          <Text
            paddingBottom={subSectionBreakPadding}
            as="h3"
          >
            Exploration #2: Working deployment restrictions into the existing restriction management flow
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            The hypothesis we tested here is a slightly more complex management flow within familiar systems is more
            intuitive to use and understand than a simpler flow in an entirely new system.
          </Text>
          <Lightbox
            id="SPPExploration2"
            paddingBottom={subSectionBreakPadding}
            src={SPPExploration2}
            onLoad={onLoad}
          />
          <Text
            paddingBottom={lineBreakPadding}
          >
            What that means in practice is we just allowed users to add pools to &quot;placement groups&quot;, the
            existing restriction management system. It functioned in the same way as before, with no changes.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            In testing, it proved very intuitive to use. There was little to no confusion and users were able to
            easily complete tasks.
          </Text>
          <Text
            paddingBottom={subSectionBreakPadding}
          >
            Unfortunately, the dev work required to make pools work with the existing restriction management
            flow was overwhelming, and not worth the user experience tradeoff.
          </Text>
          <Accordion
            paddingBottom={subSectionBreakPadding}
            allowMultiple
          >
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Can you break this tradeoff down as well?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Text paddingBottom={lineBreakPadding}>
                  Yep! Going back to the idea of kids drawing on a canvas - now we&apos;re asking
                  parents to take a more active role.
                </Text>
                <Text>
                  Each adult gets assigned a zone, and as the kids get creative and start needing more space,
                  an adults will use a dry erase markers to redraw the area a kid can work in. Occasionally,
                  if kids don&apos;t get along, they have to swap some stuff around.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Text paddingBottom={lineBreakPadding}>
            <b>Pros:</b>
          </Text>
          <UnorderedList paddingBottom={lineBreakPadding}>
            <ListItem>
              Easy to pick up and understand.

            </ListItem>
            <ListItem>
              Fully customizable.
            </ListItem>
          </UnorderedList>
          <Text paddingBottom={lineBreakPadding}>
            <b>Cons:</b>
          </Text>
          <UnorderedList paddingBottom={subSectionBreakPadding}>
            <ListItem>
              High dev work required to implement.
            </ListItem>
          </UnorderedList>

        </GridItem>

      </Section>
    </>
  );
};

export default Pools;
