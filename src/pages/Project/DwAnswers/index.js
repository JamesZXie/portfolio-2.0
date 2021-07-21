import React, { useState } from 'react';

import {
  Grid, GridItem, Box, Text, Link, Image, OrderedList, ListItem, Center, Flex, UnorderedList,
} from '@chakra-ui/react';
import Section from '../../../components/Section';
import PageLoader from '../../../components/PageLoader';
import SectionBreak from '../../../components/SectionBreak';

// images
import problemStatement from '../../../assets/images/DwAnswers/problem-statement.png';
import keyFlow from '../../../assets/images/DwAnswers/key-flow.jpeg';
import uxResearchStats from '../../../assets/images/DwAnswers/ux-research-stats.jpeg';
import dwAnswers from '../../../assets/images/DwAnswers/dw-answers.png';
import slack from '../../../assets/images/DwAnswers/slack.png';
import lowFidelityMockups from '../../../assets/images/DwAnswers/low-fidelity-mockups.png';
// import patternsInterns from '../../../assets/images/DwAnswers/patterns-interns.jpeg';

import './dw-answers.scss';

const lineBreakPadding = '1rem';
const sectionBreakPadding = '2rem';
const colStart = [0, 4];
const colSpan = [12, 6];
const colEnd = [13, 10];

const DwAnswers = ({}) => {
  const [numLoaded, setNumLoaded] = useState(0);
  const [loading, setLoading] = useState(true);
  const total = 6;

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
        className="project-page dw-answers"
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
              DW ANSWERS
            </Text>
          </Center>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
          paddingBottom={sectionBreakPadding}
        >
          <Text
            paddingBottom={sectionBreakPadding}
          >
            I structure my thinking as much as possible, hold strong opinions loosely, back actions with evidence,
            and tie every decision into the bigger picture.
          </Text>
          <SectionBreak />

          <Text as="h2">The Problem</Text>
          <Text as="h4">IBM Support is slow for customers and costly for IBM.</Text>
          <Text paddingBottom={lineBreakPadding}>
            IBM product support receives a staggering 12,000 requests for help each month that they internally categorize into three
            priorities:
          </Text>
          <OrderedList>
            <ListItem>
              <strong>Low:</strong>
              {' '}
              Simple issues that should not require support help.
            </ListItem>
            <ListItem>
              <strong>Medium:</strong>
              {' '}
              Issues requiring a code-based, technical solution.
            </ListItem>
            <ListItem>
              <strong>High: </strong>
              {' '}
              Emergency, customer-losing issues or bug reports.
            </ListItem>
          </OrderedList>
        </GridItem>
        <GridItem
          colStart={[1, 3]}
          colSpan={[12, 8]}
        >
          <Image
            src={problemStatement}
            objectFit="cover"
            width="100%"
            alt="On average, IBM support will address over 8,000 tickets before getting to low priority requests"
            paddingBottom={sectionBreakPadding}
            onLoad={handleLoad}
          />
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text paddingBottom={lineBreakPadding}>
            That means for 4,000 customers a month,
            {' '}
            <strong>their experience is waiting 23 days for a two-sentence answer.</strong>
          </Text>
          <Text>
            For IBM,
            {' '}
            <strong>
              simple issues that shouldn’t require support’s help cost a whooping $48 million a year.
            </strong>
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text as="h2">Our Solution</Text>
          <Text as="h4">Redirecting low priority questions to a better platform</Text>
          <Text>
            We designed a mobile component of IBM’s “dW Answers” forum and optimized it for the low priority questions on
            IBM support&apos;s backburner,
            {' '}
            <strong>
              bringing the TTR for low priority customer issues from 23 days to under 24 hours.
            </strong>
          </Text>
        </GridItem>
        <GridItem
          colStart={1}
          colSpan={12}
          colEnd={13}
        >
          <Image
            src={keyFlow}
            objectFit="cover"
            width="100%"
            alt="Key flow of UX mockups"
            paddingBottom={sectionBreakPadding}
            onLoad={handleLoad}
          />

        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text>
            Once dW answers is established, IBM support would be able to redirect all low priority
            questions to dW Answers,
            {' '}
            <strong>saving them $48 million a year.</strong>
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text as="h2">Our Research</Text>
          <Text as="h4">Why dW mobile?</Text>
          <Text>
            Our hypotheses and designs formed thanks to interviews with 25 people up and down
            the product pipeline.
          </Text>
          <Image
            src={uxResearchStats}
            objectFit="cover"
            width="100%"
            alt="Visual breakdown of the roles of the 25 people interviewed: 8 developers, 7 offering managers, 3 devops, 3 support, 3 designers, and 1 analytics."
            paddingTop={sectionBreakPadding}
            onLoad={handleLoad}
          />
          <Text
            paddingBottom={sectionBreakPadding}
            as="h5"
          >
            We interviewed business customers, product users, IBM support, and more.

          </Text>
          <Text paddingBottom={lineBreakPadding}>
            Learning about IBM support’s backlog situation pushed us to start looking for ways to
            trim the fat, starting with other resources IBM customers could turn to. We found two:
          </Text>
          <OrderedList>
            <ListItem>dW answers: an existing forum for IBM product specific questions</ListItem>
            <ListItem>Slack workspaces: private messaging groups for a select few products.</ListItem>
          </OrderedList>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text
            as="h3"
            paddingTop={lineBreakPadding}
            paddingBottom={sectionBreakPadding}
          >
            dW Answers
          </Text>
          <Image
            src={dwAnswers}
            alt="Screenshots of dW answers"
            onLoad={handleLoad}
          />
          <Text
            paddingBottom={sectionBreakPadding}
            as="h5"
          >
            dW Answers: good traffic from customers and organized experts, but low response rates.
          </Text>
          <Text paddingBottom={lineBreakPadding}>
            dW answers had a large amount of traffic, a system to organize answers, and a point ranking system
            that quantified an expert&apos;s reputation in the community.
          </Text>
          <Text paddingBottom={sectionBreakPadding}>
            Unfortunately, the response time and response rate were almost as bad as support. When we
            asked top ranked experts about when they were active, their response was:
          </Text>
          <Center>
            <Text
              fontSize={['24px', '32px']}
              paddingLeft="2rem"
              paddingRight="2rem"
              fontStyle="italic"
              paddingBottom={sectionBreakPadding}
            >
              “I&apos;ll take a look when I need a break.”
            </Text>
          </Center>
          <Text>
            while almost never taking breaks at their work computer, where they had access to a web browser, resulting
            in around 1 week gaps between activity.
          </Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text as="h3" paddingBottom={sectionBreakPadding}>Slack workspaces</Text>
          <Image
            src={slack}
            alt="Screenshots of an expert helping another user in a Slack conversation"
            onLoad={handleLoad}
          />
          <Text
            as="h5"
            paddingBottom={sectionBreakPadding}
          >
            An 80 message conversation between two IBM customers on a Slack Channel for Watson.

          </Text>

          <Text paddingBottom={lineBreakPadding}>
            Since users couldn&apos;t find these communities organically (think Google search for an error message),
            Slack workspaces had significantly lower traffic. However, when the questions did come in, they were addressed
            with a median initial response time of 5 minutes.
          </Text>
          <Text>
            When we asked one of the most active users why he was so active, he said:
          </Text>
          <Center>
            <Text
              fontSize={['24px', '32px']}
              paddingLeft="2rem"
              paddingRight="2rem"
              fontStyle="italic"
              paddingTop={sectionBreakPadding}
              paddingBottom={sectionBreakPadding}
            >
              “If I’m watching TV, at dinner, no matter what time it is — if I’m bored,
              I’ll pull out my phone and if there’s a new question I’ll answer it”
            </Text>
          </Center>
          <Text>
            Or more simply, the Slack mobile app is
            {' '}
            <strong>easy to access</strong>
            {' '}
            and
            {' '}
            <strong>casual</strong>
            ,
            making the entertainment value of helping outweigh its cost to the expert.
            <Text as="h2">Translating research</Text>
            <Text as="h4" paddingBottom={sectionBreakPadding}>How we built a community that targets the easy isses</Text>
          </Text>
        </GridItem>
        <GridItem
          colStart={[1, 3]}
          colSpan={[12, 8]}
        >
          <Image
            objectFit="cover"
            width="100%"
            src={lowFidelityMockups}
            alt="wireframes of a community tool we tested with InVision"
            onLoad={handleLoad}
          />
          <Text as="h5">Development of an Invision prototype of the referral system, a community tool for experts.</Text>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text paddingBottom={lineBreakPadding}>
            Once we realized experts could address easier issues quickly and effectively, we had to figure
            out how to connect the two. We gleaned these key insights that helped us form the foundations of dW mobile:
          </Text>
          <OrderedList>
            <ListItem>
              A casual setting dramatically increases the rates of both asking and answering questions in the
              community.
            </ListItem>
            <ListItem>
              Reputation is the biggest motivator for experts to help, and ease of access is the biggest blocker.
            </ListItem>
            <ListItem>
              Experts are good at categorizing, organizing, and sifting through issues for the myriad of IBM
              products. Average users are not.
            </ListItem>
          </OrderedList>
        </GridItem>
        <GridItem
          colStart={colStart}
          colSpan={colSpan}
          colEnd={colEnd}
        >
          <Text paddingBottom={lineBreakPadding}>
            And translated them into the following aspects of the app:
          </Text>
          <OrderedList>
            <ListItem>
              <strong>Chat: </strong>
              Like Slack, we took patterns from chat apps to create a casual, active
              community where the simple questions are the most visible.
            </ListItem>
            <ListItem>
              <strong>dW score: </strong>
              We tweaked the length vs quantity balance of dW answers’s point system and increased the visibility of a user’s
              reputation.
            </ListItem>
            <ListItem>
              <strong>Community tools: </strong>
              We took dW Answers&apos;s expert categorization system, and added a set of community organizational tools for
              experts that rewards cooperation.
            </ListItem>
          </OrderedList>
        </GridItem>
        <GridItem
          colStart={colStart}
          colEnd={colEnd}
          colSpan={colSpan}
        >
          <Text as="h2" paddingBottom={sectionBreakPadding}>The Team</Text>
          <Text paddingBottom={0}>They were like a family, I&apos;d work again with them in a heartbeat.</Text>
          {/* <Image src={patternsInterns} alt="photo of the team" />
          <Text paddingTop={sectionBreakPadding}>From left to right:</Text> */}
          <UnorderedList marginBottom={sectionBreakPadding}>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/helenwho/"
              >
                Helen Hu
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/vzjwang/"
              >
                Vivian Wang
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/daxit/"
              >
                Daxit Aragawal
              </Link>
            </ListItem>
            <ListItem>
              Me
            </ListItem>
          </UnorderedList>
        </GridItem>
      </Section>
    </>
  );
};

export default DwAnswers;
