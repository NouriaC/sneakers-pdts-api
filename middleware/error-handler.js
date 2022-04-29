const { CustomAPIError } = require("../errors/custom-error");

// custom error handler that comes in the next catch block
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something went wrong, try again later" });
};

module.exports = errorHandlerMiddleware;
