const { User } = require('../models');

const userData =[
    {
      "name": "jeremy",
      "email": "jeremy@gmail.com",
      "password": "password12345",
      "user_id": "1"
    },
    {
      "name": "Kaela",
      "email": "Kaela@gmail.com",
      "password": "password12345",
      "user_id": "2"
    },
    {
      "name": "Jack",
      "email": "jack@gmail.com",
      "password": "password12345",
      "user_id": "3"
    }
  ];

  const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;