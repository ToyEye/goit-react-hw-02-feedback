import React, { Component, MouseEvent } from "react";

import Container from "./components/Container";
import StatisticsTable from "./components/Statistic";
import Section from "./components/Section";
import FeedbackOptionList from "./components/FeedbackOptionList";
import Notification from "./components/NotificationMessage";

type State = {
  good: number;
  neutral: number;
  bad: number;
};

class Feedback extends Component<{}, State> {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGiveStatisticButton = (evt: MouseEvent<HTMLButtonElement>) => {
    const { name } = evt.currentTarget;
    this.setState((prevState) => {
      return { ...prevState, [name]: prevState[name as keyof State] + 1 };
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
    return Number(positiveCount.toFixed(2));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Pleas leave feedback">
          <FeedbackOptionList
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onGiveStatisticButton}
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
