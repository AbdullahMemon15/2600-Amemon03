const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connection  = require("./config");
const prayerRoutes = require("./routes/prayerRoutes");

dotenv.config();

const app = express();
app.use(express.json());
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

