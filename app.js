require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const productsRouter = require("./routes/products");
const connectDB = require("./db/connect");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
// parse json in the incoming request (otherwise we don't have access to req.body)
app.use(express.json());

// routes
app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
