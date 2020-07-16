import React, { Component } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleLeaveFeedBack = (feedback) => {
    // this.setState((state) => ({
    //   good: feedback === "good" ? state.good + 1 : state.good,
    //   neutral: feedback === "neutral" ? state.neutral + 1 : state.neutral,
    //   bad: feedback === "bad" ? state.bad + 1 : state.bad,
    // }));

    // ===========================================

    this.setState({ ...feedback });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad } = this.state;

    const positiveFeedback = (good / (good + bad)) * 100;

    return positiveFeedback || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ ...this.state }}
            onLeaveFeedback={this.handleLeaveFeedBack}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
