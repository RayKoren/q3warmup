
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('team').del()
    .then(function () {
      return Promise.all([
        knex('team').insert({
          id: 1,
          name: 'Pawel'
        }),
        knex('team').insert({
          id: 2,
          name: 'Amanda'
        }),
        knex('team').insert({
          id: 3,
          name: 'Ray'
        }),
        knex('team').insert({
          id: 4,
          name: 'Drewski'
        }),
      ]);
    });
};
