const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.send('<h1>Hi we got the response!!!</h1>')
})

app.get('/about', (req, res) => {
  res.send('This is the app basic developing')
})

app.get('/contact', (req, res) => {
  res.send('This is my contact in the net')
})

app.listen(3000, () => {
  console.log('Serever on port 3000 with express now with nodemon too!!')
})
