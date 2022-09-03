const sequelize = require('../config/connection');
const { /* require seed constants from models */ } = require('../models');

// Example consts below that json the data so we can use it
// const characterData = require('./characterData.json');
// const userData = require('./userData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const character of characterData) {
//     await Character.create({
//       ...character,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

  process.exit(0);
};

seedDatabase();
