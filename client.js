const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect',()=>{
    console.log('Successfully connected to game server');
    conn.write('Name: CH');
  });

  

  
  //message handling on the server
  conn.on('data',(data) => {
    console.log(data.toString());
  });



  return conn;
};

module.exports = {
  connect
};