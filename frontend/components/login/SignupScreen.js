import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  TextInput,
  Button,
  View,
  Image,
  Text,
  Alert,
} from 'react-native';
import { signup } from '../../actions/ProfileActions'
import styles from '../../stylesheets/LoginStyles'

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emailAddress: "",
      password: "",
      confirmPassword: "",
      university: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.success) {
      this.props.changeView('EditProfileScreen')
    }
  }

  displayAlert(title, message) {
    Alert.alert(
      title,
      message,
      [{text: 'OK', onPress: () => console.log('OK Pressed')},],
      { cancelable: false }
    )
  }

  onPressSetup() {
    const {name, email, password, confirmPassword, university} = this.state;
    if (name === "") {
      this.displayAlert('Missing Field', 'Please enter your name')
      return;
    } else if (email === "") {
      this.displayAlert('Missing Field', 'Please enter your email address')
      return;
    } else if (password === "") {
      this.displayAlert('Missing Field', 'Please enter a password')
      return;
    } else if (confirmPassword === "") {
      this.displayAlert('Missing Field', 'Please confirm your password')
      return;
    } else if (university === "") {
      this.displayAlert('Missing Field', 'Please enter your university')
      return;
    }
    if (password !== confirmPassword) {
      this.displayAlert('Password mismatch', 'Your passwords do not match each other')
      return;
    }

    let userData = {
      "email": email,
      "name": name,
      "password": password,
      "universty": university,
    }
    this.props.actions.signup(userData);
  }

  render() {
    // TODO https://medium.freecodecamp.org/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580
    return (
      <View style={styles.container}>
        <Image
          style={styles.mainLogo}
          source={require('../../assets/main-logo.png')}
          resizeMode='contain'/>
        <Text
          style={styles.text}>Name:</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid='transparent'
          returnKeyType="done"
          blurOnSubmit={true}
          onChangeText={(name) => this.setState({name: name})}/>
        <Text
          style={styles.text}>Email Address:</Text>
        <TextInput
          style={styles.email}
          underlineColorAndroid='transparent'
          returnKeyType="done"
          blurOnSubmit={true}
          onChangeText={(email) => this.setState({email: email})}/>
        <Text style={styles.text}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.password}
          underlineColorAndroid='transparent'
          returnKeyType="done"
          blurOnSubmit={true}
          onChangeText={(password) => this.setState({password: password})}/>
        <Text style={styles.text}>Confirm Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.password}
          underlineColorAndroid='transparent'
          returnKeyType="done"
          blurOnSubmit={true}
          onChangeText={(password) => this.setState({confirmPassword: password})}/>
        <Text
          style={styles.text}>University:</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid='transparent'
          returnKeyType="done"
          blurOnSubmit={true}
          onChangeText={(university) => this.setState({university: university})}/>
        <Button
          onPress={() => this.onPressSetup()}
          title='Setup Account'
          style={styles.loginButton}/>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.profile.userData,
    auth_token: state.profile.auth_token,
    success: state.profile.success,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      signup
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
