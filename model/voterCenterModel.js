const mongoose = require('mongoose');

const voterCenterSchema = new mongoose.Schema({
    constituencyId: {
        type: String
    },
    
    centerName: {
        type: String,
    },
    centerId: {
        type: String
    },
    password: {
        type: String
    }
});

const VoterCenter = mongoose.model('VoterCenter',voterCenterSchema);
module.exports = VoterCenter;