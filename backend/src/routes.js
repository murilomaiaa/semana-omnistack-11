const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate')

const routes = express.Router()

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const SpecificOngController = require('./controllers/SpecificOngController')
const SessionController = require('./controllers/SessionController')

const Validation = require('./validations')

routes.post('/sessions', SessionController.create)

// validation folder can be created to
// decouple the code
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required().min(10^(9)).max(99999999999),
    city: Joi.string().required(),
    uf: Joi.string().length(2).required()
  })
}),OngController.create)
routes.get('/ongs', OngController.index)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}),IncidentController.index)
routes.delete('/incidents/:incidentId',celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    incidentId: Joi.number().required()
  })
}), IncidentController.delete)


routes.get('/ongs/:ongId/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}),SpecificOngController.index)

module.exports = routes
