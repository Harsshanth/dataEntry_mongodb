const mongoose =  require('mongoose');

async function connect() {
    return await mongoose.connect("mongodb://localhost:27017/dataEntry",{useNewUrlParser: true});
}

module.exports = connect;
