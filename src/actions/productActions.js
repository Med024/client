import axios from "axios";
import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  
  CLEAR_ERRORS
} from "../constants/productConstants";

export const getProducts = (keyword = '') => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    let link= `/api/v1/products?keyword=${keyword}`
    const { data } = await axios.get(link);

    // Payload will pass data
    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
    // If there are some errors
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getproductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST});

    const { data } = await axios.get(`/api/v1/product/${id}`);
    //paylaod will pass data
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product
    });
    //if there is some errors
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clear Errors 
export const clearErrors =() => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
}
