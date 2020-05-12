/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Baca from './Baca';
import Bantuan from './Bantuan';
import MainMenu from './MainMenu';
import MenuCerita from './MenuCerita';
import Evaluasi from './Evaluasi';
import KomponenEvaluasi from './KomponenEvaluasi';

const Stack = createStackNavigator();

export default class MainRouter extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="MenuCerita">
          <Stack.Screen name='Baca' component={Baca} />
          <Stack.Screen name='Bantuan' component={Bantuan} />
          <Stack.Screen name='MenuCerita' component={MenuCerita} />
          <Stack.Screen name='Evaluasi' component={Evaluasi} />
          <Stack.Screen name='KomponenEvaluasi' component={KomponenEvaluasi} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
