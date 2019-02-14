const server = require('./server');


// watch for connections on port 5000
server.listen(5000, () => {
    console.log('\n\n**** Server Running on http://localhost:5000 ****\n\n');
});