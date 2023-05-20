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
<<<<<<< Updated upstream
  



function sendDataToServer(userID, password) {
  const url = `http://password.schmischmi.com/login/${userID}/${password}`;

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
const userID = 'sd';
const password = '23';

sendDataToServer(userID, password)
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

||||||| Stash base
  
  fetchData()
    .then(dataList => { // this'll print it
      console.log(dataList.join('\n')); // makes it so the it prints it and seperates with a line. 
    });
=======

  fetchData()
    .then(dataList => { // this'll print it
      console.log(dataList.join('\n')); // makes it so the it prints it and seperates with a line. 
    });

>>>>>>> Stashed changes
