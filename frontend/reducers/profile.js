import * as types from '../actions/ActionTypes';

import { AsyncStorage } from 'react-native';

const initialState = {
  userData: "",
  authToken: "",
};

export default function profile(state = initialState, action = {}) {
  let newState = state;
  switch (action.type) {
    case types.LOGIN:
      // simply update the warning
      return {
        ...state,
        authToken: action.authToken,
        userData: action.userData,
      }
    case types.SIGNUP:
      // Store object to device local storage
      //AsyncStorage.setItem("gradeLibrary", JSON.stringify(newLibrary));

      return {
        ...state,
        authToken: action.data.token,
        userData: action.data.userData,
      }
    default:
      return state;
  }
}
