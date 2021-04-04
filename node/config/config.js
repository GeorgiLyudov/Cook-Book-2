const config = {
  PORT: 9000,
  DB_URI: 'mongodb://localhost/recipes',
  SALT_ROUNDS: 10,
  SECRET:"wow",
  COOKIE_NAME: 'auth token',
}
module.exports = config;