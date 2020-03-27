
exports.up = (knex) => (
  knex.schema.createTable('ongs', table =>{
    table.string('ongId').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('whatsapp').notNullable()
    table.string('city').notNullable()
    table.string('uf', 2).notNullable()
  })
);

exports.down = (knex) => (
  knex.scema.dropTable('ongs')
);
