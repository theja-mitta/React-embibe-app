export const STUDENTS_DATA = 'STUDENTS_DATA';
export const ADD_USER = 'ADD_USER';
import { get } from 'axios';


export const getStudentsData = () => async dispatch => {
  const response = await get(`https://api.myjson.com/bins/1dlper`);
  dispatch({type: STUDENTS_DATA, payload: response});
};

export const addUser = ({username,password}) => {
  return {
    type: ADD_USER,
    payload: {
      username,
      password
    }
  }
}