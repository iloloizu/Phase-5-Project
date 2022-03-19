import {
    RETRIEVE_SHOES
  } from "./types";
  
  import ShoeService from "../services/ShoeService";
  

  export const retrieveshoes = () => async (dispatch) => {
    try {
      const res = await ShoeService.getAll();
  
      dispatch({
        type: RETRIEVE_SHOES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };