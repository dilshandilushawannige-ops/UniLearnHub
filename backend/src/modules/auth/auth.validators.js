import { body } from "express-validator";

const sliitEmailValidator = (value) => {
  const trimmedValue = value.trim().toLowerCase();
  if (!trimmedValue.endsWith("@my.sliit.lk")) {
    throw new Error("Only SLIIT campus emails are allowed");
  }
  return true;
};

export const signupValidator = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("Username must be between 3 and 50 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email")
    .custom(sliitEmailValidator),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("currentYear")
    .notEmpty()
    .withMessage("Current year is required")
    .isInt({ min: 1, max: 4 })
    .withMessage("Current year must be between 1 and 4")
    .toInt(),
  body("currentSemester")
    .notEmpty()
    .withMessage("Current semester is required")
    .isInt({ min: 1, max: 2 })
    .withMessage("Current semester must be between 1 and 2")
    .toInt()
];

export const loginValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
];
