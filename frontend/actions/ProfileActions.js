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

export function addSwipe(swipeData) {
  return function(dispatch) {
    fetch(types.APP_BACKEND_URL + "/api/addSwipe", {
      headers: {
        'auth_token': swipeData.auth_token,
        'swiper_id': swipeData.swiper_id,
        'swipee_id': swipeData.swipee_id,
        'hackathon_id': swipeData.hackathon_id,
        'said_yes': swipeData.said_yes
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      dispatch({
        type: types.ADD_SWIPE,
        data: responseJson
      });
    })
    .catch((error) => {
      console.error('error ' + error);
      return { 'success': false };
    })
  };
}

export function getCards(userData) {
  return function(dispatch) {
    fetch(types.APP_BACKEND_URL + "/api/getCards", {
      headers: {
        'auth_token': userData.auth_token
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      dispatch({
        type: types.GET_CARDS,
        data: responseJson
      });
    })
    .catch((error) => {
      console.error('error ' + error);
    })
  };
}

export function updateProfile(userData) {
  return function(dispatch) {
    fetch(types.APP_BACKEND_URL + "/api/updateProfile", {
      headers: {
        'auth_token': userData.auth_token,
        "skills": userData.skills,
        "contact": JSON.stringify(userData.contact),
        "projects": userData.projects,
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      dispatch({
        type: types.UPDATE_PROFILE,
        data: responseJson
      });
    })
    .catch((error) => {
      console.error('error ' + error);
    })
  };
}
