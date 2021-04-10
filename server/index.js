const express = require('express');
const app = express();
const port = '3000';

app.use(express.static('public'));

app.get('/api/checkout', (req, res) => {
  res.send('hi');
});

app.listen(port, () => console.log(`server is listening on port ${port}`))