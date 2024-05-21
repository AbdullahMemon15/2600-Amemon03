const mongoose = require("mongoose");
require('dotenv').config();

const uri = process.env.DB_CONNECTION;

module.exports = mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error: ', err));


// module.exports = mongoose.connect(mongoDB);
