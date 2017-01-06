const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.locals.user = req.user;
  //res.locals.authenticated = !req.user.anonymous;
  next();
});

app.get('/', (req, res) => {
  res.send('\n\nHello, world!\n\n');
});

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});