const express = require('express')
const router = express.Router()
const db = require('../model/voterListModel')

router.get('/', (req, res) => {
    res.render('voterEntry')
})

router.post('/',(req, res) => {
    const {voterId , aadhaarNumber , pin , constituencyId} = req.body
    db.create({voterId , aadhaarNumber , pin , constituencyId , voteStatus: false})
    res.redirect('/voterEntry')
})

module.exports = router;