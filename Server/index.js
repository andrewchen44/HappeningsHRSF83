const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database-mongo/post.js');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../Angular-Client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Get request to `/` received.');
});

app.post('/home', (request, response) => {
  db.fetchTopFive(request.body.location, (result) => {
    response.send(result);
  });
});

app.get('/search/:input', (request, responce) => {
  console.log(request.params.input);

  //  search database for top five items containing the name
});

app.listen(port, (err) => {
  if (err) {
    console.log('something bad happened', err);
  } else {
    console.log(`server is listening on ${port}`);
  }
});
