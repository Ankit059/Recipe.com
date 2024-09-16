const mongoose = require('mongoose');

const fav_Schema = new mongoose.Schema({
    f_name: {
        type: String,
        required: true
    },
    f_img: {
        type: String,
        required: true
    }, 
    f_desc: {
        type: String,
        required: true
    },
    fu_id: {
        type: String,
        required: true
    }
    
});

const fav_recipe = mongoose.model('fav_recipe', favSchema);

module.exports = fav_recipe;




