import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  TextInput,
  Button,
  View,
  Text
} from 'react-native';
import styles from '../../stylesheets/LoginStyles'

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>

        <Text
          style={styles.text}>Email Address:</Text>
        <TextInput
          style={styles.email}
          onEndEditing={(email) => this.onUpdateEmail(email)}/>
        <Text style={styles.text}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.password}
          onEndEditing={(password) => this.onUpdatePassword(password)}/>
        <Button
          onPress={() => onPressLogin()}
          title='Login'
          style={styles.loginButton}> </Button>
      </View>
    );
  }
}
