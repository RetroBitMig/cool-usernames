import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tomato Hentai's Username Generator</h1>
        <tiny>
          <center>
            Sometimes you'll need to refresh the page a few times to get a new
            username.
            <br />
            Blame the government... or... something.
          </center>
        </tiny>
        <br />
        <center>
          <p>Your new username is...</p>
        </center>
        <name>
          <center>Banana Banana</center>
        </name>
        <br />
        <p>
          Hey, you. Yeah you. Wanna check out the{" "}
          <a className="App-link" href="https://github.com/headache-booth/">
            creator
          </a>
          ?
        </p>
      </div>
    );
  }
}

export default App;
