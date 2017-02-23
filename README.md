### twitter-client

Web app that utilizes twitter API allow user to search for tweets by word/phrase, hashtag, or photo. Uses React/Redux in the front end and Node/Express as the server.

Deployed app: https://twitterclient-search.herokuapp.com/

### getting started

* Require your Key/Access tokens on apps.twitter.com
* Create a .env file in main project directory
* Place this in your .env file and fill out the values accordingly: 
```
 CONSUMER_KEY=yourConsumerKey
 CONSUMER_SECRET=yourConsumerSecret
 ACCESS_TOKEN_KEY=yourAccessTokenKey
 ACCESS_TOKEN_SECRET=yourAccessTokenSecret
```

### starting up the app

```
npm install (i'm using node v7 - if you're not up to date, it might require you to update)
npm start
nodemon server/server.js

```