'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
const FileManager = require('./src/FileManager');
const fm = new FileManager();


server.connection({
  host: '0.0.0.0',
  port: 8080
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    return reply('Hello world');
  }
});
server.route({
  method: 'GET',
  path: '/files',
  handler: (request, reply) => {
    return fm.list('./filesystem')
      .then(data => reply(data))
      .catch(err => console.log(err));
    //return reply(list);
  }
});

server.start((err) => {
  if(err)
    throw err;
  console.log("Server running at: " + server.info.uri);
});
