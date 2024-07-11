const mongoose = require('mongoose');

const floraSchema = mongoose.Schema({
    name: { type: String },
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

module.exports = mongoose.model('flora', floraSchema);