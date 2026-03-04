import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Joi from "joi";
import User from "../models/user.model.js";
import Wallet from "../models/wallet.model.js";
import asyncHandler from "../middleware/asyncHandler.js";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES
  });

export const register = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  });

  const { name, email, password } = await schema.validateAsync(req.body);

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("Email already registered");
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  await Wallet.create({ user: user._id });

  const token = generateToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict"
  });

  res.status(201).json({
    success: true,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
});

export const login = asyncHandler(async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

  const { email, password } = await schema.validateAsync(req.body);

  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  const token = generateToken(user._id);

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict"
  });

  res.json({
    success: true,
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    }
  });
});

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});
