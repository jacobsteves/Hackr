import * as types from './ActionTypes';
import { AsyncStorage } from 'react-native';

export function login(userData) {
  return function(dispatch) {
    fetch(types.APP_BACKEND_URL + "/api/login", {
      headers: {
        'email': userData.email,
        'name': userData.name,
        'password': userData.password // add more fields here
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      dispatch({
        type: types.LOGIN,
        data: responseJson
      });
    })
    .catch((error) => {
      console.error('error ' + error);
    })
  };
}

export function signup(userData) {
  return function(dispatch) {
    fetch(types.APP_BACKEND_URL + "/api/signup", {
      headers: {
        'email': userData.email,
        'name': userData.name,
        'password': userData.password // add more fields here
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      dispatch({
        type: types.SIGNUP,
        data: responseJson
      });
    })
    .catch((error) => {
      console.error('error ' + error);
      return { 'success': false };
    })
  };
}
