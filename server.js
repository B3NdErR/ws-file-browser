'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
      return reply('Hello world');
  }
});

server.start((err) => {
  if(err)
    throw err;
  console.log("Server running at: " + server.info.uri);
});
