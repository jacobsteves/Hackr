import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
  mainLogo: {
    width: screenWidth,
    flex:2,

  },
  textInput: {
   margin: 5,
   width: screenWidth,
   borderRadius: 4,
   borderWidth: 0.5,
   borderColor: '#d6d7da',
   textAlign: 'center',
 },
 email: {
   margin: 5,
   width: screenWidth,
   borderRadius: 4,
   borderWidth: 0.5,
   borderColor: '#d6d7da',
   textAlign: 'center',
 },
 password: {
   margin: 5,
   width: screenWidth,
   borderRadius: 4,
   borderWidth: 0.5,
   borderColor: '#d6d7da',
   textAlign: 'center',
 },
 bottomButton: {
    flex: 1,
    width: screenWidth,
    height: 75,
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#aaaaaa',
  },
 button: {
    width: screenWidth,
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#aaaaaa',
  },
  text: {
    margin: 5,
    fontSize: 18,
  },
});
