import React from "react";
import ReactDOM from "react-dom";
import MainContain from "./MainContain.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="header">
          <h1>SEND an E-POSTCARD</h1>
          <div id="instructions">..fill out all fields below!</div>
          <img
            src="https://i0.wp.com/nguyenvanchuong.com/wp-content/uploads/2019/06/get-a-postcard-in-mail.gif?fit=367%2C400&ssl=1"
            width="60px"
            height="60px"
            id="header-pic"
          ></img>
        </div>

        <MainContain />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
