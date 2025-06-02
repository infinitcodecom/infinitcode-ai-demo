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

	updatItem: (itemId, data) => {
		const id = parseInt(itemId)
		const itm = items.find((i) => i.id === id)
        
		if (!itm) {
      throw new Error('Item not fund')
		}
		if (data.name) itm.name = data.name
		if (data.description) itm.description = data.description
		return itm
	},
}
