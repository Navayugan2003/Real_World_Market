require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const securityRouter = require("./routes/auth");
const cartRouter = require("./routes/cart");
const productRouter = require("./routes/products");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({limit: "5000000"}));
app.use(bodyParser.urlencoded({extended: true, limit: "5000000"}));
app.use(express.json({limit: "5000000"}));
app.use(express.urlencoded({limit: "5000000"}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUrl = `${dbHost}/${dbName}`;

console.log(`Connecting to MongoDB at ${dbUrl}`);

mongoose
  .connect(dbUrl)
  .then(() => console.log(`Connected to ${dbName} database`))
  .catch((error) => console.error("Error connecting to database:", error));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// CORS
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors({origin: "*"}));

// Routes
app.use("/api/auth", securityRouter);
app.use("/api/cart", cartRouter);
app.use("/api/products", productRouter);
