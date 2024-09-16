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

const ChangePass = async(req, res) => {
    // const  _id  = req.body;
    const {userid, newPassword} = req.body;
    // console.log(userid);
    // console.log(password);

    if (!newPassword) {
      return res.status(400).json({ error: 'Please provide new password' });
    }

    const user = await User.findOne({userid:userid});
    if(!user){
      return res.status(404).json({message:"not found"})
    }

    if(user.password === newPassword){
      return res.status(404).json({message:"You have provide the old password!"})
    }
    user.password = newPassword;
    await user.save();

    return res.status(200).json({message:"updated"})
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

// const addFavRecipe = async (req, res) => {
//   debugger;
//   try {
//     const { userid, firstname, lastname, email, password, confirmPass, type } =
//       req.body;

//     if (password == confirmPass) {
//       const newUser = new User({
//         userid,
//         firstname,
//         lastname,
//         email,
//         password,
//         confirmPass,
//         type,
//       });
//       await newUser.save();
//       res.status(201).json("You are signed up!");
//     } else {
//       res.status(400).json("password and confirm password are not same");
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };


module.exports = { userLogin, userSignup, ChangePass, getAllRecipe, getAllRecipeByid, searchRecipeByName, uploadRecipe };
