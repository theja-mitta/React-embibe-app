import { combineReducers } from 'redux';

import { STUDENTS_DATA } from '../actions';
import { ADD_USER } from '../actions';

const initialState = {
  students: {},
  users: []
}

const studentsDataReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case STUDENTS_DATA: return action.payload;
    default: return state;
  };
};

const addUserReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case ADD_USER: 
    return Object.assign({}, state, {
        users: [
          ...state.users,
          {
            username: action.payload.username,
            password: action.payload.password
          }
        ]
      });
      default: return state;
  };
};


const reducers = combineReducers({
  students: studentsDataReducer,
  users: addUserReducer
});


export default reducers;