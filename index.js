const StaticmanAPI = require('./server')
const env = require('dotenv').config()

const api = new StaticmanAPI()

api.start(port => {
  console.log('Staticman API running on port', port)
})
