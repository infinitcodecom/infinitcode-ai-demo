const morgan = require('morgan');
const { NODE_ENV } = require('../config/env');

const format = NODE_ENV === 'production' ? 'combined' : 'dev';

const morganMiddleware = morgan(format, {
  skip: (req, res) => res.statusCode < 400
});

module.exports = {
  morganMiddleware
};