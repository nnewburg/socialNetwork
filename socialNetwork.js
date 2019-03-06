var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

//write a function to:
//List everyone and for each of them, list the names of who they follow and who follows them

function listUsers(){

  //create a for in loop to list each user
  for(let user in data){
    //prints the users name
    console.log(data[user]["name"]);
    //create an empty array to store a list of names
    let listOfFol = [];
      //a for loop running through a users follows array
      for (let i = 0; i < data[user]["follows"].length; i++){
        //new variable to store the id of who they follow
        let idUser = data[user]["follows"][i]
        //add the actual name of the user to the empty array
        listOfFol.push(data[idUser]["name"]);
      }
    //print the people they follow
    console.log(`${data[user]["name"]} follows ${listOfFol}`);
  }


}

listUsers();