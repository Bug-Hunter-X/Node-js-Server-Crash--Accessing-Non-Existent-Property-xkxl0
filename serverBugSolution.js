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

//Check if property exists before accessing
if (server.hasOwnProperty('nonExistentProperty')) {
  console.log(server.nonExistentProperty);
} else {
  console.log('Property does not exist.');
}
//More robust approach using try...catch
try {
  console.log(server.nonExistentProperty);
} catch (error) {
  console.error('Error accessing property:', error);
}
