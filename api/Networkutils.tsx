import axios from "axios"
import { Dispatch, createAsyncThunk } from "@reduxjs/toolkit";
import { RootObject } from "../model/RootObject";


export const getTodos = createAsyncThunk("todoList/getTodos", async () => {
    console.log('inside thunk')
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    console.log('inside after fetch')
    let json = await response.json();
    console.log(json);  
    return json;
  
  });
  
export const getProductList1 = () => async (dispatch: Dispatch) => {
    const response = await axios({
        method: 'GET',
        url: 'https://fakestoreapi.com/products',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }

    });
    console.log("getProductList start 10")
   // dispatch(addProductList(response.data))
    return response;
}

export const getMyProduct =  createAsyncThunk('user/fetchUserData', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonData = await response.json();
    return jsonData as RootObject;
  });


  export const getProducts = createAsyncThunk(
    "getProducts",
    async () => {
      const { data } = await axios.get(
        'https://fakestoreapi.com/products'
      );
      console.log('res: '+data)
      return data;
    }
  );