const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js running in the GETUP base image!');
});

app.get('/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.get('/env', (req, res) => {
  res.json({
    nodeVersion: process.version,
    os: process.platform,
    container: process.env.CONTAINER
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});