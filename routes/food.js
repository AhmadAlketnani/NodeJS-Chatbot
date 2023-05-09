const { Router } = require('express')
const { foodController } = require('../controllers')

const router=Router();

router.get('/getFood', foodController.getFood);

module.exports = router;