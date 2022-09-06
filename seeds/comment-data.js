const { Comment } = require('../models');

const commentData = [
    {
        "user_id": "1",
        "blog_id": "1",
        "id": "1",
        "date_created": "09/03/2022",
        "comment_text": "Testing comment id 1 1"
        
        
    },
    {
        "user_id": "1",
        "blog_id": "2",
        "id": "2",
        "date_created": "09/03/2022",
        "comment_text": "Testing comment id 1 2"
    },
    {
        "user_id": "1",
        "blog_id": "3",
        "id": "3",
        "date_created": "09/03/2022",
        "comment_text": "Testing comment id 1 3"
    },
    {
        "user_id": "2",
        "blog_id": "1",
        "id": "4",
        "date_created": "09/03/2022",
        "comment_text": "Testing comment id 2 1"
    },
    {
        "user_id": "2",
        "blog_id": "2",
        "id": "5",
        "date_created": "09/03/2022",
        "comment_text": "Testing comment id 2 2"
    },
    {
        "user_id": "2",
        "blog_id": "3",
        "id": "6",
        "date_created": "09/03/2022",
        "comment_text": "Testing comment id 2 3"
    },
    {
        "user_id": "3",
        "blog_id": "1",
        "id": "7",
        "date_created": "09/03/2022",
        "comment_text": "Testing comment id 3 1"
    },
    {
        "user_id": "3",
        "blog_id": "2",
        "id": "8",
        "date_created": "09/03/2022",
        "comment_text": "Testing comment id 3 2"
    },
    {
        "user_id": "3",
        "blog_id": "3",
        "id": "9",
        "date_created": "09/03/2022",
        "comment_text": "Testing comment id 3 3"
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;