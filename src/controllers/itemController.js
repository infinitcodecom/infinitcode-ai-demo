const itemService = require('../services/itemService');

exports.createItem = async (req, res) => {
  try {
    const newItem = await itemService.createItem(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllItems = async (req, res) => {
	try {
		const items = await itemService.getAllItems()
		res.json(items)
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}
}

exports.deleteItem = async (req, res) => {
	try {
		const wasDeleted = itemService.deleteItem(req.params.id)
		if (!wasDeleted) {
			return res.status(404).json({ error: 'Item not found' })
		}
		res.status(204).send()
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}
}
