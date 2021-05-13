'use strict'

const dynamoose = require('dynamoose');
const PeopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try{
    const id = event.pathParameters && event.pathParameters.id
    await PeopleModel.delete(id)

    return{
      statusCode: 200,
      response:'user was deleted'
    }

  } catch (e) {
    return{
      statusCode: 500,
      response: e.messgae
    }

  }
}