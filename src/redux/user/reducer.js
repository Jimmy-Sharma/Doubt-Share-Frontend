import {
  USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS
} from "./actionType";


const initialState = {
  isLoading: false,
  isError: false,
  accountCreate: false,
  isAuth: false,
  User: []
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        accountCreate: false,
        isAuth: false,
        isError: false,
      };

    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        accountCreate: true,
        isAuth: false,
        isError: false,
      };

    case USER_REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        accountCreate: false,
        isError: true,
      };

    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuth: false,
        isError: false,
        accountCreate: false,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        User: payload,
        isError: false,
      };

    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
      };

    default:
      return state;
  }
};