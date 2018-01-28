import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
  View,
} from 'react-native';
import styles from '../stylesheets/SettingsStyles'

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  onPressEditContact() {

  }

  onPressEditProfile() {

  }

  onPressLogout() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.onPressEditContact()}
          title='Edit Contact Info'
          style={styles.button}/>
        <Button
          onPress={() => this.onPressEditProfile()}
          title='Edit Profile'
          style={styles.button}/>
        <Button
          onPress={() => this.onPressLogout()}
          title='Logout'
          style={styles.button}/>
      </View>
    )
  }
}
