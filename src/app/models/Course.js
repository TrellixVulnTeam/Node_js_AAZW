const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    slug: { type: String, slug: 'name', unique: true},
    imageURL: { type: String },
    videoID: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', Course);