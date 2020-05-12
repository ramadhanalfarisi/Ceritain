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
      <View style={{flex:1}}>
        <ImageBackground
          source={require('../assets/RoroJonggrang/BG_RoroJonggrang.png')}
          style={{flex: 1, paddingTop: 60}}>
            <View style={{alignItems: 'center', paddingTop: 20}}>
              <View style={{width: 100, height: 100}}>
                <Image
                  style={{
                    height: null,
                    width: null,
                    flex: 1,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: 20,
                  color: '#fff',
                  fontWeight: '700',
                  paddingTop: 10,
                  width: 100,
                  textAlign: 'center'
                }}>
                Ceritain
              </Text>
            </View>
        </ImageBackground>
      </View>
    );
  }
}
