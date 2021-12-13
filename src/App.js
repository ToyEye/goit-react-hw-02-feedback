import React, { Component } from "react";
import "./App.css";
import Statistics from "./components/Statistic/";
import Section from './components/Section/';
import FeedbackOptions from './components/FeedbackOptions'

class Feeedback extends Component{
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onButtonGoodPush = () => {
    this.setState(prevState => {
      return {good: prevState.good + 1};
    })
  }

  onButtonNeutralPush = () => {
    this.setState(prevState => {
      return {neutral: prevState.neutral + 1};
    })
  }

  onButtonBadPush = () => {
    this.setState(prevState => {
      return {bad: prevState.bad + 1};
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = 0;
     total = good + neutral +bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalCount = this.countTotalFeedback()
    const positiveCount = good * 100 / totalCount ;
    return positiveCount;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Pleas leave feedback" >
          <FeedbackOptions options="Good" onLeaveFeedback={this.onButtonGoodPush} />
          <FeedbackOptions options="Neutral" onLeaveFeedback={this.onButtonNeutralPush}/>
          <FeedbackOptions options="Bad" onLeaveFeedback={this.onButtonBadPush}/>
        </Section>

        <Section title="Statistic" >
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />
        </Section>
      </div>
    );
  }
}

export default Feeedback;
