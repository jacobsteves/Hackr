import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  TextInput,
  Button,
  View,
  Text
} from 'react-native';
import { login, signup } from '../../actions/ProfileActions'
import styles from '../../stylesheets/LoginStyles'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onPressLogin() {
    // Do the login
    const { email, password } = this.state;
    console.log(email);
    console.log(password);
    let userData = {
      "email": email,
      "name": "Jacob Steves",
      "password": password
    }
    this.props.actions.login(userData);
    // Hash stuff,
  }

  render() {
    return (
      <View style={styles.container}>

        <Text
          style={styles.text}>Email Address:</Text>
        <TextInput
          style={styles.email}
          underlineColorAndroid='transparent'
          onChangeText={(email) => this.setState({email: email})}/>
        <Text style={styles.text}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.password}
          underlineColorAndroid='transparent'
          onChangeText={(password) => this.setState({password: password})}/>
        <Button
          onPress={() => this.onPressLogin()}
          title='Login'
          style={styles.loginButton}> </Button>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.profile.userData,
    authToken: state.profile.authToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      login,
      signup
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
