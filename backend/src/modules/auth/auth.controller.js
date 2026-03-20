import asyncHandler from "../../utils/asyncHandler.js";
import generateToken from "../../utils/generateToken.js";
import { signupUser, loginUser, getCurrentUserProfile } from "./auth.service.js";

export const signup = asyncHandler(async (req, res) => {
  const user = await signupUser(req.body);

  res.status(201).json({
    success: true,
    message: "Account created successfully",
    user
  });
});

export const login = asyncHandler(async (req, res) => {
  const user = await loginUser(req.body);
  const token = generateToken({ userId: user.id });

  res.status(200).json({
    success: true,
    message: "Login successful",
    token,
    user
  });
});

export const me = asyncHandler(async (req, res) => {
  const user = await getCurrentUserProfile(req.user._id);

  res.status(200).json({
    success: true,
    user
  });
});
