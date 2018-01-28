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

class MatchesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  componentWillMount() {
    let id = this.props.userData.id;
    let auth = this.props.auth_token;
    console.log(auth);
    this.props.actions.getMatches(id, auth);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.matches)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.changeView("Browse")}
          title="Go back to browse" />
          
        <Text style={styles.header}>My matches</Text>
        <View style={styles.line}/>
        {this.props.matches && this.props.matches.map((value, key) => (
          <View key={key}>
            <Text>Name: {value.name}</Text>
            <Text>Email: {value.email}</Text>
            <View style={styles.line}/>
          </View>
        ))}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.profile.userData,
    auth_token: state.profile.auth_token,
    matched: state.profile.matched,
    cards: state.profile.cards,
    profileSuccess: state.profile.profileSuccess,
    matches: state.profile.matches
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getMatches
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchesScreen);
