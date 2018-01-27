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

  onPressLogin() {
    // Do the login
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
    // Hash stuff,
  }

  onUpdateEmail(email) {
    console.log(email);

  }

  onUpdatePassword(password) {
    console.log(password);

  }

  render() {
    return (
      <View style={styles.container}>

        <Text
          style={styles.text}>Email Address:</Text>
        <TextInput
          style={styles.email}
          onChangeText={(email) => this.setState({email: email})}/>
        <Text style={styles.text}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.password}
          onChangeText={(password) => this.setState({ password: password})}/>
        <Button
          onPress={() => this.onPressLogin()}
          title='Login'
          style={styles.loginButton}> </Button>
      </View>
    );
  }
}
