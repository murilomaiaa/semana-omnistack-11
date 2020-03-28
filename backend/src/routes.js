const express = require('express');
const crypto = require('crypto');

const database = require('./database/connection')

const routes = express.Router()

routes.post('/ongs', async (req, res) => {
//  const { name, email, whatsapp, cidade, uf } = req.body
  const data = req.body

  const id = crypto.randomBytes(4).toString('HEX')

  await database.('ongs').insert({
    id,
    ...data
  })

  return res.json({ id })
})

module.exports = routes
