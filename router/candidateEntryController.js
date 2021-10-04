const express = require('express')
const router = express.Router()
const db = require('../model/candidateListModel')

router.get('/', (req, res) => {
    res.render('candidateEntry')
})

router.post('/',(req, res) => {
    const {constituencyId , party , candidateName} = req.body
    db.create({constituencyId , party , candidateName , vote: 0})
    res.redirect('/candidateEntry')
})

module.exports = router;