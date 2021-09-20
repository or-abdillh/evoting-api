const express = require('express');
const app = express();
const mysql = require('./connection')
const routes = require('./routes')
const bodyParser = require('body-parser')
const PORT = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

routes(app);

app.listen(PORT, (err) => {
   if ( err ) throw err;
   console.log('Server running at PORT ' + PORT)
})