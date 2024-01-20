import React, { Component } from 'react';
import Statistics from './feedbacks/Statistics';
import FeedbackOptions from './feedbacks/FeedbackOptions';
import Section from './feedbacks/Section';
import Notification from './feedbacks/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Metodele pentru incrementarea feedback-ului
  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <div>
        <Section title="Leave Feedback">
          <FeedbackOptions
            options={{
              good: this.handleGood,
              neutral: this.handleNeutral,
              bad: this.handleBad,
            }}
          />
        </Section>

        <Section title="Statistics">
          {this.state.good || this.state.neutral || this.state.bad ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.good + this.state.neutral + this.state.bad}
              positivePercentage={
                this.state.good
                  ? Math.round(
                      (this.state.good /
                        (this.state.good +
                          this.state.neutral +
                          this.state.bad)) *
                        100
                    )
                  : 0
              }
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
