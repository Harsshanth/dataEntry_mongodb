const express = require('express')
const router = express.Router()
const db = require('../model/constituencyListModel')

router.get('/', (req, res) => {
    res.render('constituencyEntry')
})

router.post('/',(req, res) => {
    const {constituencyId , name , password} = req.body
    db.create({constituencyId ,  name })
    res.redirect('/constituencyEntry')
})

module.exports = router;