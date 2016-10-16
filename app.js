const express = require ('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// Set our views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/*', function(req, res, next){
  res.render('index.ejs', { names: ['Rick', 'Morty', 'Summer', 'Beth', 'Jerry'] });
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on : ${port}`));
