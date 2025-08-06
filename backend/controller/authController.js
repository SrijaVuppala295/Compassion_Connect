const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const secretKey = process.env.JWT_SECRET;

const signup = async (req, res) => {
  const { name, email, password, role, picture } = req.body;

  try {
    //if existing user
    const present = await User.findOne({ email });
    if (present) {
      return res.status(400).json({ error: "email already registered" });
    }

    //hash the password
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedpassword,
      role,
      picture,
    });
    const token = jwt.sign({ id: user._id, role: user.role }, secretKey, {
      expiresIn: "7d",
    });

    res
      .status(201)
      .json({
        message: "User Registered Successfully",
        user: { id: user._id, name: user.name, role: user.role },
        token,
      });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "No such email found" });
    }

    //compare password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    const token = jwt.sign({ id: user._id, role: user.role }, secretKey, {
      expiresIn: "7d",
    });

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (e) {
    res.status(500).json({error:e.message});

  }
};

module.exports = {signup,login};