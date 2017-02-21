import $ from 'jquery';

export function searchTweets(params) {
  return (dispatch) => {
    $.post('/search/tweets/', params, function(results){
      dispatch(displayTweets(results.results, results.display))
    })
    // return fetch('/search/tweets', {
    //   method: 'POST',
    //   body: JSON.stringify(params)
    // })
    // .then(response => {
    //   dispatch(searchTweetsSuccess(response.data))
    // })
  }
}

export function displayTweets(data, display){
  return {
    type: 'DISPLAY_TWEETS',
    payload: data,
    display: display
  }
}


export function saveTweets() {
  return {
    type: 'DISPLAY_SAVED_TWEETS',
    payload: 'placeholder'
  }
}