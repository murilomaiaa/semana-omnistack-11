const database = require('../database/connection')

module.exports = {
  async index(req, res){
    const { page = 1 } = req.query

    const [ count ] = await database('incidents')
      .count()

    const incidents = await database('incidents')
      .select('*')
      .limit(5)
      .offset((page -1) * 5)

    res.header('X-Total-Count', count['count(*)'])
    return res.json(incidents)
  },
  async create(req, res) {
    const incidentsData = req.body
    const ongId = req.headers.authorization

    const [ incidentId ] = await database('incidents').insert({
      ...incidentsData,
      ongId
    })

    return res.json({ incidentId })
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
