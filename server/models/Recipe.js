const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
  },
  summary: {
    type: String,
    required: true,
    minlength: 10,

  },
  ingredients: {
    type: String,
    required: true,
  },
  preparation: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  prepTime: {
    type: String,
    required: true,
  },
  cookingTime: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  servings: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },

});
module.exports = mongoose.model('Recipe', recipeSchema);