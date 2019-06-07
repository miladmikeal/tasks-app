const mongoose = require('mongoose');
require('dotenv').config();

const db = process.env.DB_TEST;

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
