const User = require("../model/auth-model");

const userLogin = async (req, res) => {
  debugger;

  const { userid, password } = req.body;

  if (!userid || !password) {
    return res.status(400).json({ error: "Missing userid or password" });
  }

  const data = await User.findOne({ userid, password });
  // console.log(data)

  if (!data) {
    res.status(401).json({ error: "Invalid credentials" });
  } else {
    res.status(200).json({ message: "Login successful" });
  }
};

const userSignup = async (req, res) => {
  debugger;
  try {
    const { userid, firstname, lastname, email, password, confirmPass, type } =
      req.body;

    if (password == confirmPass) {
      const newUser = new User({
        userid,
        firstname,
        lastname,
        email,
        password,
        confirmPass,
        type,
      });
      await newUser.save();
      res.status(201).json("You are signed up!");
    } else {
      res.status(400).json("password and confirm password are not same");
    }
  } catch (err) {
    console.log(err);
  }
};

// app.patch('/api/user/:id', (req, res) => {
//     const { id } = req.params;
//     const updates = req.body;

//     if (id != userProfile.id) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Apply updates to the user profile
//     userProfile = { ...userProfile, ...updates };

//     res.status(200).json(userProfile);
//   });

const ChangePass = (req, res) => {
    const { _id } = req.params;
    const updates = req.body;

    const data = User.findOne({_id:_id});

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    // Apply updates to the user profile
    userProfile = { ...User, ...updates };

    res.status(200).json(userProfile);
};

module.exports = { userLogin, userSignup, ChangePass };
