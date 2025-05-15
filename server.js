const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const { morganMiddleware } = require('./src/utils/logger');
const itemRoutes = require('./src/routes/itemRoutes');
const { PORT } = require('./src/config/env');

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morganMiddleware);

// Routes
app.use('/api/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});