// const mongoose = require("mongoose");
// require('dotenv').config();

// let mongoDB = process.env.DB_CONNECTION;

// module.exports = mongoose.connect(mongoDB);


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



// const mongoose = require("mongoose");
// require('dotenv').config();

// const uri = process.env.DB_CONNECTION;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (err) {
//     console.error('MongoDB connection error:', err.message, err.stack);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");
require('dotenv').config();

const uri = process.env.DB_CONNECTION;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message, err.stack);
    process.exit(1);
  }
};

module.exports = connectDB;
