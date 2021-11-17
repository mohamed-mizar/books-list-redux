import * as actionType from "../actions/actionTypes";

const initialState = {
  isEdit: false,
  categories: [],
  authors: [],
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.EDIT_MODE:
      return {
        ...state,
        isEdit: true,
      };
    case actionType.EXIT_EDIT_MODE:
      return {
        ...state,
        isEdit: false,
      };
    case actionType.SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case actionType.FECH_CATEGORIES_FALILED:
      return {
        ...state,
        error: true,
      };
      case actionType.SET_AUTHORS:
        return {
          ...state,
          authors: action.authors,
        };
      case actionType.FECH_AUTHORS_FALILED:
        return {
          ...state,
          error: true,
        };
    default:
      return state;
  }
};

export default reducer;
