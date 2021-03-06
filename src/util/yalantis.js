const path = "https://yalantis-react-school-api.yalantis.com/api/task0/users";

export function getDataFromYalantis() {
  let result;
    return fetch(path)
    .then(response => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json()})
    .then(data=>{ result=data.map((user) =>  ({
          firstName: user["firstName"],
          lastName: user["lastName"],
          id: user["id"],
          dob: `${user["dob"].slice(0, 10)} ${user["dob"].slice(11, 16)}`,
        }));
    return result;
  })
    .catch(error=>{
     return error;
    })
  }
/*
export async function getDataFromYalantis() {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      return response;
    }
    if (response.ok) {
      const usersArray = await response.json();
      const modifiedDateArray = usersArray.map((user) => {
        return {
          firstName: user["firstName"],
          lastName: user["lastName"],
          id: user["id"],
          dob: `${user["dob"].slice(0, 10)} ${user["dob"].slice(11, 16)}`,
        };
      });
      return modifiedDateArray;
    }
  } catch (error) {
    console.error(error);
    const getError = new Error(error);
    return getError;
  }
}*/
