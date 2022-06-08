import React, { Component } from "react";
import Profile from "./components/Profile";
import "./style.css"

class App extends Component {
    constructor(props) {
        super(props);
    }

render() {
    return (
      <div className="main">
        <Profile title="asadsdasd"/>
        <div className="work"></div>
      </div>
    );
  }
}

export default App