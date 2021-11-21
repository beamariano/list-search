import React from "react";
import "./App.css";

import SideMenu from "./components/SideMenu";
import DisplayScreen from "./components/DisplayScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="main">
        <SideMenu />
        <DisplayScreen />
      </div>
      <Footer />
    </div>
  );
}

export default App;
