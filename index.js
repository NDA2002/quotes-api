const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/quotes', (req, res) => {
  res.json({ quote: "Stay hungry, stay foolish." });
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => console.log(`Running on port ${PORT}`));