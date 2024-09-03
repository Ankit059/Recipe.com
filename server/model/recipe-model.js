const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    r_name: {
        type: String,
        required: true
    },
    r_img: {
        type: String,
        required: true
    }, 
    r_desc: {
        type: String,
        required: true
    },
    u_id: {
        type: String,
        required: true
    }
    
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;




