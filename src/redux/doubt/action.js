import axios from "axios";
import {
    DELETE_DOUBT_FAILURE, DELETE_DOUBT_REQUEST, DELETE_DOUBT_SUCCESS, EDIT_DOUBT_FAILURE, EDIT_DOUBT_REQUEST,
    EDIT_DOUBT_SUCCESS, GET_DOUBT_FAILURE, GET_DOUBT_REQUEST, GET_DOUBT_SUCCESS, POST_DOUBT_FAILURE, POST_DOUBT_REQUEST,
    POST_DOUBT_SUCCESS
} from "./actionType";
import toast from "react-hot-toast";

export const GetDoubt = (userId) => async (dispatch) => {
    dispatch({ type: GET_DOUBT_REQUEST });
    return await axios
        .get(`http://localhost:4545/doubt/history?id=${userId._id}`)
        .then((res) => {
            dispatch({ type: GET_DOUBT_SUCCESS, payload: res.data.doubts });
        })
        .catch((e) => {
            dispatch({ type: GET_DOUBT_FAILURE, payload: e });
        });
};


export const PostDoubt = (payload) => async (dispatch) => {
    try {
        dispatch({ type: POST_DOUBT_REQUEST });
        const response = await axios.post("http://localhost:4545/doubt/create", payload);

        dispatch({ type: POST_DOUBT_SUCCESS, payload: response.data });
        toast.success('Doubt Successfully Posted ', {
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
        dispatch({ type: POST_DOUBT_FAILURE });
        console.log(error);
        toast.error('Request failed Please enter all the fields.', {
            style: {
                borderRadius: "50px",
                background: "#000428",
                color: "#ffffff",
                padding: "1rem 1.5rem",
                fontWeight: "600",
            }
        });
    }
};

export const deleteDoubt = (id) => (dispatch) => {
    dispatch({ type: DELETE_DOUBT_REQUEST });

    return axios
        .delete(`http://localhost:4545/doubt/delete/${id}`)
        .then((res) => {
            dispatch({ type: DELETE_DOUBT_SUCCESS, payload: res.data });
            toast.success('Doubt Successfully Deleted', {
                style: {
                    borderRadius: "50px",
                    background: "#000428",
                    color: "#ffffff",
                    padding: "1rem 1.5rem",
                    fontWeight: "600",
                }
            });
            console.log(res);
        })
        .catch((e) => {
            dispatch({ type: DELETE_DOUBT_FAILURE, payload: e });
            toast.error('Failed to delete the doubt. Please try again.', {
                style: {
                    borderRadius: "50px",
                    background: "#000428",
                    color: "#ffffff",
                    padding: "1rem 1.5rem",
                    fontWeight: "600",
                }
            });
            console.log(e);
        });
};

export const editDoubt = (id, payload) => (dispatch) => {
    dispatch({ type: EDIT_DOUBT_REQUEST });
    return axios
        .put(`http://localhost:4545/doubt/edit/${id}`, payload)
        .then((r) => {
            dispatch({ type: EDIT_DOUBT_SUCCESS, payload: r.data });
            toast.success('Doubt Successfully Edited', {
                style: {
                    borderRadius: "50px",
                    background: "#000428",
                    color: "#ffffff",
                    padding: "1rem 1.5rem",
                    fontWeight: "600",
                }
            });
        })
        .catch((e) => {
            dispatch({ type: EDIT_DOUBT_FAILURE, payload: e });
            toast.error('Failed to edit the doubt. Please try again.', {
                style: {
                    borderRadius: "50px",
                    background: "#000428",
                    color: "#ffffff",
                    padding: "1rem 1.5rem",
                    fontWeight: "600",
                }
            });
            console.log(e);
        });
};