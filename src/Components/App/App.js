import React from "react";
import "./App.css";
import LaunchBar from "../LaunchBar/LaunchBar";
import LaunchResults from "../LaunchResults/LaunchResults"
import Months from "../Months/Months";
import UsersByMonth from "../UsersByMonth/UsersByMonth";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Yalantis</h1>
        <div className="App">
          <LaunchBar />
          <div className="App-userlist">
            <LaunchResults />
            <div className="Months">
              <Months />
              <UsersByMonth />
            </div>
          </div>
        </div>
        <footer>
          <h3>Siriakivska Iuliia | 2020</h3> <br />
        </footer>
      </div>
    );
  }
}

export default App;
