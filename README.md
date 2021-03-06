### twitter-client

Web app that utilizes twitter API - allows user to search for tweets by word/phrase, hashtag, or photo. Uses React/Redux in the front end and Node/Express as the server.

Deployed app: https://twitterclient-search.herokuapp.com/

### getting started

* Require your Key/Access tokens on apps.twitter.com
* Go to 'settings' in your apps.twitter.com account and set the callback url to "http://localhost:3000/auth/twitter/callback"
* Create a .env file in main project directory
* Place this in your .env file and fill out the values accordingly: 
```
 CONSUMER_KEY=yourConsumerKey
 CONSUMER_SECRET=yourConsumerSecret
 ACCESS_TOKEN_KEY=yourAccessTokenKey
 ACCESS_TOKEN_SECRET=yourAccessTokenSecret
```
* Go to /server/rouers/authRouter.js, and change line 9 to "http://localhost:3000/auth/twitter/callback"

### starting up the app

```
npm install (i'm using node v7 - if you're not up to date, it might require you to update)
npm start
nodemon server/server.js

```
