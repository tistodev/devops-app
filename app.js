const http = require('http');

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hello batistão 🚀');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`App running on port ${port}`);
});
