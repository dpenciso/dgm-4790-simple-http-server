const express = require('express')
const router = express.Router()

router.get('/api', (req, res, next) => {
    const myObject = {
        name: 'David',
        age: 26,
        children: 1,
    }
    res.json(jsonData)
})

module.exports = router