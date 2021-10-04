const mongoose = require('mongoose');

const userVerifySchema = new mongoose.Schema({
    constituencyId: {
        type: String
    },
    aadhaarNumber: {
        type: String
    },
    voterId: {
        type: String
    },
    voteStatus: {
        type: Boolean
    },
    
    pin: {
        type: String
    }
});

const Voter = mongoose.model('Voter',userVerifySchema);
module.exports = Voter;