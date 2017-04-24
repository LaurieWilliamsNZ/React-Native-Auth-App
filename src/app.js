import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = ({ loggedin: null });
  componentWillMount () {
    firebase.initializeApp(
      { 
        //private
      });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedin: true });
      } else {
        this.setState({ loggedin: false });
      }
    });
  }

  logOut () {
    this.setState({ loggedin: false });
  }
  renderContent () {
    switch (this.state.loggedin) {
      
      case false:
        return <LoginForm />;
      
      case true:
        return (
          <CardSection>
            <Button 
              onPress={() => firebase.auth().signOut() }>
              Log Out
            </Button>
          </CardSection>);
      
      default:
        return (
          <CardSection>
            <Spinner size='large' />
          </CardSection>
        );
    }
  }
  render () {
    return (
      <View>
        <Header headerText='Authentication' />
          {this.renderContent()}
      </View>
    );
  }
}

export default App;
