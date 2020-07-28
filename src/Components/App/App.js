import React from "react";
import "./App.css";
import LaunchBar from "../LaunchBar/LaunchBar";
import LaunchResults from "../LaunchResults/LaunchResults";
import Months from "../Months/Months";
import { getDataFromYalantis } from "../../util/yalantis";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usersArray: [],
      monthsObj: [],
      usersInSelectedMonth: [],
    };
    this.getUsers = this.getUsers.bind(this);
    this.sortByMonth = this.sortByMonth.bind(this);
    this.showListOfUsersByMonth = this.showListOfUsersByMonth.bind(this);
  }

  async getUsers() {
    const usersArray = await getDataFromYalantis();
    if(!(usersArray instanceof Array)){
      let code = usersArray.status;
      document.getElementById("errorBlock").style.display="block";
      document.getElementById("errorCode").innerText=`Error ${code}`
    }else{
      document.getElementById("App-userlist").style.visibility = "visible";
      this.setState({
      usersArray: usersArray,
    });
    document.getElementById("twelveMonths").style.display = "flex";
    this.sortByMonth();
    }
    
  }

  sortByMonth() {
    const allUsers = this.state.usersArray;
    const usersByMonth = allUsers.map((user) => {
      return {
        name: `${user.firstName} ${user.lastName}`,
        month: `${user.dob.slice(5, 7)}`,
      };
    });
    const sortedUsers = usersByMonth.sort((a, b) => {
      return a.month - b.month;
    });

    const groupBy = (objectArray, propertySortBy) => {
      return objectArray.reduce(function (acc, obj) {
        let key = obj[propertySortBy];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {});
    };

    const monthsObj = groupBy(sortedUsers, "month");

    this.setState({
      monthsObj: monthsObj,
    });

    this.setHighlights();
  }

  setHighlights() {
    let months = this.state.monthsObj;
    let numberOfMonths = Object.keys(months).length;
    for (let i = 1; i < numberOfMonths + 1; i++) {
      let m;
      if (i < 10) {
        m = "0" + i;
      } else {
        m = "" + i;
      }

      let numbersOfPeople = months[m].length;
      if (numbersOfPeople < 3) {
        document.getElementById(i).classList.add("few");
      } else if (numbersOfPeople > 2 && numbersOfPeople < 7) {
        document.getElementById(i).classList.add("three-six");
      } else if (numbersOfPeople > 6 && numbersOfPeople < 11) {
        document.getElementById(i).classList.add("seven-ten");
      } else if (numbersOfPeople > 10) {
        document.getElementById(i).classList.add("many");
      }
    }
  }

  showListOfUsersByMonth(event) {
    //get the element which triggered event
    const monthElement = event;
    const months = this.state.monthsObj;
    const monthName = monthElement.innerText;
    const id = monthElement.id;

    let indexInObj;
    if (id < 10) {
      indexInObj = "0" + id;
    } else {
      indexInObj = "" + id;
    }
    //creating an array which will consist of names only by selected month
    let arrayOfUsersBySelectedMonth = months[indexInObj];
    if (arrayOfUsersBySelectedMonth) {
      document.getElementById("selectedMonth").innerHTML = monthName;
      let arrayOfNames = arrayOfUsersBySelectedMonth.map((element) => {
        return element.name;
      });
      this.setState({
        usersInSelectedMonth: arrayOfNames,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Yalantis</h1>
        <div className="App">
          <LaunchBar onClick={this.getUsers} />
          <div id="errorBlock">
            <p>We're sorry, but something is not working as we expected.</p>
            <p><span id="errorCode">Error</span></p>
          </div>
          <div id="App-userlist">
            <LaunchResults usersArray={this.state.usersArray} />
            <div className="Months">
              <Months
                months={this.state.monthsObj}
                onClick={this.showListOfUsersByMonth}
                listOfUsers={this.state.usersInSelectedMonth}
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
}

export default App;
