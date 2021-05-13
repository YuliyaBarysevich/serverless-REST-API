'use strict'

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  'id': String,
  'address': String,
  'age': String,
  'name': String
})

module.exports = dynamoose.model('peopleData', peopleSchema)