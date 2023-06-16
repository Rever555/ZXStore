var bodyParser = require('body-parser')
const express = require('express'); //Line 1
const sapp = express(); //Line 2

const orderRouter = require("./Routes/order.routes")

const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
sapp.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
sapp.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

sapp.use(express.json())
sapp.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

sapp.use(express.urlencoded({ extended: false }))

sapp.use(bodyParser.json())
sapp.use('/api', orderRouter)