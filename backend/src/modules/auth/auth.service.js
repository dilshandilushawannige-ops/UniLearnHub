import bcrypt from "bcryptjs";
import User from "../../models/User.js";
import ApiError from "../../utils/ApiError.js";

const sanitizeUser = (userDoc) => ({
  id: userDoc._id,
  username: userDoc.username,
  email: userDoc.email,
  currentYear: userDoc.currentYear,
  currentSemester: userDoc.currentSemester,
  createdAt: userDoc.createdAt,
  updatedAt: userDoc.updatedAt
});

export const signupUser = async ({ username, email, password, currentYear, currentSemester }) => {
  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail.endsWith("@my.sliit.lk")) {
    throw new ApiError(400, "Only SLIIT campus emails are allowed");
  }

  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser) {
    throw new ApiError(409, "An account with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email: normalizedEmail,
    password: hashedPassword,
    currentYear,
    currentSemester
  });

  return sanitizeUser(user);
};

export const loginUser = async ({ email, password }) => {
  const normalizedEmail = email.trim().toLowerCase();
  const user = await User.findOne({ email: normalizedEmail });

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid email or password");
  }

  return sanitizeUser(user);
};

export const getCurrentUserProfile = async (userId) => {
  const user = await User.findById(userId).select("-password");
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return sanitizeUser(user);
};
