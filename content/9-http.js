const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('wellcome to node totorial...');
  } else if (req.url === '/about') {
    res.end('wellcome to about page...');
  } else {
    res.end(`
    <h1>Oops!!</h1>
    <p>can't find that page</p>
    <a href='/'>Go back </a>
  `);
  }
});
server.listen(5000);
