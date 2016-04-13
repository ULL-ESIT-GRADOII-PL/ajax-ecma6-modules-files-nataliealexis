"use strict";

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.set('port', (process.env.PORT || 5000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/public'));

const calculate = require('XXXXXXXXXXXXXXXXXX');

app.get('/', (request, response) => {
  //XXXXXXXXXXXXXXXXXXXXXXXX X XXXXXX XXXX XXXXXXXXX XXX
  response.render('index', { title: 'CSV' });
});

app.get('/csv', (request, response) => {
  //XXXXXXXXXXXXXXX XXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXX
  response.render ('csv', {title:'CSV' });
});

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});