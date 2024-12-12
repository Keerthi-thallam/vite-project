const Signup = require("../model/signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Secret = "keer8@";
const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await Signup.findOne({ email: email });
    const token = await jwt.sign({ userId: login._id }, Secret, {
      expiresIn: "30h",
    });
    if (!login || !(await bcrypt.compare(password, login.password))) {
      res.status(400).json({ message: "Invalid email or password" });
    } else {
      const token = await jwt.sign({ userId: login._id }, Secret, {
        expiresIn: "30h",
      });
      res.status(200).json({ message: "User login successful", token });
      console.log(token);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Login };
