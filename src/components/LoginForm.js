import React, {Component, TextInput} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false};
  onButtonPress () {
      const {email, password, error} = this.state;
      //set the error object to empty
      this.setState({error: '', loading: true});
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
        .catch(()=> {
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
            .catch(
              this.onLoginFail.bind(this)
            );
        });
  }

  onLoginFail() {
    this.setState({
      email: '', 
      password: '', 
      error: 'Authentication Failed', 
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '', 
      password: '', 
      error: '', 
      loading: false
    });
  }
  renderButton() {
    if(this.state.loading) {
      return <Spinner size='small' />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }
  render () {
    const {errorMessageStyle} = styles;
    return (
      <Card>

        <CardSection>
          <Input 
            placeholder = 'email@example.com'
            label = 'Email: '
            value = {this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>
         
        <CardSection>
          <Input 
            secureTextEntry
            placeholder = 'password'
            label = 'Password: '
            value = {this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </CardSection>

        <Text style={errorMessageStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

const styles = {
  errorMessageStyle: {
    color: 'red',
    height: 50,
    fontSize: 20,
    alignSelf: 'center'
  }
};

export default LoginForm;
