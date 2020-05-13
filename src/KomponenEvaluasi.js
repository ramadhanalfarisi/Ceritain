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
        <View
          style={{
            height: '30%',
            width: '85%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            elevation: 1
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#575757',
            }}>
            SELAMAT !!
          </Text>
          <Text
            style={{
              fontSize: 16, 
              color: '#575757',
            }}>
            KAMU MENDAPAT NILAI
          </Text>
          <Text
            style={{
              fontSize: 70,
              fontWeight: 'bold',
              color: '#575757',
            }}>
            {this.props.route.params.score}
          </Text>
          
        </View>
      </ImageBackground>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
});

//make this component available to the app
export default KomponenEvaluasi;
