import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import StatisticsTable from './components/Statistic';
import Section from './components/Section';
import FeedbackOptionsButton from './components/FeedbackOptionsButton';
import Notification from './components/NotificationMessage';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGiveStatisticButton = evt => {
    const name = evt.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalCount = this.countTotalFeedback();
    const positiveCount = (good * 100) / totalCount;
    return positiveCount.toFixed(2);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Pleas leave feedback">
          <FeedbackOptionsButton
            onLeaveFeedback={this.onGiveStatisticButton}
            options="Good"
            name="good"
          />

          <FeedbackOptionsButton
            onLeaveFeedback={this.onGiveStatisticButton}
            options="Neutral"
            name="neutral"
          />

          <FeedbackOptionsButton
            onLeaveFeedback={this.onGiveStatisticButton}
            options="Bad"
            name="bad"
          />
        </Section>

        <Section title="Statistic">
          {this.countTotalFeedback() < 1 ? (
            <Notification message="There is no feedback" />
          ) : (
            <StatisticsTable
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default Feedback;
