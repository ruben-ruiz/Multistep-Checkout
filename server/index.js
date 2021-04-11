const express = require('express');
const app = express();
const port = '3000';
const path = require('path');

app.use(express.static('public'));

// app.get('/api/checkout', (req, res) => {
//   res.send('hi');
// });
app.get('*', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'))
});

app.listen(port, () => console.log(`server is listening on port ${port}`))