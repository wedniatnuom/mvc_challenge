const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const seedUser = require('./user-data');
const seedBlog = require('./blog-data');
const seedComment = require('./comment-data');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedBlog();
  console.log('\n----- BLOGS SEEDED -----\n');

  await seedComment();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
