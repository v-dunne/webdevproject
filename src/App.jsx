// added from Kickoff 4 - lmk if any needs to be removed
import React from "react";
import Home from "./Components/Home/Home.jsx";
import * as Env from "./environments";
import Parse from "parse";

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return <Home />;
}

export default App;