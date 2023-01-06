const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const init = require('./routes/init');


app.use(express.json());

app.use('/init', init);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
