const User = require("../modals/User");
const passwordHash = require("password-hash");
// const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const {email, password} = req.query;
    const user = await User.findOne({email: email});
    if (!user) {
      console.warn("User Does not Exist");
      return res.status(401).send({message: "User Does not Exist"});
    }

    if (passwordHash.verify(password, user.password)) {
      // const accessToken = jwt.sign(
      //   {email: user.email},
      //   process.env.ACCESS_TOKEN_SECRET,
      //   {expiresIn: "15m"}
      // );
      // const refreshToken = jwt.sign(
      //   {email: user.email},
      //   process.env.REFRESH_TOKEN_SECRET,
      //   {expiresIn: "24h"}
      // );

      res.status(200).send({
        message: "Login Successful",
        userInfo: {
          email: user.email,
          userName: user.userName,
          role: user.role,
          team: user.team,
          organization: user.organization,
          token:'b59833c7fc6cb5a9c4872f43b6d1466e8607bdd6f8a04e32a48b29ce69c951fbff82c428555ecc4b23e6cdf2e8259d1ccbcc444731030b1f4dbb8038283ceb8b'
        },
      });
    } else {
      res.status(401).send({message: "Invalid Email or Password"});
    }
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({message: err.message});
  }
}

 const register = async (req, res) => {
  const {email, password, userName, mobileNumber} = req.body;
  const hashedPassword = passwordHash.generate(password);
  const user = new User({
    email: email,
    password: hashedPassword,
    userName: userName,
    mobileNumber: mobileNumber,
  });

  try {
    await user.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}
module.exports = {login, register};
