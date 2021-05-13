'use strict'

const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const PeopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  
  try{
    //get data from req.body
    const {address, age, name} = JSON.parse(event.body)

    // make a unique id for user 
    const id = uuid();

    // save new record with id to DB
    //mongoDB generates id by itself, for dynamoDB we need to create an id

    const record = new PeopleModel({ id, address, age, name })
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch(e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }
}