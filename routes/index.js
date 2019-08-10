
const router = require('express').Router();
const processFile = require('../scripts/processFile');

router.route('/csv').post((req, res) => {
    console.log(req);
    res.send('');
})

module.exports = router;