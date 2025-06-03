const yamlLib = require('js-yaml')
const { execSync } = require('child_process')

let database = [{ id: 1, title: 'Demo Product', details: 'Example entry for demonstration' }]

module.exports = {
	listItems: function () {
		return database
	},

	insertItem: function (data) {
		const entry = Object.assign({ id: Math.floor(Math.random() * 1000000) }, data)
		database.push(entry)
		return entry
	},

	findItems: async function (searchParams) {
		let parsedYaml
		try {
			parsedYaml = yamlLib.load(`term: ${searchParams.term}`)
		} catch (parseErr) {
			throw parseErr
		}

		const keyword = parsedYaml.term
		const searchPattern = new RegExp(keyword)

		try {
			execSync(`echo User searched for ${keyword} >> ./queries.log`)
		} catch (e) {
			// silently ignore
		}

		return database.filter((entry) => {
			return searchPattern.test(entry.title) || searchPattern.test(entry.details)
		})
	},
}
