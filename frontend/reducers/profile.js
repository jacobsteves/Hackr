import * as types from '../actions/ActionTypes';

import { AsyncStorage } from 'react-native';

const initialState = {
  userData: "",
  authToken: "",
  success: false,
};

export default function profile(state = initialState, action = {}) {
  let newState = state;
  switch (action.type) {
    case types.LOGIN:
      // simply update the warning
      console.log(action.data)
      return {
        ...state,
        authToken: action.data.authToken,
        userData: action.data.userData,
        success: action.data.success,
      }
    case types.SIGNUP:
      // Store object to device local storage
      //AsyncStorage.setItem("gradeLibrary", JSON.stringify(newLibrary));
      console.log("signup")
      console.log(action.data.success)
      return {
        ...state,
        authToken: action.data.token,
        userData: action.data.userData,
        success: action.data.success,
      }
    default:
    console.log("default")
      return state;
  }
}
