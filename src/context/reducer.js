export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN": {
      return {
        ...state,
        token: action.payload,
      };
    }
    case "UPDATE_USER": {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
