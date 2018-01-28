import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Image,
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
      <Image
        style={styles.mainLogo}
        source={require('../../assets/main-logo.png')}
        resizeMode='contain'/>
      <Button
        onPress={() => this.onPressSignup()}
        title='Signup'
        style={styles.bottomButton}/>
        <Button
          onPress={() => this.onPressLogin()}
          title='Login'
          style={styles.bottomButton}/>
      </View>
    );
  }
}
