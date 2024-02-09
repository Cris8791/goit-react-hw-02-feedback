import React, { useState } from 'react';
import Statistics from './feedbacks/Statistics';
import FeedbackOptions from './feedbacks/FeedbackOptions';
import Section from './feedbacks/Section';
import Notification from './feedbacks/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Section title="Leave Feedback">
        <FeedbackOptions
          options={{
            good: handleGood,
            neutral: handleNeutral,
            bad: handleBad,
          }}
        />
      </Section>

      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + neutral + bad}
            positivePercentage={
              good ? Math.round((good / (good + neutral + bad)) * 100) : 0
            }
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
