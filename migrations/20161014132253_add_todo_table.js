"use strict";

module.exports.up = function(knex, Promise) {
  return knex.schema.createTable("Todo", (table) => {
    table.increments().primary();
    table.string("item");
    table.boolean("isComplete");
    table.integer("userId").references('id').inTable('User');
  })
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTable("Todo");
};