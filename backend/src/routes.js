const express = require('express');

const routes = express.Router()

const validations = require('./validations')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const SpecificOngController = require('./controllers/SpecificOngController')
const SessionController = require('./controllers/SessionController')

routes.post('/sessions', SessionController.create)

routes.post('/ongs',
  validations.postOngs,
  OngController.create
)
routes.get('/ongs', OngController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents',
  validations.getIncidents,
  IncidentController.index
)
routes.delete('/incidents/:incidentId',
  validations.deleteIncident,
  IncidentController.delete
)


routes.get('/ongs/:ongId/incidents',
  validations.getOngIncidents,
  SpecificOngController.index
)

module.exports = routes
