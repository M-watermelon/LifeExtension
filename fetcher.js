// anna code here
console.log("hi")
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
  



function sendDataToServer(userID, password) {
  const url = `http://password.schmischmi.com/regester/${userID}/${password}`; // we accidentally flipped the login and the register links.... 

  return axios.post(url)
    .then(response => {
      return response.data; // should recieve a 1 if it works
    })
    .catch(error => {
      console.error('An error occurred:', error);
      throw error; // Rethrow the error to propagate it further
    });

}

//  usage
const userID = "sd";//the username is: sd
const password = "80982093";// the password is : 80982093

sendDataToServer(userID, password)// if the user and pass is correct, it should print out the user name and password to another site. 
  .then(serverResponse => {
    if (serverResponse == 'OK'){
      console.log('Server response:', serverResponse);
      fetchData()
      .then(dataList => { // this'll print it
        console.log(dataList.join('\n')); // makes it so the it prints it and seperates with a line. 
      });
  
    }
    
    // Further handling of the server response as needed
  });

