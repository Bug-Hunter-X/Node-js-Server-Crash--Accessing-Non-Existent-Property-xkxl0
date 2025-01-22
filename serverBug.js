const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received');
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Simulate an error by trying to access a non-existent property
console.log(server.nonExistentProperty);