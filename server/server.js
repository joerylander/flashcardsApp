const express = require('express');
const app = express();
const port = 5050;
const cors = require('cors');
// const path = require('path');
const db = require('./db');

app.use(cors());
const flashcards = db.flashcards;

// app.use(express.static('client/public'));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/client/public/index.html'));
// })

app.get('/api/flashcards', (req, res) => {
  res.setHeader('Location', '/api/flashcards');
  res.json(flashcards);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
