const database = require('../database/connection')

module.exports = {
  ///ongs/:id/incidents
  async index(req,res) {
    const { ongId } = req.params
    const auth = req.headers.authorization

    if (ongId != auth)
      return res.status(401).json({ error: 'Unauthorized' })

    const incidents = await database('incidents')
      .select('*')
      .where('ongId', ongId)


    return res.json(incidents)
  }
}
