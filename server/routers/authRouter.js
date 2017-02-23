const OAuth = require('oauth').OAuth;

let oa = new OAuth(
  "https://api.twitter.com/oauth/request_token",
  "https://api.twitter.com/oauth/access_token",
  process.env.CONSUMER_KEY,
  process.env.CONSUMER_SECRET,
  "1.0",
  "http://localhost:3000/auth/twitter/callback",
  "HMAC-SHA1"
);

module.exports = function(express) {
  let authRouter = express.Router();

  authRouter.use('/twitter/callback', function(req, res, next){
    if (req.session.oauth) {
      req.session.oauth.verifier = req.query.oauth_verifier;
      let oauth = req.session.oauth;
      oa.getOAuthAccessToken(oauth.token,oauth.token_secret,oauth.verifier, 
      function(error, oauth_access_token, oauth_access_token_secret, results){
        if (error){
          console.log('error is ', error);
        } else {
          req.session.oauth.access_token = oauth_access_token;
          req.session.oauth.access_token_secret = oauth_access_token_secret;
          res.cookie('sessionToken', true)
          res.redirect('/')
        }
      }
      );
    } else
      next(new Error("Invalid page"))
  })

  authRouter.use('/twitter', function(req, res){
    oa.getOAuthRequestToken(function(error, oauth_token, oauth_token_secret, results){
      if(error) {
        console.log('error is ', error);
        } else {
          req.session.oauth = {};
          req.session.oauth.token = oauth_token;
          req.session.oauth.token_secret = oauth_token_secret;
          res.redirect('https://twitter.com/oauth/authenticate?oauth_token='+oauth_token)
      }
    })
  });


  authRouter.use('/logout', function(req, res) {
    req.session.destroy(function() {
      res.cookie('sessionToken', false)
      res.redirect('/')
    })
  })
  
  return authRouter;
}