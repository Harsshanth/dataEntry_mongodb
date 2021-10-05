const express = require('express')
const router = express.Router()
const db = require('../model/voterCenterModel')

router.get('/', (req, res) => {
    res.render('votercenter')
})

router.post('/',(req, res) => {
    const {constituencyId , centerName , centerId,password } = req.body
    db.create({constituencyId ,  centerName , centerId,password })
    res.redirect('/votercenter')
})

module.exports = router;