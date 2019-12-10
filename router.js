const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
module.exports = (app) => {
  app.get('/', (req, res) => {
    res.send({ hi: 'there' });
  });
  app.get('/users', requireAuth, (req, res) => {
    res.send({ 'did you make it': 'yes' });
});
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}