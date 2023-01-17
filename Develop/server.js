const express = require('express');
const termData = require('./db/db.json');
const path = require('path');
const fs = require('fs');  // ?
const uuid = require('uuid'); //?
const PORT = 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/Develop/public')));



// GET index page
app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// GET notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// POST request
app.post('/notes', (req, res) => {

  res.json(`${req.method} request received`);

  
  console.info(req.rawHeaders);

 
  console.info(`${req.method} request received`);
});


// Listen for PORT 3001
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
