'use strict';

const setData = (code, message, values) => {
   return {
    'code': code,
    'message': message,
    'results': values  
   }
} 

const setResponse = (data, res) => {
   res.set({
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      "Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTION"
      })
   res.json(data);
   res.end();
}

//Response success
module.exports.success = (values, res) => {
  setResponse(setData(200, 'success' ,values), res);
}