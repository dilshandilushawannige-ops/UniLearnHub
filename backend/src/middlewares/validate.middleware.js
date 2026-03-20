import { validationResult } from "express-validator";
import ApiError from "../utils/ApiError.js";

const validate = (req, _res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    const errors = result.array().map((error) => ({
      field: error.path,
      message: error.msg
    }));

    throw new ApiError(400, "Validation failed", errors);
  }

  next();
};

export default validate;
