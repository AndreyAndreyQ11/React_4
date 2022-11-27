import { Component } from "react";

// import Quest_1 from "./Quest_1/Quest_1";
// import Quest_2 from "./Quest_2/Quest_2";
// import Quest_2_v2 from "./Quest_2_v2/Quest_2_v2";
// import Quest_3 from "./Quest_3/Quest_3";

import Counter from "./Counter/Counter";
import Menu from "./Menu/Menu"

import "./App.css";
// import data from "../data/data";
// import friends from "../data/friends";
// import transactions from "../data/transactions";


export class App extends Component {
  state = {
    number: 3,
  }

  fooNumber = (newNumber) => {
    this.setState({
      number: newNumber,
    },
      () => { console.log('Допустим сработало'); })
  }

  render() {
    const { number } = this.state
    return (
      <>
        <Counter
          startValue={number}
          test={this.fooNumber}
        />
        <br />
        <Menu number={number} />
        {/* <Quest_3
        id={transactions.map(el => el.id)}
        type={transactions.map(el => el.type)}
        amount={transactions.map(el => el.amount)}
        currency={transactions.map(el => el.currency)}
      /> */}
      </>
    );
  };
}
