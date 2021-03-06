
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const withAuth = require('../middleware');
const fetch = require('node-fetch');
const fs = require('fs');

const router = express.Router();
const secret = process.env.SECRET


router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
router.get('/api/weather', (req, res) => {
  const zipcode = 75038;
  apiid = process.env.APIID;

  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${apiid}`)
  .then(res => res.json())
  .then(data => {
    res.send({ data })
  });

})
router.post('/api/profile', (req, res) => {

  const name = '';
  const firstname = '';
  const discriptors = [];
  const body = {
    firstname: req.body.name,
    name: req.body.name,
    discriptors: req.body.descriptors
  }
  fs.open('../client/src/descriptors/profile.json', 'a', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
    res.send(204)
  });

  // fs.appendFile('../client/src/descriptors/profile.json',"utf-8", body, function (err) {
  //   if (err) throw err;
  //   console.log('Updated!');
  // });

  console.log(body)

  res.send(204)
})
router.get('/api/smith', (req, res) => {
  res.json('The password is potato');
});


router.post('/api/register', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then(user => {
      if (user) {
        res.status(404).send(`${email} already has an account, please login or reset your password`)
      }
      else if (!user) {

        const user = new User({ email, password });
        user.save(function (err) {
          if (err) {
            console.log(err);
            res.status(500).send("Error registering new user please try again.");
          } else {
            res.status(200).send("Welcom");
          }
        });
      }
    });

});
router.post('/api/logout', (req, res) => {
  res.clearCookie('token')
    .sendStatus(200);
})

router.post('/api/authenticate', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, function (err, user) {
    if (err) {
      console.error(err);
      res.status(500)
        .json({ Error: 'Please try again' });
    } else if (!user) {
      res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500)
            .json({
              error: 'Internal error please try again'
            });
        } else if (!same) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
            });
        } else {
          // Issue token
          const payload = { email };
          console.log(user)
          const token = jwt.sign(payload, secret, {
            expiresIn: '1h'
          });
          res.cookie('token', token, { httpOnly: true }).sendStatus(200)
        }
      });
    }
  });
});


router.get('/checkToken', withAuth, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;