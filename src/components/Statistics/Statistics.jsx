import { Component } from 'react';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  handlerClick = e => {
    this.setState(prev => ({ [e.target.id]: prev[e.target.id] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prev => ({ total: prev.good + prev.neutral + prev.bad }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prev => ({ positive: (prev.good / prev.total) * 100 }));
  };

  render() {
    const { good, neutral, bad, total, positive } = this.state;
    return (
      <section>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" id="good" onClick={this.handlerClick}>
            Good
          </button>
          <button type="button" id="neutral" onClick={this.handlerClick}>
            Neutral
          </button>
          <button type="button" id="bad" onClick={this.handlerClick}>
            Bad
          </button>
        </div>
        <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {Math.round(positive)}%</p>
      </section>
    );
  }
}

export default Statistics;
