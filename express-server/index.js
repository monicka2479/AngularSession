const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();



app.use(bodyParser.json());
app.use(cors());

app.get ('/', function(req, res) {
    res.send('Hello from server');
})

app.post('/enroll', function(req, res){
    console.log('Request body output '
        +req.body.email);

        var mongoose = require('mongoose');
 
        // make a connection
        mongoose.connect('mongodb://localhost:27017/mean-bulk');
         
        // get reference to database
        var db = mongoose.connection;
         
        db.on('error', console.error.bind(console, 'connection error:'));

         db.once('open', function() {
            console.log("Connection Successful!");
            
            // define Schema
            var userSchema = mongoose.Schema({
                 userName: String,
                 email: String,
                 phone: String,
                 topic: String,
                 timePreference: String,
                 promo: Boolean
            });
         
            // compile schema to model
            var Book = mongoose.model('User', userSchema, 'User');
                 
            // save multiple documents to the collection referenced by Book Model
            Book.collection.insertMany(req.body, function (err, docs) {
              if (err){ 
                  return console.error(err);
              } else {
                console.log("Multiple documents inserted to Collection");
              }
            });
            
        });
})

app.listen(PORT, function() {
console.log ('Server is running in '+
'localhost port: '+ PORT);
})