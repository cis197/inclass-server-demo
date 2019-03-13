const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
var bodyParser = require('body-parser')

app.use(bodyParser.json())

let messages = []

app.use(cors())

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/newmessage', (req,res,next) => {
  const {message} = req.body;
  messages.push(message)
  res.sendStatus(200)
})

app.get('/messages', (req,res,next) => {
  res.json(messages)
})

app.get('/clear', (req,res,next) => {
  messages = []
  res.sendStatus(200)
})

const PORT =  3000
app.listen(PORT, () => {
  console.log('listening!')
})