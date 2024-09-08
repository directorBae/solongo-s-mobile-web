import React from "react";
import "./App.css";
import MainView from "./pageview/main/view";
import MainPageVM from "./pageview/main/vm";

function App() {
  return (
    <div className="App">
      <MainView vm={MainPageVM} />
    </div>
  );
}

export default App;
