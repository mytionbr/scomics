import axios from "axios"
import { PRODUCT_CATEGORY_LIST_FAIL, PRODUCT_CATEGORY_LIST_REQUEST, PRODUCT_CATEGORY_LIST_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productsConstants"

export const listProducts = ({
    pageNumber = '',
    name = '',
    category = '',
    order = '',
    min = 0,
    max = 0,
    rating = 0,
    pageSize=''
  }) => async(dispatch) =>{
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try{
        const { data } = await axios.get(
            `/api/products?pageSize=${pageSize}&pageNumber=${pageNumber}&name=${name}&category=${category}&min=${min}&max=${max}&rating=${rating}&order=${order}`
            )
        dispatch({type: PRODUCT_LIST_SUCCESS, payload:data})
    } catch(error){
        dispatch({type:PRODUCT_LIST_FAIL,payload:error.message})
    }
}


export const listProductCategories = () => async (dispatch) => {
    dispatch({
      type: PRODUCT_CATEGORY_LIST_REQUEST,
    });
    try {
      const { data } = await axios.get(`/api/products/categories`);
      dispatch({ type: PRODUCT_CATEGORY_LIST_SUCCESS, payload: data });
    } catch (error) {
      console.log(error.response.data.message)
      dispatch({ type: PRODUCT_CATEGORY_LIST_FAIL, payload: error.message });
    }
  };

export const detailsProducts = (productId) => async(dispatch) =>{
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId})
    try{
        const {data} = await axios.get(`/api/products/${productId}`)
        dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:PRODUCT_DETAILS_FAIL,payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message})
    }
}