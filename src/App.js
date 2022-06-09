import React, { Component } from "react";
import Profile from "./components/Profile";
import "./style.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    }
    this.showBtn = this.showBtn.bind(this);
  }
  showBtn() {
    this.setState({ hidden: !this.state.hidden })
    console.log('clicked', this.state.hidden)

  }
  render() {
    return (
      <div className="main">
        <div className="prof" onMouseEnter={this.showBtn} onMouseLeave={this.showBtn} onClick={()=> console.log(12)}>
          <Profile title="asadsdasd" show={!this.state.hidden}/>
        </div>
        <div className="work"></div>
      </div>
    );
  }
}

export default App