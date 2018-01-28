import * as types from './ActionTypes';
import { AsyncStorage } from 'react-native';

export function getMatches(userId) {
  return function(dispatch) {
    fetch(types.APP_BACKEND_URL + "/api/getMatches", {
      headers: {
        'userId': userId,
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
