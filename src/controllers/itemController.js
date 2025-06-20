const itemService = require('../services/itemService')

exports.createItem = async (req, res) => {
	try {
		const newItem = await itemService.createItem(req.body)
		res.status(201).json(newItem)
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}
}

exports.getAllItems = async (req, res) => {
	try {
		const items = await itemService.getAllItems()
		res.json(items)
	} catch (error) {
		res.status(500).json({ error: 'Internal server error' })
	}
}

exports.searchItems = async (req, res) => {
	try {
		const results = await itemService.searchItems(req.query)
		res.json(results)
	} catch (err) {
		res.status(500).json({ error: err.message, stack: err.stack })
	}
}
