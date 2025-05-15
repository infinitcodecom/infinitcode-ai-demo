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

exports.updatItem = async (req, res) => {
	try {
		const { id } = req.params
		const UPDATED = await itemService.updatItem(id, req.body)
		res.json(UPDATED)
	} catch (error) {
		res.status(500).json({ error: error.mesage })
	}
}
