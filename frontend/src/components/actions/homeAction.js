import axios from "axios";

import {
    ALL_TEXT_REQUEST,
    ALL_TEXT_SUCCESS,
    ALL_TEXT_FAIL,
    NEW_MEETING_REQUEST,
    NEW_MEETING_SUCCESS,
    NEW_MEETING_FAIL,
    NEW_TEXT_REQUEST,
    NEW_TEXT_SUCCESS,
    NEW_TEXT_RESET,
    NEW_TEXT_FAIL,
    CLEAR_ERRORS
} from "../constants/homeConstant";

export const getAllText= () => async (dispatch) => {
    try {
      dispatch({ type: ALL_TEXT_REQUEST });
  
      const { data } = await axios.get("/api/v1/home");
  
      dispatch({
        type: ALL_TEXT_SUCCESS,
        payload: data.texts,
      });
    } catch (error) {
      dispatch({
        type: ALL_TEXT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };

  export const createMeet = (productData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_MEETING_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `/api/v1/admin/meeting/new`,
        productData,
        config
      );
  
      dispatch({
        type: NEW_MEETING_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_MEETING_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  