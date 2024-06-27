require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, title: "Why don’t scientists trust atoms?", content: "Because they make up everything!" },
    { id: 2, title: "How does a penguin build its house?", content: "Igloos it together." },
    { id: 3, title: "Why don’t skeletons fight each other?", content: "They don’t have the guts." },
    { id: 4, title: "What do you call fake spaghetti?", content: "An impasta." },
    { id: 5, title: "Why don’t some couples go to the gym?", content: "Because some relationships don’t work out." },
    { id: 6, title: "What do you call a fish with no eyes?", content: "A fsh." },
    { id: 7, title: "What’s orange and sounds like a parrot?", content: "A carrot." },
    { id: 8, title: "Why was the math book sad?", content: "It had too many problems." },
    { id: 9, title: "Why can’t you hear a pterodactyl go to the bathroom?", content: "Because the P is silent." },
    { id: 10, title: "What do you call cheese that isn't yours?", content: "Nacho cheese." }
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
