import express from 'express';
const app = express();
const port = 6060;
app.get('/', (req, res) => {
  res.send('Hello, world!');
  console.log("working")
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
