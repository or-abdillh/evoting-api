const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.listen(PORT, () => {
   console.log('Server running at PORT ' + PORT)
})