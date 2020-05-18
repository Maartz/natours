const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from App.js',
    app: 'Natours'
  });
});

app.post('/', (req, res) => {
  res.send('You cannot POST to this endpoint')
})

const PORT = process.env.PORT || 7777

app.listen(PORT, () => {
  console.log(`🚀🚀 App running on port ${PORT}...`);
})