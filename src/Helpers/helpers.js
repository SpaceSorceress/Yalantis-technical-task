export function sortByMonth(allUsers) {
  //const allUsers = this.state.usersArray;
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
    return objectArray.reduce((acc, obj) => {
      let key = obj[propertySortBy];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  };
  const monthsObj = groupBy(sortedUsers, "month");
  return monthsObj;
}

export function colorMonths(months) {
  //let months = this.state.monthsObj;
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

export function formingLists(event, monthsObj) {
  const monthElement = event;
  const months = monthsObj;
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
    return arrayOfNames;
  }
}

export function showErrorsNotice(error){
    document.getElementById("errorBlock").style.display = "block";
    document.getElementById("errorCode").innerText = `${error}`;
}

export function showApp(){
    document.getElementById("App-userlist").style.visibility = "visible";
    document.getElementById("twelveMonths").style.display = "flex";
}