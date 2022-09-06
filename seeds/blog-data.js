const { Blog } = require('../models');

const blogData = [
    {
        "id": "1",
        "title": "Test blog #1",
        "date_created": "09/03/2022",
        "blog_data": "This is a test of blog seeding #1",
        "user_id": "1"
    },
    {
        "id": "2",
        "title": "Test blog #2",
        "date_created": "09/03/2022",
        "blog_data": "This is a test of blog seeding #2",
        "user_id": "2"
    },
    {
        "id": "3",
        "title": "Test blog #3",
        "date_created": "09/03/2022",
        "blog_data": "This is a test of blog seeding #3",
        "user_id": "3"
    }
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;