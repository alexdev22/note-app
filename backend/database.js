const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/note-app', {useNewUrlParser: true, useUnifiedTopology:true})
    .then((result) => {console.log('Database Connected')})
    .catch((err) => {console.log(err)})

