const Author = require('../models/author.model');

const getAllAuthors = (_, res) => {
    Author.find()
        .then((authors) => res.status(200).json(authors))
        .catch((err) => res.status(400).json(err));
};

const getOneAuthor = (req, res) => {
    Author.findById({ _id: req.params.id })
        .then((author) => res.status(200).json(author))
        .catch((err) => res.status(400).json(err));
};

const insertAuthor = (req, res) => {
    Author.create(req.body)
        .then((author) => res.status(201).json(author))
        .catch((err) => res.status(400).json(err));
};

const updateAuthor = (req, res) => {
    Author.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((author) => res.status(201).json(author))
        .catch((err) => res.status(400).json(err));
};

const deleteAuthor = (req, res) => {
    Author.findByIdAndDelete({ _id: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).json(err));
};

module.exports = {
    getAllAuthors,
    getOneAuthor,
    insertAuthor,
    updateAuthor,
    deleteAuthor,
};