/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F0F1F1'}}>
        <View style={{width: '100%', height: '100%'}}>
          <Image
            source={require('../assets/logo-splash-01.png')}
            style={{
              height: null,
              width: null,
              flex: 1,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    );
  }
}
