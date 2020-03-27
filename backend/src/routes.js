const express = require('express');

const routes = express.Router()

routes.get('/', (req, res) => (
  res.json({
    hello: "World",
    evento: "Semana OmniStack 11.0",
    aluno: "Murilo Maia"
  })
))

module.exports = routes
