import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  TextInput,
  Button,
  View,
  Text,
  Picker,
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

        <Text
          style={styles.name}
          numberOfLines={2}
          adjustsFontSizeToFit={true}
          minimumFontScale={0.01}>Shaughnessy Cudmore-Keating</Text>
        <Text
          style={styles.bio}>Haha my name is Jane :)</Text>
      </View>
    );
  }
}
