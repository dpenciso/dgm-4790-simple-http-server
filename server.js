const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const port = 5000

const apiRoutes = require('./routes/api')

app.use(bodyParser.urlencoded({extended: false}))

app.use(apiRoutes)

app.use('/', (req, res, next) => {
  res.send('<h1>Welcome to the sample HTTP server</h1>')
})

app.listen(port)