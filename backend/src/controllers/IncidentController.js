const database = require('../database/connection')

module.exports = {
  async create(req, res) {
    const incidentsData = req.body
    const ongId = req.headers.authorization

    const [ incidentId ] = await database('incidents').insert({
      ...incidentsData,
      ongId
    })

    return res.json({ incidentId })
  },
  async index(req, res){
    const incidents = await database('incidents').select('*')

    return res.json(incidents)
  },
  async delete(req, res) {
    const { incidentId } = req.params
    const idOng = req.headers.authorization

    const [ incident ] = await database('incidents').select()
      .where('incidentId', incidentId)


    if (incidentId != incident.incidentId)
      return res.status(401).json({ error: 'Unauthorized' })

    await database('incidents').where('incidentId', incidentId).delete()

    return res.status(204).send()

  }
}
