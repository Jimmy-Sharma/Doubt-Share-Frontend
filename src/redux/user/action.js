import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionType";
import axios from "axios";
import { toast } from 'react-hot-toast';

export const SignUpFunc = (payload) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });
    const response = await axios.post("https://doubt-share-raz0.onrender.com/user/register", payload);

    dispatch({ type: USER_REGISTER_SUCCESS, payload: response.data });
    toast.success('Registration successful!', {
      style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
      }
  });
    console.log(response);

  } catch (error) {
    dispatch({ type: USER_REGISTER_FAILURE });
    console.log(error);
    toast.error('Registration failed. Please try again later.', {
      style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
      }
  });
  };
}

export const Loginfunction = (loginData) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  axios
    .post("https://doubt-share-raz0.onrender.com/user/login", loginData)
    .then((response) => {
      dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });
      toast.success('Login successful!', {
        style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
        }
    });
      localStorage.setItem('Revly.io', JSON.stringify(response.data))
    })
    .catch((error) => {
      dispatch({ type: USER_LOGIN_FAILURE });
      toast.error('Login failed. Please try again later.', {
        style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
        }
    });
    });
};