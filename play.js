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
  
  //message handling on the server
  conn.on('data',(data) => {
    console.log(data.toString());
  });

  return conn;
};

console.log('Connecting ...');
connect();