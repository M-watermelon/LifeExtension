function addEntry(){
    let site = prompt("Enter name of the site:", "Google");
    let user = prompt("Enter your username:", "username");
    let pass = prompt("Enter your password", "password");
    // add entry
    // figure out how to create new html elements in javascript and set custom ids, set the ids to the entry number
    
}
// remember the default page is temporarily set to home.html!!! should be index.html
/*
function removeEntry(){
    let row = prompt("Enter the number of the row you would like to delete:", "1");
    let item = document.getElementById(row);
    if(selection  === parseInt(selection, 10) ){
        item.style.display = "none";
    }else{
        alert("Enter a number please!");
    }
}*/

function hide(element) {
    let item = document.getElementById(element);
    if (item.style.display === "none"){
        item.style.display = "block";
    }else{
        item.style.display = "none";
    }
} 
var realPass = "test";
function passChecker(){
    var pass = document.getElementById("LOGIN");
    if( pass == realPass){
        alert("Log in success!");
        location.href='home.html' ;
        // create browser cookie for successful login
        // make system that then avoids 
    }else{
        alert("Incorrect username or password.");
        // no browser cookie
    }
}
function passGen(){
    alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ<>,.?/:;[]{}|!@#$%^&*()1234567890_-+=`~".split("");
    //document.getElementById("test").innerHTML = alphabet; 
    var newPass = [];
    for (var i =0; i<20; i++){
        var newIndex = Math.floor(Math.random()*alphabet.length);
        newPass.push(alphabet[newIndex]);
    }
    var final = "Password: " + newPass.join("");
    document.getElementById("test2").innerHTML = final; 
    
    return(newPass);
    
    
}

function logOut(){
    location.href='home.html' ;
    //delete browser cookie

}

function reload(){
    const tableList =  fetchData();
    const table = document.getElementById('newtable');
    for(tableList of tableList){
      const newRow = document.createElement("tr");
      const site = document.createElement("td");
      const user = document.createElement("td");
      const password = document.createElement("td");
      site.textContent = tableList.Title;
      user.textContent = tableList.Username; 
      password.textContent = tableList.Password;    
      newRow.appendChild(site);
      newRow.appendChild(user);
      newTable.appendChild(password);
    }
  
    const target = ocument.getElementById('newtable');
    target.appendChild(newtable);
    
      
  }
  const axios = require('axios');



  let data; // Var to store the gotten data
  
  function fetchData() {
      return axios.get('http://password.schmischmi.com/coolman')
        .then(response => {
          const data = response.data;
          const dataList = [];
    
          for (const key in data) {
            dataList.push(`${key}: ${data[key]}`); // this should clean it up a bit
          }
    
          return dataList;
        })
  
    }

function addstuff(){
    //let datas = fetchData();
    //document.getElementById("test").innerHTML =datas;
    var dList = [];
    dList = fetchData();
    document.getElementById("test").innerHTML =dList; // makes it so the it prints it and seperates with a line. 

}