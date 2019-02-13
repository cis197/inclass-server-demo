const express = require('express')
const app = express()

const messages = []

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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('listening!')
})