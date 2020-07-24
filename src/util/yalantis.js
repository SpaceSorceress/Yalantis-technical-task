import { useState } from "react";

//const axios = require("axios");
const path="https://yalantis-react-school-api.yalantis.com/api/task0/users";

export async function getDataFromYalantis(){
    try {
    const response = await fetch(path);
    if(response.ok){
        const usersArray = await response.json();
        const modifiedDateArray=usersArray.map(user=>{
            return {
              firstName: user["firstName"],
              lastName: user["lastName"],
              id: user["id"],
              dob: `${user["dob"].slice(0, 10)} ${user["dob"].slice(11, 16)}`
            };
        })
        return modifiedDateArray;
    }
    
  } catch (error) {
    console.error(error);
  }

}