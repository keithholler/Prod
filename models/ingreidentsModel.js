const mongoose = require('mongoose');

var ingredientSchema = new mongoose.Schema({
    sku:{
        type:String
    },
    name:{
        type:String
    },
    vendor_id:{
        type:String
    },
    category:{
        type:String
    },
    quality_requirments:{
        type: Number
    }

})

mongoose.model('ingredients',ingredientSchema)