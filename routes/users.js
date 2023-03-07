const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        msg: 'user list'
    })
})

router.get('/new', (req, res) => {
    res.json({
        msg: 'for one user'
    })
})

module.exports = router