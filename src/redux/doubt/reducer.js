import * as types from "./actionType";
const initialState1 = {
    Doubt: [],
    isLoading: false,
    isError: false,
  };

export const reducer = (state = initialState1, action) => {
    const { type, payload } = action;
    switch (type) {
      case types.GET_DOUBT_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case types.GET_DOUBT_SUCCESS:
        return {
          ...state,
          Doubt: payload,
          isLoading: false,
          isError: false,
        };
      case types.GET_DOUBT_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
  
  
  
      default:
        return state;
    }
  };
  