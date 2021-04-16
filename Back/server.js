const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const createRoutes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/immo')
    .then(() => console.log('DB connected'))
    .catch(() => console.log('DB error'))

createRoutes(app)

app.listen(3000, () => {
    console.log('Back working on port 3000')
})
