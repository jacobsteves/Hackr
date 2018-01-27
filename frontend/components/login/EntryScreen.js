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

export default class EntryScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressLogin() {

  }

  onPressSignup() {

  }

  render() {
    return (
      <View style={styles.container}>
      <Button
        onPress={() => this.onPressSignup()}
        title='Signup'
        style={styles.loginButton}> </Button>
        <Button
          onPress={() => this.onPressLogin()}
          title='Login'
          style={styles.loginButton}> </Button>
      </View>
    );
  }
}
