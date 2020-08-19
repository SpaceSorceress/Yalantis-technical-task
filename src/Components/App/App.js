import React, { useState, useEffect } from "react";
import "./App.css";
import LaunchBar from "../LaunchBar/LaunchBar";
import LaunchResults from "../LaunchResults/LaunchResults";
import Months from "../Months/Months";
import { getDataFromYalantis } from "../../util/yalantis";
import {
  sortByMonth,
  colorMonths,
  formingLists,
  showErrorsNotice,
  showApp,
} from "../../Helpers/helpers";

function App(props) {
  const [usersArray, setUsersArray] = useState([]);
  const [monthsObj, setMonthsObj] = useState([]);
  const [usersInSelectedMonth, setUsersInMonth] = useState([]);

  useEffect(setting, [usersArray]);

  async function getUsers() {
    const responseArray = await getDataFromYalantis();
    if (!(responseArray instanceof Array)) {
      showErrorsNotice(responseArray);
    } else {
      setUsersArray(responseArray);
      showApp();
    }
  }

  function setting() {
    let monthsObj = sortByMonth(usersArray);
    setMonthsObj(monthsObj);
    colorMonths(monthsObj);
  }

  function showListOfUsersByMonth(event) {
    //get the element which triggered event and form lists of users by month
    let arrayOfNames = formingLists(event, monthsObj);
    setUsersInMonth(arrayOfNames);
  }

  return (
    <div>
      <h1>Yalantis</h1>
      <div className="App">
        <LaunchBar onClick={getUsers} />
        <div id="errorBlock">
          <p>We're sorry, but something is not working as we expected.</p>
          <p>
            <span id="errorCode">Error</span>
          </p>
        </div>
        <div id="App-userlist">
          <LaunchResults usersArray={usersArray} />
          <div className="Months">
            <Months
              months={monthsObj}
              onMouse={showListOfUsersByMonth}
              listOfUsers={usersInSelectedMonth}
            />
          </div>
        </div>
      </div>
      <footer>
        <h3>by Siriakivska Iuliia </h3> <br />
      </footer>
    </div>
  );
}

export default App;
