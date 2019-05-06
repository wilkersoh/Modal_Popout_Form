const mongoose = require('mongoose');

const revenueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'This title is required'
    },
    condition: {
        type: String,
    },
    revType: {
        type: String,
        required: 'This revType is required'
    },
    addNewType: {
        type: String,
        required: 'This newType is required'
    },
    rule: {
        type: String,
    },
    revenue: {
        type: Number,
        required: 'Please provide revenue'
    },
    createAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('ToInvolve', revenueSchema);