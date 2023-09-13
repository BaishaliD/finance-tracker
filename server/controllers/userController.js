const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const JWT_SECRET = "mysecretcode";

const signinController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Invalid field!" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User doesn't exist!" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      JWT_SECRET,
      { expiresIn: "4h" }
    );
    res.status(200).json({ result: user, token });
  } catch (err) {
    console.log("Error in signin", err);
  }
};

const signupController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!email || !name || !password || password.length <= 6) {
      return res.status(400).json({ message: "Invalid field!" });
    }
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ name, email, password: hashedPassword });
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      JWT_SECRET,
      { expiresIn: "4h" }
    );
    res.status(200).json({ result, token });
  } catch (err) {
    console.log("Error in signup", err);
  }
};

module.exports = {
  signinController,
  signupController,
};
