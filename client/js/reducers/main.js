const INITIAL_STATE = {displayTweets: [], displayState:'none'}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'DISPLAY_TWEETS':
        return {
          displayTweets: action.payload,
          displayState: action.display
        }
    }
  return state;
}
