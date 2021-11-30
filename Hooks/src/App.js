import React from "react";
import UseStateCounter from "./tutorial/1-useState/useState-counter";
import UseEffectFetchData from "./tutorial/2-useEffect/useEffect-fetch-data";
import ShowHide from "./tutorial/3-conditional-rendering/show-hide";
import ControlledInputs from "./tutorial/4-forms/controlled-inputs";
import UseRefBasics from "./tutorial/5-useRef/useRef-basics";
import Index from "./tutorial/6-useReducer";
import ContextAPI from "./tutorial/7-useContext/context-api";
import Example from "./tutorial/8-custom-hooks/1-fetch-example";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <UseStateCounter />
      <UseEffectFetchData />
      <ShowHide />
      <ControlledInputs />
      <UseRefBasics />
      <Index />
      <ContextAPI />
      <Example />
    </div>
  );
}

export default App;
