import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  TextInput,
  Button,
  View,
  Text,
  Picker,
  Image,
  TouchableHighlight,
} from 'react-native';
import styles from '../../stylesheets/BrowseStyles';

export default class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hackathonId : "0"
    };
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
        <Picker selectedValue={this.state.hackathonId}
          onValueChange={(itemValue, itemIndex) => this.setState({hackathonId: itemValue})}>
          <Picker.Item label="DeltaHacks IV" value="09" />
          <Picker.Item label="Hack the North" value="1000000" />
        </Picker>

        <View style={styles.line}/>

        <Text
          style={[styles.name, styles.centerText]}
          numberOfLines={2}
          minimumFontScale={0.01}>Shaughnessy Cudmore-Keating</Text>
          <View style={styles.line}/>
          <Text
            style={styles.header}>
            Bio</Text>
        <Text
          style={styles.bio}>Haha my name is Jane :)</Text>

        <Text
            style={styles.header}>
            Skills</Text>
        <Text
          style={styles.bio}>I know C#, PHP, and JavaScript very well!!!</Text>

          <TouchableHighlight
            style={[styles.button, styles.alignRight, styles.inline]} onPress={this._onPressButton}>
            <Image
              resizeMode='contain'
              style={[]}
              source={require('../../images/checkmark.png')}/>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.alignLeft, styles.inline]} onPress={this._onPressButton}>
            <Image
              resizeMode='contain'
              style={[]}
              source={require('../../images/cross.png')}/>
          </TouchableHighlight>
      </View>
    );
  }
}
