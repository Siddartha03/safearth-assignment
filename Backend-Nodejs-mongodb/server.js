var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

mongoose.connect(
  'mongodb+srv://dbfirst:P$siddu123@nodejs-tutorial-1q7og.mongodb.net/safearth?retryWrites=true&w=majority',
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  },
  () => console.log('DB Connected!')
)

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})