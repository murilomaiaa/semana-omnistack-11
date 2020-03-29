const database = require('../database/connection')

module.exports = {
  async create(req, res){
    const { ongId } = req.body

    const [ ong ] = await database('ongs')
      .select('name')
      .where('ongId', ongId)

    if (!ong)
      return res.status(400)
        .json({ error: 'No ONG found with this ID' })

    res.json(ong)
  }


}
