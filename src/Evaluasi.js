/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class Evaluasi extends Component {
  constructor() {
    super();
    this.scrolling = this.scrolling.bind(this);
  }

  state = {
    malin_kundang: {
      content: [
        {
          question: 'Apa pekerjaan sehari-hari ibu Malin Kundang?',
          answer: [
            {
              opsi: 'A',
              content: 'Nelayan',
              jawaban: true,
            },
            {
              opsi: 'B',
              content: 'Peternak',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Petani',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Buruh',
              jawaban: false,
            },
          ],
        },
        {
          question: 'Mengapa Malin Kundang ingin merantau ke kota?',
          answer: [
            {
              opsi: 'A',
              content: 'Bermain',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Mencari ayah',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Untuk mengubah nasib',
              jawaban: true,
            },
            {
              opsi: 'D',
              content: 'Untuk mencari ilmu kesaktian',
              jawaban: false,
            },
          ],
        },
        {
          question: 'Malin Kundang merupakan seorang yang …',
          answer: [
            {
              opsi: 'A',
              content: 'Malas',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Bodoh',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Pendiam',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Rajin dan pekerja keras',
              jawaban: true,
            },
          ],
        },
        {
          question: 'Bagaimana Malin Kundang bisa pergi ke kota?',
          answer: [
            {
              opsi: 'A',
              content: 'Berlayar dengan kapal',
              jawaban: true,
            },
            {
              opsi: 'B',
              content: 'Mengendarai sepeda',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Jalan kaki',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Naik kuda',
              jawaban: false,
            },
          ],
        },
        {
          question: 'Ibu Malin Kundang mengutuk anaknya menjadi apa?',
          answer: [
            {
              opsi: 'A',
              content: 'Binatang',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Pohon',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Danau',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Batu',
              jawaban: true,
            },
          ],
        },
      ],
      back: require('../assets/MalinKundang/BG_MalinKundang.png'),
    },
    roro_jonggrang: {
      content: [
        {
          question: 'Siapakah nama ayah dari Roro Jonggrang?',
          answer: [
            {
              opsi: 'A',
              content: 'Prabu Baka',
              jawaban: true,
            },
            {
              opsi: 'B',
              content: 'Prabu Arjuna',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Raja Pengging',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Bandung Bondowoso',
              jawaban: false,
            },
          ],
        },
        {
          question:
            'Prabu Baka tewas di medan perang, siapa yang membunuh Prabu Baka?',
          answer: [
            {
              opsi: 'A',
              content: 'Roro Jonggrang',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Lutung Kasarung',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Prabu Damar Maya',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Bandung Bondowoso',
              jawaban: false,
            },
          ],
        },
        {
          question: 'Kenapa Bandung Bondowoso tidak membunuh Roro Jonggrang?',
          answer: [
            {
              opsi: 'A',
              content: 'Karena dia anaknya',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Karena dia ingin menikahinya',
              jawaban: true,
            },
            {
              opsi: 'C',
              content: 'Roro Jonggrang sudah membantunya',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Karena Roro Jonggrang mencintainya',
              jawaban: false,
            },
          ],
        },
        {
          question:
            'Apa syarat yang diajukan Roro Jonggrang sebelum Bandung Bondowoso bisa menikahinya?',
          answer: [
            {
              opsi: 'A',
              content: 'Membuat 1.000 candi dan dua sumur dalam waktu semalam',
              jawaban: true,
            },
            {
              opsi: 'B',
              content: 'Bandung Bondowoso harus menyerahkan semua kekayaannya',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Mengelilingi Nusantara dalam waktu semalam',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Tidak ada syarat',
              jawaban: false,
            },
          ],
        },
        {
          question:
            'Dalam memenuhi syarat agar bisa menikahi Roro Jonggrang, Bandung Bondowoso meminta bantuan siapa?',
          answer: [
            {
              opsi: 'A',
              content: 'Prabu Baka',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Makhluk halus',
              jawaban: true,
            },
            {
              opsi: 'C',
              content: 'Rakyat Prambanan',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Mengerjakan sendiri',
              jawaban: false,
            },
          ],
        },
      ],
      back: require('../assets/RoroJonggrang/BG_RoroJonggrang.png'),
    },
    lutung_kasarung: {
      content: [
        {
          question: 'Cerita Lutung Kasarung berasal dari daerah ...  ',
          answer: [
            {
              opsi: 'A',
              content: 'Aceh',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Sulawesi',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Jawa Barat',
              jawaban: true,
            },
            {
              opsi: 'D',
              content: 'Kalimantan',
              jawaban: false,
            },
          ],
        },
        {
          question:
            'Pada zaman dahulu di Pasundan, berdiri sebuah kerajaan yang dipimpin oleh seorang raja bernama ...',
          answer: [
            {
              opsi: 'A',
              content: 'Prabu Baka',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Dewi Galuh',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Prabu Tapak Agung',
              jawaban: true,
            },
            {
              opsi: 'D',
              content: 'Bandung Bondowoso',
              jawaban: false,
            },
          ],
        },
        {
          question: 'Siapakah nama dari kedua putri Prabu Tapak Agung?',
          answer: [
            {
              opsi: 'A',
              content: 'Purbararang dan Purbasari',
              jawaban: true,
            },
            {
              opsi: 'B',
              content: 'Purbasari dan Candra Kirana',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Lutung Kasarung dan Purbasari',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Purbararang dan Lutung Kasarung',
              jawaban: false,
            },
          ],
        },
        {
          question: 'Bagaimana sifat dari Purbararang ...',
          answer: [
            {
              opsi: 'A',
              content: 'Suka membantu',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Bijaksana',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Rajin',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Jahat',
              jawaban: true,
            },
          ],
        },
        {
          question: 'Lutung Kasarung dalam cerita ini menjelma sebagai ...',
          answer: [
            {
              opsi: 'A',
              content: 'Seekor kera hitam',
              jawaban: true,
            },
            {
              opsi: 'B',
              content: 'Seekor kelinci',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Seekor semut',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Seekor tupai',
              jawaban: false,
            },
          ],
        },
      ],
      back: require('../assets/LutungKasarung/BG_LutungKasarung.png'),
    },
    keong_mas: {
      content: [
        {
          question: 'Cerita Keong Mas berasal dari daerah ...',
          answer: [
            {
              opsi: 'A',
              content: 'Bali',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Papua',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Sulawesi',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Jawa Timur',
              jawaban: true,
            },
          ],
        },
        {
          question:
            'Tokoh antagonis (berwatak jahat) pada cerita Keong Mas adalah ...',
          answer: [
            {
              opsi: 'A',
              content: 'Dewi galuh dan Penyihir',
              jawaban: true,
            },
            {
              opsi: 'B',
              content: 'Pangeran Inu dan Dewi Galuh',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Candra Kirana dan Dewi Galuh',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Pangeran Inu dan Candra Kirana',
              jawaban: false,
            },
          ],
        },
        {
          question: 'Siapa sebenarnya Keong Mas itu ?',
          answer: [
            {
              opsi: 'A',
              content: 'Penyihir',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Dewi Galuh',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Pangeran Inu',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Candra Kirana',
              jawaban: true,
            },
          ],
        },
        {
          question: 'Bagaimanakah sifat Candra Kirana?',
          answer: [
            {
              opsi: 'A',
              content: 'Licik',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Jahat',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Sombong',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Sangat baik dan tidak sombong',
              jawaban: true,
            },
          ],
        },
        {
          question: 'Siapa yang menemukan keong mas di sungai?',
          answer: [
            {
              opsi: 'A',
              content: 'Penyihir',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Dewi Galuh',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Sang nenek',
              jawaban: true,
            },
            {
              opsi: 'D',
              content: 'Pangeran Inu',
              jawaban: false,
            },
          ],
        },
      ],
      back: require('../assets/KeongMas/BG_KeongMas.png'),
    },
    putri_tandampalik: {
      content: [
        {
          question: 'Kerajaan Luwu dipimpin oleh seorang datu bernama ...',
          answer: [
            {
              opsi: 'A',
              content: 'Datu Luwu',
              jawaban: true,
            },
            {
              opsi: 'B',
              content: 'Raja Bone',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Raja Luwu',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Datu Aji',
              jawaban: false,
            },
          ],
        },
        {
          question: 'Datu Luwu memiliki putri yang cantik bernama ...',
          answer: [
            {
              opsi: 'A',
              content: 'Purbasari',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Dewi Galuh',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Putri Kirana',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Putri Tandampalik',
              jawaban: true,
            },
          ],
        },
        {
          question: 'Cerita Putri Tandampalik berasal dari daerah',
          answer: [
            {
              opsi: 'A',
              content: 'Sumatra',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Sulawesi',
              jawaban: true,
            },
            {
              opsi: 'C',
              content: 'Papua',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Jawa',
              jawaban: false,
            },
          ],
        },
        {
          question:
            'Putri Tandampalik diasingkan di suatu pulau yang bernama ...',
          answer: [
            {
              opsi: 'A',
              content: 'Pulau Samosir',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Pulau Luwu',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Pulau Jawa',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Pulau Wajo',
              jawaban: true,
            },
          ],
        },
        {
          question: 'Bagaimana karakter sifat dari Putri Tandampalik ...',
          answer: [
            {
              opsi: 'A',
              content: 'Jahat',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Sombong',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Pemarah',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Baik hati dan ikhlas',
              jawaban: true,
            },
          ],
        },
      ],
      back: require('../assets/PutriTandamPalik/BG_PutriTandamPalik.png'),
    },
    asal_usul_burung_cendrawasih: {
      content: [
        {
          question:
            'Tokoh utama pada cerita Asal Usul Burung Cendrawasih adalah ...',
          answer: [
            {
              opsi: 'A',
              content: 'Roro Jonggrang',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Malin Kundang',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Prabu Baka',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Kweiya',
              jawaban: true,
            },
          ],
        },
        {
          question: 'Kweiya merupakan anak yang ...',
          answer: [
            {
              opsi: 'A',
              content: 'Rajin dan sabar',
              jawaban: true,
            },
            {
              opsi: 'B',
              content: 'Pemalas',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Durhaka',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Bodoh',
              jawaban: false,
            },
          ],
        },
        {
          question:
            'Cerita asal usul burung Cendrawasih berasal dari daerah ...',
          answer: [
            {
              opsi: 'A',
              content: 'Jawa Timur',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: 'Kalimantan',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Sumatra',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Papua',
              jawaban: true,
            },
          ],
        },
        {
          question: 'Kweiya memiliki berapa saudara?',
          answer: [
            {
              opsi: 'A',
              content: '5 adik laki laki',
              jawaban: false,
            },
            {
              opsi: 'B',
              content: '3 kakak perempuan',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Tidak memiliki saudara',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: '2 adik laki laki dan 1 adik perempuan',
              jawaban: true,
            },
          ],
        },
        {
          question: 'Mengapa kedua adik laki-laki Kweiya menyerang Kweiya? ',
          answer: [
            {
              opsi: 'A',
              content: 'Mereka iri dengan kakaknya',
              jawaban: true,
            },
            {
              opsi: 'B',
              content: 'Kweiya menantang mereka',
              jawaban: false,
            },
            {
              opsi: 'C',
              content: 'Mereka disuruh ibunya',
              jawaban: false,
            },
            {
              opsi: 'D',
              content: 'Hanya bercanda',
              jawaban: false,
            },
          ],
        },
      ],
      back: require('../assets/AsalUsulCendrawaih/BG_Cendrawasih.png'),
    },
    currentPosition: 0,
    score: 0,
    warna: '#3C6382',
  };

  scrolling() {
    const position = (this.state.currentPosition += 360);
    this.ticker.scrollTo({x: position, animated: true});
  }

  notif(status) {
    let total = this.state.score;
    this.scrolling();
    setTimeout(() => {
      if (status === true) {
        this.setState({score: total + 20});
      }
    },10);
  }

  notifTerakhir(status, judul) {
    if (status === true) {
      this.props.navigation.navigate('KomponenEvaluasi', {
        score: this.state.score + 20,
        judul: judul,
      });
    } else {
      this.props.navigation.navigate('KomponenEvaluasi', {
        score: this.state.score,
        judul: judul,
      });
    }
  }

  render() {
    let currentQuiz;
    const {judul} = this.props.route.params;
    if (judul == 'MALIN KUNDANG') {
      currentQuiz = this.state.malin_kundang;
    } else if (judul == 'RORO JONGGRANG') {
      currentQuiz = this.state.roro_jonggrang;
    } else if (judul == 'LUTUNG KASARUNG') {
      currentQuiz = this.state.lutung_kasarung;
    } else if (judul == 'KEONG MAS') {
      currentQuiz = this.state.keong_mas;
    } else if (judul == 'PUTRI TANDAMPALIK') {
      currentQuiz = this.state.putri_tandampalik;
    } else {
      currentQuiz = this.state.asal_usul_burung_cendrawasih;
    }
    return (
      <ImageBackground source={currentQuiz.back} style={styles.container}>
        <View style={{paddingTop: 25, alignItems: 'center'}}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled={false}
            ref={(ref) => (this.ticker = ref)}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={this.setSelectedIndex}
            style={{zIndex: 1}}
            contentContainerStyle={{justifyContent: 'space-between'}}>
            {currentQuiz.content.map((item, index) => {
              if (index >= 0 && index !== currentQuiz.content.length - 1) {
                return (
                  <View style={{paddingHorizontal: 25}}>
                    <View
                      style={{
                        height: '100%',
                        width: WIDTH - 50,
                        borderRadius: 10,
                        paddingVertical: 25,
                        alignItems: 'center',
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <View
                          style={{
                            width: WIDTH - 75,
                            height: '50%',
                            justifyContent: 'center',
                            paddingHorizontal: 10,
                          }}>
                          <Text
                            style={{
                              color: '#575757',
                              fontSize: 20,
                              fontWeight: 'bold',
                              textAlign: 'center',
                            }}>
                            {item.question}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 10,
                          justifyContent: 'flex-end',
                        }}>
                        <FlatList
                          data={item.answer}
                          renderItem={(item2) => {
                            return (
                              <TouchableOpacity
                                onPress={() => this.notif(item2.item.jawaban)}>
                                <View
                                  style={{
                                    width: '100%',
                                    height: 50,
                                    marginTop: 10,
                                    flexDirection: 'row',
                                    
                                  }}>
                                  <View
                                    style={{
                                      width: '15%',
                                      height: '100%',
                                      backgroundColor: '#A8E063',
                                      justifyContent: 'center',
                                      borderTopLeftRadius: 10,
                                      borderBottomLeftRadius: 10,
                                      elevation: 1
                                    }}>
                                    <Text
                                      style={{
                                        color: '#fff',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                      }}>
                                      {item2.item.opsi}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      width: '85%',
                                      height: '100%',
                                      backgroundColor: '#fff',
                                      justifyContent: 'center',
                                      borderTopRightRadius: 10,
                                      borderBottomRightRadius: 10,
                                      paddingHorizontal: 5,
                                      elevation: 1
                                    }}>
                                    <Text
                                      style={{
                                        color: '#575757',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                      }}>
                                      {item2.item.content.toUpperCase()}
                                    </Text>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            );
                          }}
                        />
                      </View>
                    </View>
                  </View>
                );
              } else {
                return (
                  <View style={{paddingHorizontal: 25}}>
                    <View
                      style={{
                        height: '100%',
                        width: WIDTH - 50,
                        borderRadius: 10,
                        paddingVertical: 25,
                        alignItems: 'center',
                      }}>
                      <View style={{alignItems: 'center'}}>
                        <View
                          style={{
                            width: WIDTH - 75,
                            height: '50%',
                            justifyContent: 'center',
                            paddingHorizontal: 10,
                          }}>
                          <Text
                            style={{
                              color: '#575757',
                              fontSize: 20,
                              fontWeight: 'bold',
                              textAlign: 'center',
                            }}>
                            {item.question}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          paddingHorizontal: 10,
                          paddingVertical: 10,
                          justifyContent: 'flex-end',
                        }}>
                        <FlatList
                          data={item.answer}
                          renderItem={(item2) => {
                            return (
                              <TouchableOpacity
                                onPress={() =>
                                  this.notifTerakhir(item2.item.jawaban, judul)
                                }>
                                <View
                                  style={{
                                    width: '100%',
                                    height: 50,
                                    marginTop: 10,
                                    flexDirection: 'row',
                                  }}>
                                  <View
                                    style={{
                                      width: '15%',
                                      height: '100%',
                                      backgroundColor: '#A8E063',
                                      justifyContent: 'center',
                                      borderTopLeftRadius: 10,
                                      borderBottomLeftRadius: 10,
                                      elevation: 1
                                    }}>
                                    <Text
                                      style={{
                                        color: '#fff',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                      }}>
                                      {item2.item.opsi}
                                    </Text>
                                  </View>
                                  <View
                                    style={{
                                      width: '85%',
                                      height: '100%',
                                      backgroundColor: '#fff',
                                      justifyContent: 'center',
                                      borderTopRightRadius: 10,
                                      borderBottomRightRadius: 10,
                                      paddingHorizontal: 5,
                                      elevation: 1
                                    }}>
                                    <Text
                                      style={{
                                        color: '#575757',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                      }}>
                                      {item2.item.content.toUpperCase()}
                                    </Text>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            );
                          }}
                        />
                      </View>
                    </View>
                  </View>
                );
              }
            })}
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C6382',
  },
});

//make this component available to the app
export default Evaluasi;
