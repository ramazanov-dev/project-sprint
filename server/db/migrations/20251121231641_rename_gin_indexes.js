

module.exports.up = (knex) =>
  knex.schema.raw(`
    ALTER INDEX card_name_index RENAME TO card_name_gin_index;
    ALTER INDEX card_description_index RENAME TO card_description_gin_index;
  `);

module.exports.down = (knex) =>
  knex.schema.raw(`
    ALTER INDEX card_name_gin_index RENAME TO card_name_index;
    ALTER INDEX card_description_gin_index RENAME TO card_description_index;
  `);
