const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Name is required.'],
        minLength: [3, 'Name must be at least three characters.']
    },
}, {timestamps: true});

authorSchema.plugin(uniqueValidator);

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;