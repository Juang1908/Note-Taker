const router = require('express').Router();


// GET
router.get('/notes', (req, res) => {

   //? .getNotes()
    .then((notes) => {
        return res.json(notes);
    });
    .catch((err) => res.status (500).json(err));
  });




// POST

router.post('/notes', (req, res) => {

    //? .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status (500).json(err));
  });


//  EXtra credit DELETE

router.delete('/notes', (req, res) => {

    
  });


  module.exports =