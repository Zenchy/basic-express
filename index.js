const express = require('express')
const morgan = require('morgan')
const app = express()

//Settings
app.set('AppName', 'Zenchy basic express')
app.set('port', 3000)
app.set('view engine', 'ejs')

//Middlewares
app.use(express.json())

app.use(morgan('dev'))

app.use('/user', (req,res, next) => {
  console.log('Send /user ---> OK')
  next()
})

//Routes

app.get('/', (req, res) =>{
  const datas = [{name:'Alvaro'},{name:'Zency'},{name:'Corral'},{name:'YOOOO'}]
  res.render('index.ejs', {pipol: datas})
})

app.get('/user', (req, res) => {
  res.json({
    username: 'Zenchy',
    lastname: 'poderoso yes'
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

app.use(express.static('public'))

app.listen(app.get('port'), () => {
  console.log(app.get('AppName'))
  console.log('Serever in the port:', app.get('port'))
})
