const INITIAL_STATE = {savedTweets: "[]", displayTweets: [], displayState:'init'}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'DISPLAY_SAVED_TWEETS':
        const parsed = JSON.parse(state.savedTweets)
        parsed.push(action.payload)
        const tweets = JSON.stringify(parsed)
        return {
          savedTweets: tweets,
          displayTweets: state.displayTweets,
          displayState: state.displayState
        }
        break;
      case 'DISPLAY_TWEETS':
        return {
          displayTweets: action.payload,
          displayState: action.display,
          savedTweets: state.savedTweets
        }
        break;
      case 'DELETE_SAVED_TWEETS':
        const deleteParsed = JSON.parse(state.savedTweets)
        deleteParsed.splice(action.payload, 1)
        const deleteTweet = JSON.stringify(deleteParsed)
        return {
          savedTweets: deleteTweet,
          displayTweets: state.displayTweets,
          displayState: state.displayState 
        }
        break;
    }
    return state;
}
