import React, { createContext, useState } from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Form from "./components/Form";
import Header from "./components/header";
import RefForm from "./components/RefForm";

export const UserContext = createContext();
export const AgeManagmentContext = createContext();

function App() {
  const [para, setPara] = useState("not updated para");
  const [age, setAge] = useState(0);
  const username = "luis";
  const username2 = "alan";

  return (
    <UserContext.Provider value={{ username, username2 }}>
      <AgeManagmentContext.Provider value={{ setAge, age }}>
        <div className="App">
          <RefForm />
          <Header
            title={"React App"}
            description={"My description"}
            onClick={setPara}
          />
          <p>{para}</p>
          <EmployeeList />
          <Form />
        </div>
      </AgeManagmentContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
