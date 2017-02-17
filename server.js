const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const OAuth = require('oauth').OAuth;
const secret = require('./secrets.js');
const session = require('express-session');
const cookieParser = require('cookie-parser')

app.use(express.static(path.join(__dirname, '/client')));
app.use(cookieParser())
app.use(session({secret: "topsecret"}));

var oa = new OAuth(
  "https://api.twitter.com/oauth/request_token",
  "https://api.twitter.com/oauth/access_token",
  secret.CONSUMER_KEY,
  secret.CONSUMER_SECRET,
  "1.0",
  "http://localhost:3000/auth/twitter/callback",
  "HMAC-SHA1"
);

app.get('/auth/twitter', function(req, res) {
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
})

app.get('/auth/twitter/callback', function(req, res, next){
  if (req.session.oauth) {
    req.session.oauth.verifier = req.query.oauth_verifier;
    var oauth = req.session.oauth;
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
});

app.get('/auth/logout', function(req, res) {
  req.session.destroy(function() {
    res.cookie('sessionToken', false)
    res.redirect('/')
  })
})

app.listen(PORT, function() {
  console.log('listening on port 3000')
})