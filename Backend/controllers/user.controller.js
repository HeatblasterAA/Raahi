const userModel = require("../models/user.model");
const userService = require("../services/user.service");
//we validate using
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");






module.exports.registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(23400).json({ errors: errors.array() });
      return res.status(400).json({success: false, message: "Invalid input data" });
    }

    const { fullname, email, password } = req.body;

    const ifUserAlreadyExist = await userModel.findOne({ email });

    if (ifUserAlreadyExist) {
      return res.status(400).json({success: false, message: "User already exist" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({success: true, message: "Registration successful", token, user });
  } catch (error) {
    console.log("Registration error:", error);
    res.status(500).json({success: false, message: "Registration failed" });
  }
  
};



module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Invalid input data" });
  }

  const { email, password } = req.body;
  //We check is user exists with this email and password.
  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = user.generateAuthToken();
  res.cookie("token", token);
  res.status(200).json({message: "Login successful", token, user });
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blacklistTokenModel.create({ token });

  res.status(200).json({ message: "Logged out" });
};
