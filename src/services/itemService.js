let items = [
  { id: 1, name: 'Sample Item', description: 'This is a sample item' }
];

module.exports = {
  getAllItems: () => {
    return items;
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
		return removed
	},
}
