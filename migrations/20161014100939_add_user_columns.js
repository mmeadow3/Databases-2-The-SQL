"use strict";

module.exports.up = function(knex, Promise) {
  return knex.schema.createTable("User", (table) => {
    table.increments();
    table.string("email").unique();
    table.string("password");
    table.integer("age");
    table.timestamps();
  })
};

module.exports.down = function(knex, Promise) {
  return knex.schema.dropTable("User");
};

//////////did not work properly, had to remake migration
