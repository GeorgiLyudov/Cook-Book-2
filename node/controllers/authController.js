const router = require('express').Router();
const authService = require('../services/authService');
const { COOKIE_NAME } = require('../config/config');
const auth = require('../middlewares/auth');


router.post('/register', (req, res, next) => {
  const { email, password } = req.body;

  authService.register(email, password)
    .then(createdUser => {
      console.log(createdUser);
      authService.login(email, password)
      return createdUser
    })
    .catch(next);

});

router.post('/login', auth, (req, res, next) => {
  const { email, password } = req.body;
  authService.login(email, password)
  console.log(createdUser);
  return createdUser

});

router.get('/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.redirect('/');
});


module.exports = router;