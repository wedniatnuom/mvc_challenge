const router = require("express").Router();
const { User } = require("../../models");

// Validate login credentials
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      console.log("incorrect user data");
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    const validPassword = (await userData.password) === req.body.password;
    if (!validPassword) {
      console.log("incorrect password");
      res.status(400).json({ message: "incorrect passwor, try again" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log("logged in");
      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log("error");
    res.status(400).json(err);
  }
});

router.post('/signup', (req, res) => {
  try {
    const newUser = User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(newUser)
  } catch (err) {
    res.status(400).json(err);
  };
});

module.exports = router;
