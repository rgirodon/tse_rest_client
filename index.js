const axios = require('axios');

axios.get('http://localhost:8080/employees')
  .then(function (response) {
    // handle success
    console.log(response.data.length + ' employees found :');

    response.data.forEach(element => {
        
        console.log(' - ' + element.name + ', ' + element.role);
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });