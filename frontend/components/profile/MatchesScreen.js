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
  ListView,
} from 'react-native';
import { getMatches } from '../../actions/BrowseActions';
import styles from '../../stylesheets/MatchesStyles';

export default class MatchesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.header}>My matches</Text>
        <View style={styles.line}/>
      </View>
    );
  }
}
