const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())

app.use(express.urlencoded({extended:false}))

app.use('/create/note', require('./router/notes.index'))

app.listen(3001, () => {
    console.log('Listening on port 3001')
})

