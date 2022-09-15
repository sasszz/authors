const express = require('express');
const authorRouter = express.Router();
const { getAllAuthors, getOneAuthor, insertAuthor, updateAuthor, deleteAuthor } = require('../controllers/author.controller')

authorRouter.route('/')
    .get(getAllAuthors)
    .post(insertAuthor);

authorRouter.route('/:id')
    .get(getOneAuthor)
    .put(updateAuthor)
    .delete(deleteAuthor);

module.exports = authorRouter;