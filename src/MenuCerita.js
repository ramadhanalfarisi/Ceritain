/* eslint-disable prettier/prettier */
//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ImageScroll from './ImageScroll';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class MenuCerita extends Component {
  constructor() {
    super();
  }
  state = {
    cerita: [
      {
        nama: 'Malin Kundang',
        daerah: 'Sumatera Barat',
        photo: '',
        tags: 'malin_kundang',
      },
      {
        nama: 'Roro Jonggrang',
        daerah: 'Jawa Tengah',
        photo: '',
        tags: 'roro_jonggrang',
      },
      {
        nama: 'Lutung Kasarung',
        daerah: 'Jawa Barat',
        photo: '',
        tags: 'lutung_kasarung',
      },
      {
        nama: 'Keong Mas',
        daerah: 'Jawa Timur',
        photo: '',
        tags: 'keong_mas',
      },
      {
        nama: 'Asal Usul Burung Cendrawasih',
        daerah: 'Papua',
        photo: '',
        tags: 'asal_usul_burung_cendrawasih',
      },
      {
        nama: 'Putri Tandampalik',
        daerah: 'Sulawesi Selatan',
        photo: '',
        tags: 'putri_tandampalik',
      },
    ],
    namaCerita: '',
    daerahCerita: '',
    photoCerita: '',
  };

  baca(tags) {
    this.props.navigation.navigate('Baca', {tags: tags});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              height: '22%',
              width: WIDTH,
              zIndex: 0,
              position: 'absolute',
            }}>
            <LinearGradient
              colors={['#56AB2F', '#A8E063']}
              style={{
                height: '100%',
                width: '100%',
                borderBottomRightRadius: 30,
                borderBottomLeftRadius: 30,
              }}>
              <View
                style={{height: '100%', width: '100%', flexDirection: 'row'}}>
                <View style={{alignSelf: 'center', paddingLeft: 20}}>
                  <Text
                    style={{color: '#fff', fontSize: 30, fontWeight: '700'}}>
                    Ceritain
                  </Text>
                  <Text
                    style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>
                    Temukan berbagai {'\n'}
                    cerita rakyat disini
                  </Text>
                </View>
                <View
                  style={{
                    width: '80%',
                    height: '85%',
                    alignSelf: 'flex-end',
                    paddingRight: 10,
                  }}>
                  <Image
                    source={require('../assets/Home.png')}
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </View>
            </LinearGradient>
          </View>

          <View style={{paddingTop: '45%', paddingBottom: 15}}>
            <View style={{paddingHorizontal: 20}}>
              <FlatList
                data={this.state.cerita}
                renderItem={(item) => {
                  return (
                    <TouchableOpacity
                      onPress={() => this.baca(item.item.tags)}
                      style={{marginBottom: 10}}>
                      <View
                        style={{
                          height: 110,
                          backgroundColor: '#fff',
                          borderRadius: 10,
                          marginTop: 15,
                          flexDirection: 'row',
                          elevation: 1
                        }}>
                        <View
                          style={{alignItems: 'center', paddingVertical: 10}}>
                          <Image
                            source={item.item.photo}
                            style={{
                              width: WIDTH - 230,
                              height: 100,
                              borderRadius: 20,
                            }}
                          />
                        </View>
                        <View
                          style={{paddingHorizontal: 10, alignSelf: 'center'}}>
                          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                            {item.item.nama == 'Asal Usul Burung Cendrawasih'
                              ? 'Asal Usul Burung '
                              : item.item.nama}
                            {item.item.nama == 'Asal Usul Burung Cendrawasih'
                              ? '\nCendrawasih'
                              : ''}
                          </Text>
                          <Text
                            style={{
                              fontSize: 13,
                              fontWeight: 'bold',
                              color: '#828282',
                            }}>
                            {item.item.daerah}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          alignSelf: 'flex-end',
                          bottom: -10,
                          paddingRight: 10,
                        }}>
                        <View
                          style={{
                            height: 35,
                            width: 35,
                            borderRadius: 40,
                            backgroundColor: '#A8E063',
                            alignItems: 'center',
                            justifyContent: 'center',
                            elevation: 1
                          }}>
                          <Image
                            source={require('../assets/arrow-home.png')}
                            style={{width: 15, height: 15}}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F0F1F1',
  },
});

//make this component available to the app
export default MenuCerita;
