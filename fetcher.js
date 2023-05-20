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
  
  fetchData()
    .then(dataList => { // this'll print it
      console.log(dataList.join('\n')); // makes it so the it prints it and seperates with a line. 
    });