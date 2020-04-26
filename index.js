const express = require('express')
const morgan = require('morgan')
const app = express()

// function logger (req, res, next){
//   console.log(`Route receive: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
//   next()
// }

app.use(express.json())

app.use(morgan('dev'))

app.use('/user', (req,res, next) => {
  console.log('Send /user ---> OK')
  next()
})

app.get('/', (req,res) => {
  res.send('<h1>Hi we got the response!!!</h1>')
})

app.get('/user', (req, res) => {
  res.json({
    username: 'Zenchy',
    lastname: 'poderoso'
  })
})

app.post('/user/:id', (req, res) => {
  console.log(req.body)
  console.log(req.params)
  res.send('This is the POST')
})

app.delete('/user/:userId', (req, res) => {
  res.send(`User ${req.params.userId} deleted`)
})

app.put('/user/:id', (req, res) => {
  console.log(req.body)
  res.send(`User ${req.params.id} updated`)
})

app.get('/get', (req, res) => {
  res.send('This is the GET')
})

app.post('/post', (req, res) => {
  res.send('This is the POST')
})

app.put('/put', (req, res) => {
  res.send('This is the PUT')
})

app.delete('/delete', (req, res) => {
  res.send('This is the DELETE')
})

app.get('/contact', (req, res) => {
  res.send('This is my contact in the net')
})

app.listen(3000, () => {
  console.log('Serever on port 3000 with express now with nodemon too!!')
})
