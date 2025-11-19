
const express = require('express')
const app = express()

let notes = [
  {
    id: 1,
    content: "hola crayola",
    important: true
  },
  {
    id: 2,
    content: "maldito blutu del diablo",
    important: false
  },
  {
    id: 3,
    content: "Lo deje callado o q perro",
    important: true
  }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello ptos</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
