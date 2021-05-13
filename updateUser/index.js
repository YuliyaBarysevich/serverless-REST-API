'use strict'

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const PeopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try{
    const id = event.pathParameters && event.pathParameters.id;
    const {address, age, name} = JSON.parse(event.body)

    const data = await PeopleModel.update({'id': id}, { address, age, name })

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  }catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
}