const express = require('express');
const crypto = require('crypto');

const database = require('./database/connection')

const routes = express.Router()



routes.post('/ongs', async (req, res) => {
//  const { name, email, whatsapp, city, uf } = req.body
  const data = req.body

  const ongId = crypto.randomBytes(4).toString('HEX')
  console.log(data)
  await database('ongs').insert({
    ongId,
    ...data
  })

  return res.json({ ongId })
})

module.exports = routes
