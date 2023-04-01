import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { Container } from './Container/Container';
import { Box } from './Box/Box';

const BUTTONS = {
  Good: "good",
  Neutral: "neutral",
  Bad: "bad"
};

export const App = () => {
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);

 const onLeaveFeedback = event => {
  const { name } = event.target;

  switch (name) {
    case BUTTONS.Good:
      setGood(good => good + 1);
      break;

    case BUTTONS.Neutral:
      setNeutral(neutral => neutral + 1);
      break;

    case BUTTONS.Bad:
      setBad(bad => bad + 1);
      break;

    default:
      return;
  }
};

  const countTotalFeedback = () => good + neutral + bad;

 const countPositiveFeedbackPercentage = () => 
     Math.ceil((good * 100) / countTotalFeedback());
  
     const totalFeedback = countTotalFeedback();

  

    return (
    
        <Container>
          <Box>
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={Object.values(BUTTONS)}
                onLeaveFeedback={onLeaveFeedback}
              />
            </Section>
            <Section title="Statistics">
                  {totalFeedback ? (<Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={totalFeedback}
                  positivePercentage={countPositiveFeedbackPercentage}
                />) : (<Notification message="There is no feedback"/>)}
            
            
            </Section>
          </Box>
        </Container>
    
    );
  
}
