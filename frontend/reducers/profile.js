import * as types from '../actions/ActionTypes';

import { AsyncStorage } from 'react-native';

const initialState = {
  userData: "",
  auth_token: "",
  success: false,
  matched: false,
  profileSuccess: false,
  matches: []
};

export default function profile(state = initialState, action = {}) {
  let newState = state;
  switch (action.type) {
    case types.LOGIN:
      // simply update the warning
      console.log(action.data)
      return {
        ...state,
        auth_token: action.data.auth_token,
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
        auth_token: action.data.auth_token,
        userData: action.data.userData,
        success: action.data.success,
      }
    case types.ADD_SWIPE:
      return {
        ...state,
        matched: action.data.matched,
      }
    case types.GET_CARDS:
      return {
        ...state,
        cards: action.data.cards
      }
    case types.UPDATE_PROFILE:
      return {
        ...state,
        profileSuccess: action.data.success
      }
    case types.GET_MATCHES:
      return {
        ...state,
        matches: action.data.matches
      }
    default:
    console.log("default")
      return state;
  }
}
