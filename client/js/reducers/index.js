const INITIAL_STATE = {savedTweets: "[]", displayTweets: [], displayState:'init'}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'DISPLAY_SAVED_TWEETS':
        const tweets = window.localStorage.getItem('saved');
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
        const deleted = window.localStorage.getItem('saved');
        return {
          savedTweets: deleted,
          displayTweets: state.displayTweets,
          displayState: state.displayState 
        }
        break;
    }
    return state;
}
