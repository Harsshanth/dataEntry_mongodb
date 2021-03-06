const express = require('express')
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
const swig = require('swig');
app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.use(bodyParser.urlencoded({extended: true}))
const connection = require('./model/connection')
const voterEntryController = require('./router/voterEntryController')
const candidateEntryController = require('./router/candidateEntryController')
const constituencyEntryController = require('./router/constituencyEntryController')
const voterCenterEntryController = require('./router/voterCenterEntryController')
connection()

app.get('/', (req, res) => {
    res.send('Use Url completely')
})
app.use('/voterEntry',voterEntryController)
app.use('/candidateEntry',candidateEntryController)
app.use('/constituencyEntry',constituencyEntryController)
app.use('/votercenter',voterCenterEntryController)


app.listen(3000,() => {
    console.log("Listening in port 3000");
})