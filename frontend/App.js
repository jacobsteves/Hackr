import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

import LoginScreen from './components/login/LoginScreen';
import EntryScreen from './components/login/EntryScreen';
import SignupScreen from './components/login/SignupScreen';
import EditProfileScreen from './components/profile/EditProfileScreen';
<<<<<<< HEAD
import MatchesScreen from './components/profile/MatchesScreen';
=======
import Browse from './components/swiping/Browse';
>>>>>>> master

const createStoreWithMiddleware = compose(applyMiddleware(thunk)(createStore));
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "MatchesScreen",
    };
  }

  changeView(view) {
      this.setState({
        currentView: view
      });
  }

  render() {
    const { currentView } = this.state;

    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          {(currentView == "EntryScreen") &&
            <EntryScreen changeView={(view) => this.changeView(view)} />
          }
          {(currentView == "EditProfileScreen") &&
            <EditProfileScreen changeView={(view) => this.changeView(view)} />
          }
          {(currentView == "SignupScreen") &&
            <SignupScreen changeView={(view) => this.changeView(view)} />
          }
          {(currentView == "LoginScreen") &&
            <LoginScreen changeView={(view) => this.changeView(view)} />
          }
<<<<<<< HEAD
          {(currentView == "MatchesScreen") &&
            <MatchesScreen changeView={(view) => this.changeView(view)} />
=======
          {(currentView == "Browse") &&
            <Browse changeView={(view) => this.changeView(view)} />
>>>>>>> master
          }
        </View>
      </Provider>
    );
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
