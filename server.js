const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/client')));

app.listen(PORT, function() {
  console.log('listening on port 3000')
})