/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainRouter from './src/MainRouter';
import SplashScreen from './src/SplashScreen';

// create a component
class App extends Component {
  state = {
    status: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({status: false});
    }, 2000);
  }
  render() {
    if (this.state.status === true) {
      return (
        <View style={styles.container}>
          <SplashScreen />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <MainRouter />
        </View>
      );
    }
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
