const http = require('http')

const server = http.createServer((req, res) => {
  res.status = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello world no Express!!!')
})

server.listen(3000, () => {
  console.log('Server 3000 working')
})
