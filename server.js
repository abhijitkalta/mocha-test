"use strict";

const express = require('express');
const hbs = require('hbs');
const getPalette = require('./lib/getPalette');

var app = express();

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
  res.render('index',{
    welcomeMessage: 'Welcome to my page!!',
    palette: getPalette.palets()
  });
})
app.listen(3000, () => {
  console.log("Listening to port 3000");
})
