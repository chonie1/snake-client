const net = require('net');
const constants = require('./constants');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({
    host: constants.IP,
    port: constants.PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect',()=>{
    console.log('Successfully connected to game server');
    conn.write('Name: CH');
    // setInterval(()=>conn.write('Move: up'), 50)
    
    
    // setTimeout(()=>{conn.write('Move: left')}, 50)
    // setTimeout(()=>conn.write('Move: right'), 50)
    // setTimeout(()=>conn.write('Move: down'), 50)
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