import * as types from './ActionTypes';
import { AsyncStorage } from 'react-native';

export function getMatches(userId, authToken) {
  return function(dispatch) {
    fetch(types.APP_BACKEND_URL + "/api/getMatches", {
      headers: {
        'user_id': userId,
        'auth_token': authToken
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
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
