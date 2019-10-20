export const STUDENTS_DATA = 'STUDENTS_DATA';
import { get } from 'axios';


export const getStudentsData = () => async dispatch => {
  const response = await get(`https://api.myjson.com/bins/1dlper`);
  dispatch({type: STUDENTS_DATA, payload: response});
};