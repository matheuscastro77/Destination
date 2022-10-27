import React from "react";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Routes/Router";
import GlobalState from "./Context/GlobalState";

const App = () => {
  return (
      <GlobalState>
        <GlobalStyled />
        <Router />
      </GlobalState>
  )
}

export default App;
