const mongoose = require('mongoose')


const voteSchema = new mongoose.Schema({
    candidateName: {
        type: String
    },
    constituencyId: {
        type: String
    },
    vote: {
        type: Number
    },
    party: {
        type: String
    },
    candidateId : {
        type: String
    }

})

const Canditate = mongoose.model('Canditate',voteSchema);
module.exports = Canditate;