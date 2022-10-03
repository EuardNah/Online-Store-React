require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const models = require("./models/model");
const cors = require("../server/node_modules/cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const PORT = process.env.PORT || 5000;
const path = require("path");


const app = express();
app.use(cors({
    origin: "http://localhost:3000",
}));
// app.use(function (req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Methods", "Get, POST");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "X-Requested-With,content-type"
//     );
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     next();
//   });
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorHandler);

// app.get('/',( req  ,res ) => {
//     res.status(200).json({message: 'WORKING'})
// })



const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
