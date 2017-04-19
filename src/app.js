import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount () {
    firebase.initializeApp(
      {
        //private
      });
  }
  render () {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text>This is an app</Text>
      </View>
    );
  }
}

export default App;
