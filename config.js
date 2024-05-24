const mongoose = require("mongoose");
require('dotenv').config();

let mongoDB = process.env.DB_CONNECTION;

module.exports = mongoose.connect(mongoDB);


// mongoose.connect(mongoDB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => {
//     console.error('MongoDB connection error:', err.message, err.stack);
//     process.exit(1);
//   });
  
//   module.exports = mongoose;
