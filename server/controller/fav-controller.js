const Fav_recipe = require("../model/fav-model")

const addFavRecipe = async (req, res) => {
    debugger;
    try {
      const { f_name, f_img, f_desc, fu_id } = req.body;
       
      const newFav = new Fav_recipe({
        f_name,
        f_img,
        f_desc,
        fu_id
      });
     
        await newFav.save();
        res.status(201).json("This recipe is added!");
    } catch (err) {
      console.log(err);
    }
};

const getAllFavByid = async(req,res) => {

    const {fu_id} =  req.body;
    // console.log(u_id)
  
    try {
      const data = await Fav_recipe.find({fu_id});
      // console.log(data)
  
      if(data.length === 0){
        return res.status(404).json({ message: 'You donot have favbourite recipe!' });
      }
      return res.status(200).json({message:data});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  
  }
  
module.exports = { addFavRecipe, getAllFavByid };
