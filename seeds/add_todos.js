
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Todo').del()
    .then(function () {
      return Promise.all([
        knex('Todo').insert({item: "Buy Milk", isComplete: true, userId: 100})
      ]);
    });
};
