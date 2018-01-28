import $ from 'jquery';
import * as types from './ActionTypes';
import { AsyncStorage } from 'react-native';

export function login(userData) {
  return {
    type: types.LOGIN,
    data: fetch(types.APP_BACKEND_URL, {
      headers: {
        'email': userData.email,
        'name': userData.name,
        'password': userData.password // add more fields here
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      return responseJson;
    })
    .catch((error) => {
      console.error('error ' + error);
    })
  };
}
