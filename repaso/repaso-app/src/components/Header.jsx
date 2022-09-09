import * as React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AgeManagmentContext } from "../App";

const Header = (props) => {
  const [showMessage, setShowMessage] = useState(false);
  const {setAge, age} = useContext(AgeManagmentContext);
  
  const changePara = () => {
    props.onClick("hola soy tu hijo");
    setShowMessage(!showMessage);
    console.log(age);
  };
  
  return (
    <React.Fragment>
      <h1>{props.title} {age ? `- ${age}` : ''}</h1>
      <p>{props.description}</p>
      <button onClick={changePara}>change para</button>
      { showMessage ? <p>My message: {JSON.stringify(showMessage)}</p> : <p>Lolo</p> }
      { (showMessage && !showMessage) && <p>Lololololo</p> }
    </React.Fragment>
  );
};

export default Header;

