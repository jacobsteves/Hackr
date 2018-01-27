import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  TextInput,
  Button,
  View,
  Text
} from 'react-native';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

  }

  function onPressLogin(props) {
    // Do the login
  }

  render() {
    let styles = {}
    return (
      <View style={styles.container}>

        <Text style={styles.text}>Email Address:</Text>
        <TextInput style={styles.email}> </TextInput>
        <Text style={styles.text}>Password:</Text>
        <TextInput style={styles.password}> </TextInput>
        <Button
          onPress={onPressLogin}
          title="Login"
          style{styles.loginButton}> </Button>
      </View>
    );
  }
}
