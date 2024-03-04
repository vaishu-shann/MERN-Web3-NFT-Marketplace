
const express = require("express")
const cors = require('cors');
const dotenv = require("dotenv").config();
var bodyParser = require('body-parser');
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const multer = require('multer');
connectDb()
const app = express();
const port =process.env.SERVER_PORT || 5000; 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(errorHandler)
app.use("/api/users",require("./routes/profile.route"));
app.use("/api/nft",require("./routes/nft.route"));
app.use("/api/collection",require("./routes/collection.route"));
app.use("/api",require("./routes/shop.route"))
app.listen(port, () => {
    console.log(`Backend Server running ${port} 🎉`);
  });