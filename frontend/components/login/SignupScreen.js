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

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressSetup() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}>Name:</Text>
        <TextInput
          style={styles.textInput}
          onEndEditing={(name) => this.setState({name: name})}/>
        <Text
          style={styles.text}>Email Address:</Text>
        <TextInput
          style={styles.email}
          onEndEditing={(email) => this.setState({email: email})}/>
        <Text style={styles.text}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.password}
          onEndEditing={(password) => this.setState({password: password})}/>
        <Button
          onPress={() => this.onPressSetup()}
          title='Setup Account'
          style={styles.loginButton}> </Button>
      </View>
    );
  }
}
