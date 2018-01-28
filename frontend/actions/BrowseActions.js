import * as types from './ActionTypes';
import { AsyncStorage } from 'react-native';

export function getMatches(userId, auth_token) {
  return function(dispatch) {
    fetch(types.APP_BACKEND_URL + "/api/getMatches", {
      headers: {
        'user_id': userId,
        'auth_token': auth_token
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      dispatch({
        type: types.GET_MATCHES,
        data: responseJson
      });
    })
    .catch((error) => {
      console.error('error ' + error);
    })
  };
}
