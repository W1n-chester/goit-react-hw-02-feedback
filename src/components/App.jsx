import { Section } from './Section/Section';
import React from 'react';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  ClikGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  ClikNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  ClikBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };
  render() {
    return (
      <div>
        <Section
          onGood={this.ClikGood}
          onNeutral={this.ClikNeutral}
          onBed={this.ClikBad}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
