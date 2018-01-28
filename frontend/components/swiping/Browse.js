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
  Modal,
} from 'react-native';
import { addSwipe } from '../../actions/ProfileActions'
import styles from '../../stylesheets/BrowseStyles';

class Browse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hackathonId : "0",
      swipeeId: "0",
      modalVisible: false,
      name: "",
      moreInfo: "",
      skills: "",
      github: "",
    };
  }

  componentDidMount() {
    console.log("mounted!");
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.matched) {
      this.setState({ modalVisible: true });
    }
  }

  onPressAccept() {
    console.log('Accepted ' + this.state.swipeeId);
  }

  onPressDeny() {
    console.log('Denied ' + this.state.swipeeId);
  }

  closeModal() {
    this.setState({ modalVisible: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => this.closeModal()}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Text>This is content inside of modal component</Text>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                >
                </Button>
                <Button
                    onPress={() => this.props.changeView("MatchesScreen")}
                    title="Go to matches"
                >
                </Button>
              </View>
            </View>
        </Modal>
        <Picker selectedValue={this.state.hackathonId}
          onValueChange={(itemValue, itemIndex) => this.setState({hackathonId: itemValue})}>
          <Picker.Item label="DeltaHacks IV" value="09" />
          <Picker.Item label="Hack the North" value="1000000" />
        </Picker>

        <View style={styles.line}/>
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
              GitHub</Text>
          <Text
            style={styles.bio}>{this.state.github}</Text>
        </ScrollView>

        <View style={[styles.inline]}>
            <TouchableHighlight
              onPress = {() => this.onPressDeny()}
              style={[styles.highlight]}>
              <Image
                resizeMode='contain'
                style={[]}
                source={require('../../images/cross.png')}/>
            </TouchableHighlight>
            <TouchableHighlight
              onPress = {() => this.onPressAccept()}
              style={[styles.highlight]}>
              <Image
                resizeMode='contain'
                style={[]}
                source={require('../../images/checkmark.png')}/>
            </TouchableHighlight>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.profile.userData,
    authToken: state.profile.authToken,
    matched: state.profile.matched
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addSwipe
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
