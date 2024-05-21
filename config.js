const mongoose = require("mongoose");
require('dotenv').config();

// let mongoDB = process.env.DB_CONNECTION;

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error: ', err));


module.exports = mongoose.connect(mongoDB);
