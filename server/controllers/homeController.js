const router = require('express').Router();
const recipeService = require('../services/recipeService');
const authService = require('../services/authService');



router.get('/recipes/getAll', async (req, res) => {
  const recipes = await recipeService.getAll()
  res.send(recipes)

});

router.post('/register', async (req, res) => {
  let email = req.body.email;
  let password = req.body.password
  const user = await authService.register(email, password)
    .then(userData => res.send(userData))
    .catch(err => {
      return res.status(404).json('invalid')
    })

});
router.post('/login', async (req, res) => {
  let email = req.body.email;
  let password = req.body.password
  const user = await authService.login(email, password)
    .then(userData => res.send(userData))
    .catch(err => {
      return res.status(404).json('invalid')
    })

});
router.post('/recipes/getOne', async (req, res) => {
  const recipeId = req.body.id;
  const recipes = await recipeService.getOne(recipeId)
  res.send(recipes)

});


router.post('/recipes/add', async (req, res) => {
  const { name, summary, ingredients, preparation, category, prepTime, cookingTime, imageUrl, servings } = req.body;
  const added = await recipeService.create(name, summary, ingredients, preparation, category, prepTime, cookingTime, imageUrl, servings)
    .then(userData => res.send(userData))
    .catch(err => {
      return res.status(404).json('invalid data')
    })
});


module.exports = router;