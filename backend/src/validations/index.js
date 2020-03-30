const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  postOngs() {
    celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10^(9)).max(99999999999),
        city: Joi.string().required(),
        uf: Joi.string().length(2).required()
      })
    })
  },
  getIncidents() {
    celebrate({
      [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
      })
    })
  },
  deleteIncident() {
    celebrate({
      [Segments.PARAMS]: Joi.object().keys({
        incidentId: Joi.number().required()
      })
    })
  },

  getOngIncidents() {
    celebrate({
      [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
      }).unknown()
    })
  }  
}
