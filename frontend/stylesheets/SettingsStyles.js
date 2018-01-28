import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
 button: {
    width: screenWidth,
    //flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: '#aaaaaa',
  },
});
