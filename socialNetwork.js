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
    //console.log(data[user]["name"]);
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
      let whoFol = [];
    for(let folUser in data){

        for(let i = 0; i < data[folUser]["follows"].length; i++){
          if(data[folUser]["follows"][i] == user){
            whoFol.push(data[folUser]["name"]);
          }
        }
       // console.log(`${data[user]["name"]} is followed by ${whoFol}`)
    }
    whoFol.join();
    console.log(`${data[user]["name"]} is followed by ${whoFol}`);
  }


}

//listUsers();

//identify who follows the most users

function followsMost(){
  let max = data["f01"]["follows"].length
  let nameOfMax = data["f01"]["name"];

  for(let user in data){
    if(data[user]["follows"].length > max){
      max = data[user]["follows"].length
      nameOfMax = data[user]["name"];
    }
  }

  console.log(`${nameOfMax} follows the most people at ${max}`);
}

//followsMost();

//identify who has the most followers

function mostFollowers(){
  let arr = [];
  let arr1 = [];

  for(let user in data){
    arr.push(user);
    arr1.push(0);
  }

  for(let user in data){
    let temp = 0;
    for(let i = 0; i < data[user]["follows"].length; i++){
     temp = arr.indexOf(data[user]["follows"][i])
     arr1[temp]++
    }
  }

  let maxFollow = Math.max(...arr1);
  let arrInd = []

  for(let i = 0; i < arr1.length; i++){
    if(maxFollow == arr1[i]){
      arrInd.push(i);
    }
  }

  for(let i = 0; i < arrInd.length; i++){
    console.log(`${data[arr[arrInd[i]]]["name"]} has the most followers with ${maxFollow} followers`)
  }

  //console.log(maxFollow);
  // console.log(arr1)

}

//mostFollowers();

//Identify who has the most followers over 30

function mostFollowersOver30(){

  let arr = [];
  let arr1 = [];

  for(let user in data){
    if(data[user]["age"] > 30)
    arr.push(user);
    arr1.push(0);
  }

  for(let user in data){
    let temp = 0;
    for(let i = 0; i < data[user]["follows"].length; i++){
     temp = arr.indexOf(data[user]["follows"][i])
     arr1[temp]++
    }
  }

  let maxFollow = Math.max(...arr1);
  let arrInd = []

  for(let i = 0; i < arr1.length; i++){
    if(maxFollow == arr1[i]){
      arrInd.push(i);
    }
  }

  for(let i = 0; i < arrInd.length; i++){
    console.log(`${data[arr[arrInd[i]]]["name"]} has the most followers with ${maxFollow} followers`)
  }

}

mostFollowersOver30();