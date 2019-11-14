const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, './dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

const thePort = process.env.PORT || 8080;
app.listen(thePort, () => {
  console.log(`the sever is running on port: ${thePort}`);
});
