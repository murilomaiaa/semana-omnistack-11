const express = require('express');

const routes = express.Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const SpecificOngController = require('./controllers/SpecificOngController')

routes.post('/ongs', OngController.create)
routes.get('/ongs', OngController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:incidentId', IncidentController.delete)

routes.get('/ongs/:ongId/incidents', SpecificOngController.index)

module.exports = routes
