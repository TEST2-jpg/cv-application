import React, { Component } from "react";
import Experienceforms from "./components/Experienceforms";
import Profile from "./components/Profile";

import "./style.css"

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="main">
        <div className="prof">
          <Profile/>
        </div>
        <div className="work">
          <Experienceforms/>
        </div>
      </div>
    );
  }
}

export default App