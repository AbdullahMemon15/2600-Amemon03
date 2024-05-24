const mongoose = require("mongoose");
require('dotenv').config();

console.log('DB_CONNECTION:', process.env.DB_CONNECTION); // Log to ensure it's loaded

let mongoDB = process.env.DB_CONNECTION;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.error('MongoDB connection error: ', err.message);
});

module.exports = mongoose;