const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
    {
        _id: {
            required: true,
            type: Object
        },
        end_year: {
            required: true,
            type: String
        },
        intensity: {
            required: true,
            type: Number
        },
        sector: {
            required: true,
            type: String
        },
        topic: {
            required: true,
            type: String
        },
        insight: {
            required: true,
            type: String
        },
        url: {
            required: true,
            type: String
        },
        region: {
            required: true,
            type: String
        },
        start_year: {
            required: false,
            type: String
        },
        impact: {
            required: false,
            type: String
        },
        added: {
            required: true,
            type: String
        },
        published: {
            required: true,
            type: String
        },
        country: {
            required: true,
            type: String
        },
        relevance: {
            required: true,
            type: Number
        },
        pestle: {
            required: true,
            type: String
        },
        source: {
            required: true,
            type: String
        },
        title: {
            required: true,
            type: String
        },
        likelihood: {
            required: true,
            type: Number
        }
    }
)


module.exports = mongoose.model('Data', dataSchema)