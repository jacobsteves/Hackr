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
import { addSwipe, getCards } from '../../actions/ProfileActions'
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
      position: 0,
      cards: []
    };
  }

  componentDidMount() {
    console.log("mounted!");
    let userData = {
      'auth_token': this.props.auth_token
    }
    this.props.actions.getCards(userData);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.matched) {
      this.setState({ modalVisible: true });
    }
    if (nextProps.cards !== this.state.cards) {
      this.setState({ cards: nextProps.cards });
      console.log(nextProps.cards)
    }
  }

  onPressAccept() {
    console.log('Accepted ' + this.state.swipeeId);
    console.log('userDataID:' + this.props.userData.id);
    let pos = this.state.position;
    let json = {
      'auth_token': this.props.auth_token,
      'swiper_id': this.props.userData.id,
      'swipee_id': this.state.cards[pos].id,
      'hackathon_id': 0,
      'said_yes': 1,
    }
    this.props.actions.addSwipe(json);
    this.setState({
      position: pos + 1
    });
    if (pos + 1 === this.state.cards.length) {
      let auth = {
        "auth_token": this.props.auth_token,
      };
      this.setState({
        position: 0
      });
      this.props.actions.getCards(auth);
    }
  }

  onPressDeny() {
    console.log('Denied ' + this.state.swipeeId);
    console.log('userDataID:' + this.props.userData.id);
    let json = {
      'auth_token': this.props.auth_token,
      'swiper_id': this.props.userData.id,
      'swipee_id': this.state.cards[this.state.position].id,
      'hackathon_id': 0,
      'said_yes': 0,
    }
    this.props.actions.addSwipe(json);
    this.setState({
      position: this.state.position++
    });

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
        {this.state.cards.length > 0 &&
          <View>
            <View style={styles.line}/>
            <Text
              style={[styles.name, styles.centerText]}
              numberOfLines={2}
              minimumFontScale={0.01}>{this.state.cards[this.state.position].name}</Text>
              <View style={styles.line}/>
            <ScrollView>
                <Text
                  style={styles.header}>
                  More Info</Text>
              <Text
                style={styles.bio}>{this.state.cards[this.state.position].projects}</Text>

              <Text
                  style={styles.header}>
                  Skills</Text>
              <Text
                style={styles.bio}>{this.state.cards[this.state.position].skills}</Text>

              <Text
                  style={styles.header}>
                  GitHub</Text>
              <Text
                style={styles.bio}>{this.state.cards[this.state.position].contact.github}</Text>
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
        }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.profile.userData,
    auth_token: state.profile.auth_token,
    matched: state.profile.matched,
    cards: state.profile.cards
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      addSwipe,
      getCards
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
