import { combineReducers } from 'redux';

import { STUDENTS_DATA } from '../actions';



const studentsDataReducer = ( state = [], action) => {
  switch (action.type) {
    case STUDENTS_DATA: return action.payload;
    default: return state;
  };
};


const reducers = combineReducers({
  students: studentsDataReducer
});


export default reducers;