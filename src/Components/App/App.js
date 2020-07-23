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
    };
    this.getUsers = this.getUsers.bind(this);
    this.sortByMonth = this.sortByMonth.bind(this);
  }

  async getUsers() {
    const usersArray = await getDataFromYalantis();
    this.setState({
      usersArray: usersArray,
    });
    this.sortByMonth();
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

  setHighlights(){
    let months = this.state.monthsObj;
    let numberOfMonths = Object.keys(months).length;
    for (let i = 1; i < numberOfMonths+1; i++) {
      let m;
      if(i<10){
        m="0"+i;
      }else{
        m=""+i;
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

  showListOfUsersByMonth(event){
    //get the element which triggered event
    const monthElement=event.target;
    const monthName=monthElement.innerText;
    document.getElementById("selectedMonth").innerHTML=monthName;
    const id=monthElement.id;
    let indexInObj
    if(id<10){
      indexInObj="0"+id;
    }else{
      indexInObj=""+id;
    }
    console.log(indexInObj);
  }

  render() {
    return (
      <div>
        <h1>Yalantis</h1>
        <div className="App">
          <LaunchBar onClick={this.getUsers} />
          <div className="App-userlist">
            <LaunchResults usersArray={this.state.usersArray} />
            <div className="Months">
              <Months months={this.state.monthsObj}
              onClick={this.showListOfUsersByMonth} />
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
