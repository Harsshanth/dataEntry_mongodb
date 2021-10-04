const mongoose = require('mongoose');

const constituencySchema = new mongoose.Schema({
    constituencyId: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String,
    }
});

const Constituency = mongoose.model('Constituency',constituencySchema);
module.exports = Constituency;