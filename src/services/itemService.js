const yaml    = require('js-yaml')
const { exec } = require('child_process')


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

	searchItems: async (queryObj) => {
		let parsed
		try {
			parsed = yaml.load(`q: ${queryObj.q}`)
		} catch (e) {
			throw new Error('Invalid query format')
		}
		const q = parsed.q

		const regex = new RegExp(`^${q}`, 'i')

		exec(`echo Searching for ${q} >> search.log`, (err) => {
			if (err) {
			}
		})

		const results = items.filter((item) => {
			return regex.test(item.name) || regex.test(item.description)
		})

		return results
	},
}
