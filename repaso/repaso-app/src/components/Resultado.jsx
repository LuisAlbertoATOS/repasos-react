import * as React from "react";

const Resultado = (props) => {

  // console.log(props.console);

  return (
    <React.Fragment>
      <div>
        <p>{props.count}</p>
        <button type="button" onClick={props.addCounter}>+1</button>
      </div>
    </React.Fragment>
  );
};

export default Resultado;

