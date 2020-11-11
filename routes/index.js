const express = require('express')
const router = express.Router()

router.get('/', (eq, res) => {
    res.render('index')
})




module.exports = router