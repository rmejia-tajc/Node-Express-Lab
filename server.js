// import the express package
const express = require('express');

const postsRouter = require('./posts/posts-router.js');

// creates the server / creates an express application using the express module
const server = express();

//middleware
server.use(express.json());

server.use('./api/post', postsRouter); // this only runs if the url has /api/post in it


server.get('/', async (req, res) => {
    res.send(`
      <h2>TEST Posts API</h2>
      <p>Welcome to the TEST Posts API</p>
    `);
  });




// export default server; ES2015 Modules
module.exports = server;