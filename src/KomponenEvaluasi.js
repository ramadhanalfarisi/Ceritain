/* eslint-disable prettier/prettier */
//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// create a component
class KomponenEvaluasi extends Component {
  state = {
    malin_kundang: require('../assets/MalinKundang/BG_MalinKundang.png'),
  };

  componentWillUnmount() {
    this.props.navigation.navigate('Baca');
  }

  render() {
    let {judul} = this.props.route.params;
    let currentBack;
    if (judul == 'MALIN KUNDANG') {
      currentBack = this.state.malin_kundang;
    }
    return (
      <ImageBackground source={currentBack} style={styles.container}>
        <LinearGradient
          colors={['#56AB2F', '#A8E063']}
          style={{
            height: '60%',
            width: '60%',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2c3e50',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Nilai Kamu
          </Text>
          <Text
            style={{
              fontSize: 70,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {this.props.route.params.score}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {this.props.route.params.score == 100
              ? 'Kamu Hebat !'
              : 'Tetap Semangat Ya !'}
          </Text>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 170,
    alignItems: 'center',
  },
});

//make this component available to the app
export default KomponenEvaluasi;
