import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    paddingTop: 30,
    width: screenWidth,
    height: screenHeight,
  },
  textInput: {
   margin: 5,
   width: screenWidth,
   borderRadius: 4,
   borderWidth: 0.5,
   borderColor: '#d6d7da',
   textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    flex: 1,
  },
  inline: {
    flexDirection:'row',
    alignSelf: 'center',
  },
  text: {
    margin: 5,
    fontSize: 18,
  },
  bio: {
    margin: 5,
    alignSelf: 'center',
    fontSize: screenWidth * 0.04,
  },
  name: {
    fontSize: screenWidth * 0.09,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  header: {
    fontSize: screenWidth * 0.06,
    fontWeight: 'bold',
    paddingLeft: screenWidth * 0.01,
    // paddingTop: screenWidth * 0.05,
  },
  centerText: {
    textAlign:"center",
    textAlignVertical:"center",
  },
  line: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
  highlight: {
    opacity: 1,
  },
  square: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.8,
    alignSelf:'center',
    backgroundColor: 'red',
  },
  selector: {
    alignSelf: 'center',
  },
});
