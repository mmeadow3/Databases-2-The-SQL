
module.exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('User').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('User').insert({email: 'A@A.com', password: "password", age: 25}),
        knex('User').insert({email: 'VB@B.com', password: "password", age: 2}),
        knex('User').insert({email: 'C@C.com', password: "password", age: 100}),
        knex('User').insert({email: 'D@D.net', password: "password", age: 26})
      ]);
    });
  };
