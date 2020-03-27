const express = require('express');

const app = express()

app.get('/', (req, res) => (
  res.json({
    hello: "World",
    evento: "Semana OmniStack 11.0",
    aluno: "Murilo Maia"
  })
))

app.listen(3001)
