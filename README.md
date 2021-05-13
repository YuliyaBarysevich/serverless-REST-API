# Lab: AWS: API, Dynamo and Lambda

## Links

1. [root URL to API](https://7hahpd6er6.execute-api.us-east-2.amazonaws.com/)

## Routes

1. POST
    - https://7hahpd6er6.execute-api.us-east-2.amazonaws.com/people
    - INPUT: {"address": "test_city", "age": "test_age", "name": "test_name"}
2. GET
    - https://7hahpd6er6.execute-api.us-east-2.amazonaws.com/people
3. GET/:id
    - https://7hahpd6er6.execute-api.us-east-2.amazonaws.com/people/{ID}
4. PUT/:id
    - https://7hahpd6er6.execute-api.us-east-2.amazonaws.com/people/{ID}
    - INPUT: {"address": "test_city", "age": "test_age", "name": "test_name"}
5. DELETE
    - https://7hahpd6er6.execute-api.us-east-2.amazonaws.com/people/{ID}


## Feature Tasks & Requirements

A single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services.

1. Database: DynamoDB
    - 1 Table required
2. Routing: API Gateway
    - **POST**
    - `/people` - Given a JSON body, inserts a record into the database
       returns an object representing one record, by its id (##)
    - **GET**
      - `/people` - returns an array of objects representing the records in the database
      - `/people/##` - returns an object representing one record, by its id (##)
    - **PUT**
      - `/people/##` - Given a JSON body and an ID (##), updates a record in the database. Returns an object representing one record, by its id (##)
    - **DELETE**
      - `/people/##` - Given an id (##) removes the matching record from the database
     returns an empty object
3. **CRUD Operation Handlers**: Lambda Functions
