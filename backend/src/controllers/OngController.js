const database = require('../database/connection')
const crypto = require('crypto');

module.exports = {
  async create(req, res) {
  //  const { name, email, whatsapp, city, uf } = req.body
    const data = req.body

    const ongId = crypto.randomBytes(4).toString('HEX')
    console.log(data)
    await database('ongs').insert({
      ongId,
      ...data
    })

    return res.json({ ongId })
  },
  async index(req, res) {
    const ongs = await database('ongs').select('*')
    return res.json(ongs)
  }
}
