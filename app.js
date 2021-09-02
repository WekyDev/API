const express = require('express');

require('dotenv').config();

const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');

// Mongoose
mongoose.connect(process.env.mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.log(err);
});

app.use(bodyparser.json());
// Handler
app.use(cors({ exposedHeaders: ['Authorisation'] }));
const load = async () => {
  const files = glob.sync('./src/Routes/*.js');
  files.forEach((route) => {
    const file = require(`${path.resolve(route)}`);
    app.use(`${file.endpoint}`, file.router);
  });
};

app.use(express.static('public'));
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/stylesheet.css', (_req, res) => {
  res.sendFile(process.cwd() + '/stylesheet.css')
})
load();
app.listen(3000, function () {
  console.log(`Weky API : ${3000}`);
});
