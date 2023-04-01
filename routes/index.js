const {Router} = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/', (req, res) => res.send('I AM GROOT!'))
router.post('/addemployee', controllers.addEmployee);

module.exports = router;