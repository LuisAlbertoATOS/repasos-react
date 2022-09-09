import * as React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { AgeManagmentContext, UserContext } from "../App";

const Form = (props) => {
  const [employeeAge, setEmployeeAge] = useState(0);
  const [ageMessage, setAgeMessage] = useState('Welcome!');
  const {setAge,age} = useContext(AgeManagmentContext);

  useEffect(() => {
    if(employeeAge >= 18){
      setAgeMessage('Welcome');
    } else{
      setAgeMessage('Sorry, you are under 18');
    }
    setAge(employeeAge);
  }, [employeeAge]);
  
  const employeeAgeHandler = (event) => {
    setEmployeeAge(event.target.value);
  };

  return (
    <React.Fragment>
      <label>Age: </label>
      <input type="number" name="age" value={employeeAge} 
      onChange={employeeAgeHandler} 
      />

      <p>{ageMessage}</p>
      {employeeAge>=18 ? <p>welcome x2</p>: <p>Not welcome pt 2</p>}
    </React.Fragment>
  );
};


export default Form;
