const mongoose = require('mongoose');

const faunaSchema = mongoose.Schema({
    name: { type: String },
    nameIlmiah: {type: String},
    descriptions: { type: String },
    short_description: { type: String },
    category: { type: String },
    no: { type: Number},
    photos: [
        {
            data: Buffer,
            contentType: String
        }
    ]
});

module.exports = mongoose.model('fauna', faunaSchema);