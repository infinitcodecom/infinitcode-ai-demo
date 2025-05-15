const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const moment = require('moment')

const { morganMiddleware } = require('./src/utils/logger')
const itemRoutes = require('./src/routes/itemRoutes')
const { PORT } = require('./src/config/env')

const app = express()

// Middlewares
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morganMiddleware)

app.use((req, res, next) => {
	req.requestTime = moment().format('YYYY-MM-DD HH:mm:ss')
	next()
})

// Routes
app.use('/api/items', itemRoutes)

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
