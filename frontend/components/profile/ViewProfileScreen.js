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
  ScrollView,
} from 'react-native';
import styles from '../../stylesheets/BrowseStyles'

export default class ViewProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      moreInfo: "",
      skills: "",
      email: "",
      phoneNumber: "",
      github: "",

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={[styles.name, styles.centerText]}
          numberOfLines={2}
          minimumFontScale={0.01}>{this.state.name}</Text>
        <View style={styles.line}/>
        <ScrollView>
          <Text
            style={styles.header}>
            More Info</Text>
          <Text
            style={styles.bio}>{this.state.moreInfo}</Text>

          <Text
            style={styles.header}>
            Skills</Text>
          <Text
            style={styles.bio}>{this.state.skills}</Text>

          <Text
            style={styles.header}>
            Email</Text>
          <Text
            style={styles.bio}>{this.state.email}</Text>

          <Text
            style={styles.header}>
            Phone Number</Text>
          <Text
            style={styles.bio}>{this.state.phoneNumber}</Text>

          <Text
              style={styles.header}>
              GitHub</Text>
          <Text
            style={styles.bio}>{this.state.github}</Text>
        </ScrollView>
      </View>
    );
  }
}
