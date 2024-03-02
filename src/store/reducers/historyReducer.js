const initialState = {
    gameplayHistory: [], 
  };
  
  const historyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RECORD_GAMEPLAY':
        return {
          ...state,
          gameplayHistory: [...state.gameplayHistory, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default historyReducer;