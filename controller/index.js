'use-strict'

const conn = require('../connection');
const response = require('../response')

module.exports.index = (req, res) => {
   response.success('API is Work !!', res)
}