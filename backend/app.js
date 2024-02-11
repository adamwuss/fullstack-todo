import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password') {
    res.status(200).json({ success: true, message: 'Login success' });
  } else {
    res.status(401).json({ success: false, message: 'Incorrect login or password' });
  }
});

app.listen(port, () => {
  console.log(`Server listening: ${port}`);
});
