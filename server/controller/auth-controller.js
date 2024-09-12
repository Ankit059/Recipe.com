const User = require("../model/auth-model");
const Recipe = require("../model/recipe-model");

const userLogin = async (req, res) => {
  debugger;

  const { userid, password } = req.body;

  if (!userid || !password) {
    return res.status(400).json({ error: "Missing userid or password" });
  }

  const response = await User.findOne({ userid, password });
  const id = String(response._id);
  const fname = String(response.firstname);
  const lname = String(response.lastname);
  const name = fname+" "+lname;
  // console.log(name);
  
  if (!response) {
    res.status(401).json({ error: "Invalid credentials" });
  } else {
    res.status(200).json({ message: {id, name} });
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

const getAllRecipe = async(req,res) => {

  try {
    const data = await Recipe.find({});

    if(!data){
      return res.status(404).json({ message: 'not found' });
    }
    return res.status(200).json({ message: data });


  } catch (error) {
    return res.status(400).json({ message: error });
  }

}

const getAllRecipeByid = async(req,res) => {

  const {u_id} =  req.body;
  // console.log(u_id)

  try {
    const data = await Recipe.find({u_id});
    // console.log(data)

    if(data.length === 0){
      return res.status(404).json({ message: 'not found' });
    }
    return res.status(200).json({message:data});
  } catch (error) {
    return res.status(400).json({ message: error });
  }

}

const uploadRecipe = async (req, res) => {
  try {
    const { r_name, r_img, r_desc, u_id } = req.body;

    const newRecipe = new Recipe({
      r_name,
      r_img,
      r_desc,
      u_id,
    });
    await newRecipe.save();
    res.status(201).json("Your recipe uploaded!");
  } catch (err) {
    console.log(err);
  }
};

const searchRecipeByName = async(req, res) =>{
  const {name} =  req.body;

  try {
    const data = await Recipe.find({
      r_name: { $regex: `^${name}`, $options: 'i' } // Case-insensitive starts with search
    });

    if(data.length === 0){
      return res.status(404).json({ message: 'not found' });
    }
    return res.status(200).json({message:data});
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}




module.exports = { userLogin, userSignup, ChangePass, getAllRecipe, getAllRecipeByid, searchRecipeByName, uploadRecipe };
