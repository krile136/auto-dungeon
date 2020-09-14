const initialState = {
  characters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTER':
      // console.log('state=', state);
      // console.log('payload=', action.character.status);
      return {
        ...state,
        characters: [...state.characters, action.character],
      };
    default:
      return state;
  }
};

export default reducer;
