const path = require('path');
const router = require('express').Router();


// GET notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// GET index page
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

module.exports = router;