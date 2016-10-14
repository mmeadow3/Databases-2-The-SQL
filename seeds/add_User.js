
module.exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('User').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('User').insert({email: 'A@A.com', password: "password", age: 25})
      ]);
    });
  };
