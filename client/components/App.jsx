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
        <h1>SEND an E-POSTCARD</h1>
        <MainContain />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
