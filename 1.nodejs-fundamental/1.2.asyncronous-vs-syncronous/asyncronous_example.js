const axios = require('axios');
axios.get('http://api.github.com')
  .then((response) => {
    console.log(response.data);
  })
  .catch(error => console.log(error));
console.log('hello world');