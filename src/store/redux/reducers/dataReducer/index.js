import { ERROR_DATA, LOADING_DATA, SUCCESS_DATA } from "../../types";

const initialState = {
  data: [],
  error: false,
  loading: true,
  errorMessage: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: null,
      };
    case SUCCESS_DATA:
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMessage: null,
      };
    case ERROR_DATA:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
