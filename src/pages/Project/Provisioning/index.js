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

import './provisioning.scss';

import General from '../../../assets/images/Provisioning/provisioning-general.png';
import Banner from '../../../assets/images/Provisioning/provisioning-banner.png';
import BootImage from '../../../assets/images/Provisioning/provisioning-boot-image.png';
import Profile from '../../../assets/images/Provisioning/provisioning-profile.png';
import StorageVolumes from '../../../assets/images/Provisioning/provisioning-storage-volumes.png';
import NetworkInterfaces from '../../../assets/images/Provisioning/provisioning-network-interfaces.png';
import Complete from '../../../assets/images/Provisioning/provisioning-complete.png';
import Validation from '../../../assets/images/Provisioning/provisioning-validation.png';
import ExplorationMural from '../../../assets/images/Provisioning/provisioning-exploration-mural.png';
import Ideation from '../../../assets/images/Provisioning/provisioning-ideation.png';
import Testing from '../../../assets/images/Provisioning/provisioning-testing.png';
import Overwhelming from '../../../assets/images/Provisioning/provisioning-overwhelming.png';
import Confusing from '../../../assets/images/Provisioning/provisioning-confusing.mov';
import Punishing from '../../../assets/images/Provisioning/provisioning-punishing.mov';
import Ugly from '../../../assets/images/Provisioning/provisioning-ugly.mov';
import CogLoad from '../../../assets/images/Provisioning/provisioning-cogload.mov';
import Branching from '../../../assets/images/Provisioning/provisioning-branching.mov';
import CompleteCard from '../../../assets/images/Provisioning/provisioning-complete-card.png';
import IncompleteCard from '../../../assets/images/Provisioning/provisioning-incomplete-card.png';
import CurrentCard from '../../../assets/images/Provisioning/provisioning-current-card.png';

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
  const total = 8;

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
            Redesigning a cloud platform&apos;s primary checkout flow
          </Text>
          <Image paddingTop="4rem" src={Banner} />
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
            Realign a confusing, feature-bloated checkout page with a premium cloud platform&apos;s brand and price point.
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
            A clean, simple, and guided checkout experience designed with future optimizations in mind.
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
            <UnorderedList>
              <ListItem>
                Increased checkout completion rate by 13% &#40;58.5% to 66%&#41;
              </ListItem>
              <ListItem>
                Cut average time to complete checkout by 55% &#40;263s to 145s&#41;
              </ListItem>
            </UnorderedList>
          </Text>
        </GridItem>
        <SectionBreak />
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
            The only checkout page IBM Cloud&apos;s design system prescribes is designed around
            very simple checkout flows. Every field is laid out on one page, and the user makes
            selections as they go down.
          </Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            Unfortunately, our team&apos;s product is significantly more complex than the other
            products in IBM Cloud. As we added more features, we saw two things happen:
          </Text>

          <Text paddingBottom={lineBreakPadding}>
            <OrderedList>
              <ListItem>
                Completion rate dropped
              </ListItem>
              <ListItem>
                Time-to-complete increased
              </ListItem>
            </OrderedList>

            <Text paddingBottom={sectionBreakPadding}>
              Below are the two main problems users faced with the old form, identified by early research findings.
            </Text>
          </Text>

          <Text as="h3" paddingBottom={subSectionBreakPadding}>
            Users found the form overwhelming
          </Text>
          <Image src={Overwhelming} />
          <Text
            paddingTop={subSectionBreakPadding}
            paddingBottom={sectionBreakPadding}
          >
            A ton of information was thrown at users from start to finish, which made the old form feel overwhelming.
            Fields covered the entire page, with diverse visual appearances, adding to the perceived complexity of the form.
          </Text>

          <Text as="h3" paddingBottom={subSectionBreakPadding}>
            Users became confused when the form changed
          </Text>
          <video autoPlay loop muted playsinline alt="Form was confusing" controls src={Confusing} />
          <Text
            paddingTop={subSectionBreakPadding}
            paddingBottom={sectionBreakPadding}
          >
            Many user selections could trigger the introduction, transformation, or removal of fields, as shown above.
            Processing the result of the changes put a large cognitive load on users, confusing many.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-the-solution"
        >
          <Text as="h2" paddingBottom={subSectionBreakPadding}>Solution</Text>
          <Text paddingBottom={sectionBreakPadding}>
            Separating the form into card sections solved both of our problems. Users were able to focus more on the fields
            at hand without being overwhelmed, and the confusing form changes were hidden from sight, making the form feel
            smoother, faster, and more intentional.
          </Text>
        </GridItem>
        <GridItem
          colStart={1}
          colSpan={12}
          marginBottom={subSectionBreakPadding}
        >
          <Carousel>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={General}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={BootImage}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={Profile}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={StorageVolumes}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={NetworkInterfaces}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                onLoad={onLoad}
                src={Complete}
              />
            </CarouselItem>
            <CarouselItem>
              <YTVideo>
                <iframe
                  src="https://www.youtube.com/embed/hN3EjaBQsAI"
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
          <Text
            as="h3"
            paddingBottom={subSectionBreakPadding}
          >
            Complete card
          </Text>
          <Image paddingBottom={subSectionBreakPadding} src={CompleteCard} />
          <Text
            paddingBottom={sectionBreakPadding}
          >
            Complete cards give users a scannable summary of selections they&apos;ve already made. This reduces the complexity of
            the form, while still keeping info relevant to corresponding choices at hand.
          </Text>

          <Text
            as="h3"
            paddingBottom={subSectionBreakPadding}
          >
            Incomplete card
          </Text>
          <Image paddingBottom={subSectionBreakPadding} src={IncompleteCard} />
          <Text
            paddingBottom={sectionBreakPadding}
          >
            Incomplete cards give users a preview of what work they have to do while hiding future work, form changes, and
            intermediate loading so that users don&apos;t feel overwhelmed.
          </Text>

          <Text
            as="h3"
            paddingBottom={subSectionBreakPadding}
          >
            Current card
          </Text>
          <Image paddingBottom={subSectionBreakPadding} src={CurrentCard} />
          <Text
            paddingBottom={sectionBreakPadding}
          >
            Current cards are the focus of the user, and contain all fields relevant to the specified topic. Only one card
            is “current” at a time.
          </Text>
        </GridItem>
        <SectionBreak />
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-generative-research"
        >
          <Text
            as="h2"
            paddingBottom={lineBreakPadding}
          >
            Generative research
          </Text>
          <Lightbox
            id="ProvisioningMural"
            paddingBottom={lineBreakPadding}
            src={ExplorationMural}
            onLoad={onLoad}
          />
          <Text>
            Once we defined what the provisioning page&apos;s role would be in the newly redesigned provisioning
            experience &#40;provisioning involves many more steps than just the provisioning page&#41;, we picked it
            apart and then listed and grouped all of its issues. This helped us decide on a direction
            for ideation.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-ideation"
        >
          <Text
            as="h2"
            paddingBottom={lineBreakPadding}
          >
            Ideation
          </Text>
          <Lightbox
            id="IdeationInVision"
            paddingBottom={lineBreakPadding}
            src={Ideation}
            onLoad={onLoad}
          />
          <Text>
            Resource creation as a concept is pretty common throughout IBM&apos;s other cloud platforms. There isn&apos;t
            a lot of consistency across the products, but there&apos;s an overarching effort to drive consistency -
            so most of this portion of the process was actually taking existing interfaces and rehashing
            them to fit our needs. Most of this was done in InVision Freehand.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-testing"
        >
          <Text
            as="h2"
            paddingBottom={lineBreakPadding}
          >
            Testing
          </Text>
          <Lightbox
            id="TestingInVision"
            paddingBottom={lineBreakPadding}
            src={Testing}
            onLoad={onLoad}
          />
          <Text
            paddingBottom={lineBreakPadding}
          >
            Because redesigns require very little product-specific context, we took advantage of the broader
            community of IBM designers and ran a few feedback sessions with various other teams across cloud.
          </Text>
          <Text>
            Once the general flow had been locked in, we tested smaller variations with users to check very
            specific things, such as error handling for edge cases, with high-fi prototypes.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          id="provisioning-next-steps"
        >
          <Text as="h2" paddingBottom={subSectionBreakPadding}>Next steps</Text>
          <Text
            paddingBottom={lineBreakPadding}
          >
            The biggest addition I would have added to the page, given more time, is motion. I think there
            are a lot of opportunities to add motion throughout the page, especially to smooth out certain &quot;trigger&quot; actions,
            such as going from one section to the other, or how certain selections enable or disable
            other fields.
          </Text>
          <Text
            paddingBottom={sectionBreakPadding}
          >
            Also, the broader provisioning experience extends much further than just this page, and this redesign
            is part of a larger effort to make the provisioning experience as a whole faster. We have quite
            a bit planned for future enhancements, including addressing bulk provisioning, decreasing loadtimes,
            and adding automation to a few of the more annoying processes.
          </Text>

        </GridItem>
      </Section>
    </>
  );
};

export default Provisioning;
