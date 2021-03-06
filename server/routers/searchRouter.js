const Twitter = require('twitter');

const twitter = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY, 
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

module.exports = function(express) {
  let searchRouter = express.Router();

  searchRouter.use('/tweets', function(req, res){
    let params = {q:"", count: 20};
    switch (req.body.option) {
      case "phrase":
        params.q = req.body.value;
        break;    
      case "hashtag":
        params.q  = "#" + req.body.value;
        break;
      case "photo":
        params.q = req.body.value + " filter:images";
        params.include_entities= true;
        params.count = 50;
        break;
    }
    twitter.get('/search/tweets', params, function(error, tweets, response) {
      if(error) {
        console.log('error is ', error);
        res.send(400, error);
      } else {
        //function to convert military to standard time
        const dateConverter = function(date) {
          const parsedDate = "__" + date.substring(0, 10)  + ", " + date.substring(26, 30);
          return parsedDate;
        }
        //set initial state
        if(tweets.statuses.length === 0){
          res.send({results:[], display: 'none'});
        }
        //loop through image tweets and grab only the results with a media url
        else if(req.body.option === 'photo') {
          let photoTweets = [];
          for(let i=0; i< tweets.statuses.length; i++) {
            let idx = tweets.statuses[i];
            let obj = {};
            if(photoTweets.length >= 20) {
              break;
            }
            if(idx.entities.media){
              obj['photo'] = idx.entities.media[0].media_url;
              obj['text'] = idx.text;
              obj['user'] = idx.user.screen_name;
              obj['date'] = dateConverter(idx.created_at);
              obj['link'] = "https://twitter.com/" + idx.user.screen_name;
              photoTweets.push(obj);
            }
          }
          res.send({results:photoTweets, display: 'photo'});
        //data for hashtag or phrase/word search
        } else {
          const data = tweets.statuses.map(function(index){
            let obj = {};
            obj['text'] = index.text;
            obj['user'] = index.user.screen_name;
            obj['date'] = dateConverter(index.created_at);
            obj['link'] = "https://twitter.com/" + index.user.screen_name;
            return obj;
          })  
          res.send({results:data, display: 'text'});
        }
      }
    })
  });

  return searchRouter;
}