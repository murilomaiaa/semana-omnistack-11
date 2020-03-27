
exports.up = knex => (
  knex.schema.createTable('incidents', table => {
    table.increments('incidentsId').primary()

    table.string('title').notNullable()
    table.string('description').notNullable()
    table.string('value').notNullable()

    table.string('ongId').notNullable()
    table.foreign('ongId')
      .references('ongId')
      .inTable('ongs')
  })
);

exports.down = knex => (
  knex.scema.dropTable('incidents')
);
