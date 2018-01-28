import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  TextInput,
  Button,
  View,
  Text
} from 'react-native';
import styles from '../../stylesheets/LoginStyles'

export default class EditProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: "",
      github: "",
      phone: "",
      description: "",
    };
  }

  onPressSave() {
    const {skills, github, phone, description} = this.state;
    let userData = {
      "skills": skills,
      "github": github,
      "phone": phone,
      "description": description,
    }
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
          onChangeText={(skills) => this.setState({skills: skills})}/>
        <Text
          style={styles.text}>GitHub Account URL:</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid='transparent'
          onChangeText={(github) => this.setState({github: github})}/>
        <Text style={styles.text}>When you match with someone, we give them your email. You can optionally include you phone number for us to give them as well.</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          underlineColorAndroid='transparent'
          onChangeText={(phone) => this.setState({phone: phone})}/>
        <Text style={styles.text}>Anything you want to tell other hackers?</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          underlineColorAndroid='transparent'
          onChangeText={(description) => this.setState({description: description})}/>
        <Button
          onPress={() => this.onPressSave()}
          title='Save Profile'
          style={styles.bottomButton}/>
      </View>
    );
  }

  render() {
    return (
      <View></View>
    )
  }
}
