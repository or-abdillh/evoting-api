const mysql = require('mysql');

const conn = mysql.createConnection({
   host: 'sql6.freemysqlhosting.net',
   user: 'sql6437268',
   password: 'd2UIABEMSu',
   database: 'sql6437268'
})

conn.connect( err => {
   if ( err ) throw err;
   console.log('MySql connected !!')
})

module.exports = conn;