const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config();

const mongoose = require('mongoose');

const router = require('./routes/routes');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const mongo_uri = process.env.MONGODB_URI || 'mongodb://localhost/react-auth';
mongoose.connect(mongo_uri, { useNewUrlParser: true }, function(err) {
  if (err) {
    throw err;
  } else {
    console.log('Connected to DB');
  }
});
if(process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, 'public')));
}


app.use('/',router);


app.listen(process.env.PORT || 5000);
