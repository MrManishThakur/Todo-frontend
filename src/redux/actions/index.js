import axios from "axios";
import { ADDNEW_TODO, DELETE_TODO, GETALL_TODO, TOGGLE_TAB, TOGGLE_TODO, UPDATE_TODO } from "./type";

const API_URL = "https://todo-app-api-kgk9.onrender.com/todo/";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${API_URL}/todos`, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`${API_URL}/gettodos`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
      const res = await axios.get(`${API_URL}/gettodos/${id}`);

      dispatch({ type: TOGGLE_TODO , payload: res.data });
  } catch (error) {
      console.log(error.message);
  }
}

export const updateTodo = (id, data) => async (dispatch) => {
  try {
      const res = await axios.put(`${API_URL}/gettodos/${id}`, { data });

      dispatch({ type: UPDATE_TODO , payload: res.data });
  } catch (error) {
      console.log(error.message);
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  try {
      const res = await axios.delete(`${API_URL}/gettodos/${id}`);

      dispatch({ type: DELETE_TODO , payload: res.data });
  } catch (error) {
      console.log(error.message);
  }
}

export const toggleTab = (tab) => async(dispatch)=>{
  dispatch({type: TOGGLE_TAB, selected: tab})
}