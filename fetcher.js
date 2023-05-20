// anna code here
console.log("hi")
const axios = require('axios');



let data; // Variable to store the retrieved data

axios.get('http://password.schmischmi.com/coolman')
  .then(response => {
    const data = response.data;
    const dataList = [];

    for (const key in data) {
      dataList.push(`${key}: ${data[key]}`);
    }

    console.log(dataList.join('\n'));
    // Use the data as needed
  })

