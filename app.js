const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connection  = require("./config");
const prayerRoutes = require("./routes/prayerRoutes");
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: ["https://2600-amemon03.vercel.app"], // Include full URL with protocol
  methods: ["POST", "GET", "PUT", "DELETE"], // Allow all relevant methods
  credentials: true
}));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.use("/api/prayerTimes", prayerRoutes)

connection.then(()=>{
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });
app.get('/', (req, res) => {
  res.send('Welcome to the Prayer Time App API ');
});