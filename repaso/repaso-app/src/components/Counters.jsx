import * as React from "react";
import { useState } from "react";
import Resultado from "./Resultado";

const Counters = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const addCounter1 = () => {
    setCount1(count1+1);
  }

  const addCounter2 = () => {
    setCount2(count2+1);
  }

  return (
    <React.Fragment>
      <Resultado count={count1} addCounter={addCounter1} console={'contador 1'} />
      <Resultado count={count2} addCounter={addCounter2} console={'contador 2'}/>
    </React.Fragment>
  );
};

export default Counters;

