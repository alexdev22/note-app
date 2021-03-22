const express = require('express')
const router = express.Router()
const Notes = require ('../models/Notes')


router.get('/', async (req, res) => {
    const noteData = await Notes.find()
    res.json(noteData)
})

router.post('/', async (req, res) => {

  const notes = new Notes(req.body)
  await notes.save()
  res.redirect('http://localhost:3000')
   
    
})


module.exports = router;