import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

<<<<<<< Updated upstream
import LoginScreen from './components/login/LoginScreen';
import EntryScreen from './components/login/EntryScreen';
=======
import LoginScreen from './components/login/SignupScreen';
>>>>>>> Stashed changes

const createStoreWithMiddleware = compose(applyMiddleware(thunk)(createStore));
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends React.Component {
  render() {
<<<<<<< HEAD
    return (
      <Provider store={store}>
        <LoginScreen/>
      </Provider>
    )
=======
    return <EntryScreen/>
>>>>>>> entry-screen-layout
    // return (
    //   <View style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //     <Text>Changes you make will automatically reload.</Text>
    //     <Text>Shake your phone to open the developer menu.</Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
