const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const { validateItem } = require('../middlewares/itemValidator');

router.post('/', validateItem, itemController.createItem);
router.get('/', itemController.getAllItems);
router.delete('/:id', itemController.deleteItem);

module.exports = router;