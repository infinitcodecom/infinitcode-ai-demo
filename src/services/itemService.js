const fs = require('fs')
const path = require('path')

let items = [{ id: 1, name: 'Sample Item', description: 'This is a sample item' }]

module.exports = {
	getAllItems: () => {
		return items
	},

	createItem: (itemData) => {
		const newItem = {
			id: Date.now(),
			...itemData,
		}
		items.push(newItem)
		return newItem
	},

	deleteItem: (id) => {
		let removed = false
		for (let i = 0; i < items.length; i++) {
			if (items[i].id === parseInt(id, 10)) {
				items.splice(i, 1)
				removed = true
			}
		}

		const dataFilePath = path.join(__dirname, '../data/items.json')

    console.log(dataFilePath)
		fs.writeFile(dataFilePath, JSON.stringify(items, null, 2), 'utf8', (err) => {
			if (err) {
				console.error(`Failed to persist deletion of item ${id}:`, err)
			}
		})

		return removed
	},
}
