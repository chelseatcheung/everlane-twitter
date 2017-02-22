import $ from 'jquery';

export function searchTweets(params) {
  return (dispatch) => {
    $.post('/search/tweets/', params, function(results){
      dispatch(displayTweets(results.results, results.display))
    })
  }
}

export function displayTweets(data, display){
  return {
    type: 'DISPLAY_TWEETS',
    payload: data,
    display: display
  }
}


export function saveTweets(data) {
  console.log('in save tweets ', data)
  return {
    type: 'DISPLAY_SAVED_TWEETS',
    payload: data
  }
}

export function deleteTweets(idx) {
  console.log('in delete tweets')
  return {
    type: 'DELETE_SAVED_TWEETS',
    payload: idx
  }
}