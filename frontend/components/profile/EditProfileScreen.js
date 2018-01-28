import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  TextInput,
  Button,
  View,
  Text,
  Image
} from 'react-native';
import { updateProfile } from '../../actions/ProfileActions'
import styles from '../../stylesheets/LoginStyles'

class EditProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: "",
      github: "",
      phone: "",
      description: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profileSuccess) {
      console.log("success?")
      this.props.changeView("Browse");
    }
  }

  onPressSave() {
    const {skills, github, phone, description} = this.state;
    let userData = {
      "auth_token": this.props.auth_token,
      "skills": skills,
      "contact": {
        "phone": phone,
        "github": github,
      },
      "projects": description, // Description is stored in projects, don't ask why
    }
    this.props.actions.updateProfile(userData);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.mainLogo}
          source={require('../../assets/main-logo.png')}
          resizeMode='contain'/>
        <Text
          style={styles.text}>What languages, frameworks, and tools do you know?</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid='transparent'
          returnKeyType="done"
          blurOnSubmit={true}
          onChangeText={(skills) => this.setState({skills: skills})}/>
        <Text
          style={styles.text}>GitHub Account URL:</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid='transparent'
          returnKeyType="done"
          blurOnSubmit={true}
          onChangeText={(github) => this.setState({github: github})}/>
        <Text style={styles.text}>When you match with someone, we give them your email. You can optionally include you phone number for us to give them as well.</Text>
        <TextInput
          style={styles.textInput}
          returnKeyType="done"
          blurOnSubmit={true}
          underlineColorAndroid='transparent'
          onChangeText={(phone) => this.setState({phone: phone})}/>
        <Text style={styles.text}>Anything you want to tell other hackers?</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid='transparent'
          returnKeyType="done"
          blurOnSubmit={true}
          onChangeText={(description) => this.setState({description: description})}/>
        <Button
          onPress={() => this.onPressSave()}
          title='Save Profile'
          style={styles.bottomButton}/>
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
    profileSuccess: state.profile.profileSuccess
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      updateProfile
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen);
