const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get ('/', function(req, res) {
    res.send('Hello from server');
})

app.post('/enroll', function(req, res){
    console.log(res.body);
    res.status(200).send({"Message": "Data Received"})
})

app.listen(PORT, function() {
console.log ('Server is running in localhost port: '+PORT);
})
