import React, { Component } from "react";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import "./style.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      expHidden: true,
    }
    this.showBtn = this.showBtn.bind(this);
    this.expShowBtn = this.expShowBtn.bind(this);

  }
  showBtn() {
    this.setState({ hidden: !this.state.hidden })
  }
  expShowBtn() {
    this.setState({ expHidden: !this.state.expHidden })
  }
  render() {
    return (
      <div className="main">
        <div className="prof" onMouseEnter={this.showBtn} onMouseLeave={this.showBtn} onClick={()=> console.log(12)}>
          <Profile title="asadsdasd" show={!this.state.hidden}/>
        </div>
        <div className="work" onMouseEnter={this.expShowBtn} onMouseLeave={this.expShowBtn} onClick={()=> console.log(132)} >
          <Experience show={!this.state.expHidden}/>
        </div>
      </div>
    );
  }
}

export default App