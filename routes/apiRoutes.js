const router = require('express').Router();
const fs = require('fs');  
const { v4: uuidv4 } = require('uuid');
const util = require('util');
const path = require('path');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const getNotes = ()=>{
return readFile('db/db.json', 'utf-8').then(rawNotes => [].concat(JSON.parse(rawNotes)))
 }
//  getNotes().then(notes => console.log(notes))
// GET
router.get('/notes', (req, res) => {
// console.log('hit route')
   getNotes()
    .then((notes) => {
     res.json(notes)
    })
    .catch((err) => res.status (500).json(err));
  });

// POST

router.post('/notes', (req, res) => {
getNotes().then(oldNotes =>{
  let noteObject = {title:req.body.title, text:req.body.text,id:uuidv4()}
  let newNotes = [...oldNotes,noteObject]
  writeFile('db/db.json', JSON.stringify(newNotes)).then(()=>res.json({msg:'Success'})).catch((err) => res.status (500).json(err));
})
  });


//  EXtra credit DELETE

//  GETTING AN ERROR BUT GOT IT FIXED = I WAS MISSING process.env.PORT || 3001;process.env.PORT || 3001; ON SERVER.JS
router.delete('/notes/:id', (req, res) => {
  console.log('deleting notes')
  getNotes()
  .then((oldNotes) => {
  let newNotes = oldNotes.filter(note => note.id !== req.params.id);
  writeFile('db/db.json', JSON.stringify(newNotes))
  .then(() => res.json({ msg: 'Success' }))
  .catch((err) => res.status(500).json(err));
  })
  .catch((err) => res.status (500).json(err));
  });


  module.exports = router;