const http = require('http');
const port = process.env.PORT || 3000;

const requestListener = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', message: 'Backend running' }));
};

const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
