const Recipe = require('../models/Recipe');
const uniqid = require('uniqid'); 
const create = async function (name, summary, ingredients, preparation, category, prepTime, cookingTime, imageUrl, servings) {
  let id = uniqid()
  let recipe = await new Recipe({id, name, summary, ingredients, preparation, category, prepTime, cookingTime, imageUrl, servings})
  return recipe.save();

};
const getAll = async function () {
  let Recipes = await Recipe.find({}).lean();
  return Recipes;
}

const getSome = async function (category) {
  let Recipes = await Recipe.find({ category }).lean();
  return Recipes;
}
const getOne = async function (id) {
  let recipe = await Recipe.findOne({ _id: id }).lean();

  return recipe;
}

// const updateBookings = async function (RecipeId, bookerId) {
//   let Recipe = await Recipe.findOne({ _id: RecipeId });
//   Recipe.bookings.push(bookerId);
//   return Recipe.save();
// };
// const deleteRecipe = async function (RecipeId) {
//  return await Recipe.deleteOne({_id: RecipeId});
// };

// const updateRecipe =  async function (RecipeId, data) {
//   return Recipe = await Recipe.updateOne({ _id: RecipeId }, data);
// };

module.exports = {
  create,
  getAll,
  getSome,
  getOne,
  // updateBookings,
  // deleteRecipe,
  // updateRecipe,
};