//const axios = require("axios");
const path="https://yalantis-react-school-api.yalantis.com/api/task0/users";

export async function getDataFromYalantis(){
    try {
    const response = await fetch(path);
    if(response.ok){
        const usersArray = await response.json();
        return usersArray;
    }
    
  } catch (error) {
    console.error(error);
  }

}