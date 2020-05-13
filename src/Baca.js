/* eslint-disable prettier/prettier */
//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PageBaca from './PageBaca';
import SoundPlayer from 'react-native-sound-player';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;
// create a component
class Baca extends Component {
  constructor() {
    super();
    // this.scrolling = this.scrolling.bind(this);
  }

  state = {
    cerita: {
      malin_kundang: {
        content: [
          {
            fill: [
              'Di sebuah desa, hiduplah seorang perempuan miskin bersama anak tunggalnya yang bernama Malin Kundang. Sehari-hari perempuan itu bekerja sebagai nelayan, penghasilannya tidak bisa mencukupi kebutuhan mereka sehari-hari sehingga hidup mereka selalu kekurangan.',
              'Saat Malin mulai dewasa, ia memutuskan untuk pergi ke kota untuk mengadu nasib."Barangkali dengan pergi ke kota, aku bisa mengubah nasib kita Ibu," ucap Malin. Sebenarnya, ibu Malin Kundang tak setuju. Tapi, tekad Malin Kundang sudah bulat. Ibu Malin Kundang pun tak bisa mencegah anaknya itu.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/MalinKundang/Halaman1.png'),
          },
          {
            fill: [
              'Malin Kundang merantau dengan menumpang sebuah kapal milik saudagar kaya raya, selama di atas kapal Malin belajar banyak kepada para awak kapal.Namun di tengah laut, tiba-tiba badai besar datang. Kapal yang dinaiki Malin Kundang pun terhempas ombak besar, beruntung, Malin selamat. Ia terdampar di sebuah pulau yang sangat subur.',
              'Malin Kundang adalah anak yang rajin, ia bekerja dengan tekun di pulau itu. Beberapa bulan kemudian berkat kerja keras, Malin Kundang menjadi orang kaya, ia bisa membeli banyak kapal.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/MalinKundang/Halaman2.png'),
          },
          {
            fill: [
              'Malin Kundang yang sudah menjadi kaya pun melamar seorang gadis yang cantik. Malin Kundang hidup bahagia bersama istrinya, sayangnya, ia justru lupa dengan ibunya.Suatu hari Malin Kundang mengajak istrinya untuk berlayar bersama, Istrinya pun merasa senang.Sesampai di pelabuhan mereka disambut oleh ibunya "Malin Kundang Anakku " panggil ibu Malin.',
              '"Siapa perempuan tua itu? Apakah ia ibumu?" tanya istri Malin Kundang."Bukan, ibuku sudah meninggal. Ia hanya seorang pengemis," sahut Malin Kundang. Mendengar ucapan Malin Kundang. Ibu Malin Kundang marah, sungguh, hatinya sangat sakit mengetahui anaknya telah durhaka.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/MalinKundang/Halaman3.png'),
          },
          {
            fill: [
              '"Sungguh durhaka kau Malin, kau tak mau menganggapku sebagai Ibumu. Aku kutuk kau menjadi batu!" seru ibu Malin.',
              'Tiba-tiba datanglah badai yang dahsyat, badai itu menghantam kapal Malin hingga hancur, di tengah kepanikan, tubuh Malin Kundang menjadi kaku dan mengeras menjadi sebuah batu.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/MalinKundang/Halaman4.png'),
          },
          {
            fill: [
              'Rajin dan tekun akan mewujudkan sebuah impian yang diinginkan, dan jangan lupa kepada kedua orang tua.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/MalinKundang/Halaman4.png'),
          },
        ],
        back: require('../assets/MalinKundang/BG_MalinKundang.png'),
      },
      roro_jonggrang: {
        content: [
          {
            fill: [
              'Dahulu kala, di desa Prambanan, ada sebuah kerajaan yang dipimpin oleh Prabu Baka. Prabu Baka memiliki seorang putri yang sangat cantik bernama Roro Jonggrang. Rakyat Prambanan begitu damai serta makmur. Suatu ketika, Prambanan dikalahkan oleh Kerajaan Pengging yang dipimpin oleh Bandung Bondowoso. Prabu Baka tewas di medan perang, dia terbunuh oleh Bandung Bondowoso yang sangat sakti.',
              'Bandung Bondowoso kemudian menempati Istana Prambanan, melihat putri Roro Jonggrang yang cantik jelita, timbul keinginannya untuk menikahi Roro Jonggrang.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/RoroJonggrang/halaman1.png'),
          },
          {
            fill: [
              'Roro Jonggrang tahu bahwa Bandung Bondowoso adalah orang yang membunuh ayahnya. Karena itu, ia mencari akal untuk menolaknya, lalu ia mengajukan syarat dibuatkan 1.000 buah candi dan dua buah sumur yang dalam, semuanya harus selesai dalam semalam.',
              'Bandung Bondowoso menyanggupi persyaratan Roro Jonggrang, ia meminta pertolongan kepada ayahnya dan mengerahkan balatentara roh-roh halus untuk membantu pada hari yang ditentukan. Pukul empat pagi, hanya tinggal lima buah candi yang belum selesai dan kedua sumur hampir selesai.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/RoroJonggrang/Halaman2.png'),
          },
          {
            fill: [
              'Mengetahui 1.000 candi telah hampir selesai, Roro Jonggrang ketakutan. "Apa yang harus kulakukan untuk menghentikannya?" pikirnya cemas membayangkan ia harus menikah dengan Bandung Bondowoso yang telah membunuh orangtuanya.',
              'Akhirnya, ia pergi membangunkan gadis-gadis di desa Prambanan dan memerintahkan untuk menghidupkan obor-obor dan membakar jerami, memukulkan alu pada lesung, dan menaburkan bunga-bunga yang harum. Suasana saat itu menjadi terang dan riuh, semburat merah memancar di langit dengan seketika.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/RoroJonggrang/Halaman3.png'),
          },
          {
            fill: [
              'Ayam jantan pun berkokok bersahut-sahutan, mendengar suara itu, para roh halus segera meninggalkan pekerjaan. Mereka menyangka hari telah pagi dan matahari akan segera terbit. Pada saat itu hanya tinggal satu sebuah candi yang belum dibuat.',
              'Bandung Bondowoso sangat terkejut dan marah menyadari usahanya telah gagal. Dalam amarahnya, Bandung Bondowoso mengutuk Roro Jonggrang menjadi sebuah arca untuk melengkapi sebuah buah candi yang belum selesai. Hingga kini, candi tersebut disebut dengan Candi Roro Jonggrang.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/RoroJonggrang/Halaman4.png'),
          },
          {
            fill: [
              'Jangan memaksakan kehendak kita kepada orang lain, hormati apa yang menjadi keinginan orang lain. Kita pun tidak akan suka jika dipaksa mengerjakan pekerjaan yang tidak kita sukai dan jangan menjadi orang yang curang dalam mewujudkan sebuah keinginan.',
            ],
            color: '#575757',
            lagu: 'par1',
          },
        ],
        back: require('../assets/RoroJonggrang/BG_RoroJonggrang.png'),
      },
      asal_usul_burung_cendrawasih: {
        content: [
          {
            fill: [
              'Pada zaman dahulu hiduplah seorang perempuan tua bersama anjing betina, suatu hari mereka sedang mencari makanan di hutan. Hari itu, mereka harus berjalan cukup jauh karena persediaan makanan di sekitar rumah sudah mulai berkurang. Setelah berjalan cukup jauh, mereka tiba di suatu tempat yang dipenuhi oleh pohon buah merah yang kebetulan telah berbuah. Perempuan tua itu segera memetik buah merah lalu memakannya bersama dengan anjingnya.',
              'Namun, beberapa saat kemudian, tiba-tiba perut anjing betina itu semakin membesar seperti sedang bunting. Ajaib, hanya dalam waktu yang tidak lama, anjing betina itu melahirkan seekor anak anjing yang mungil. Beberapa saat kemudian tiba-tiba sang perempuan juga mengalami hal yang sama dan melahirkan seorang anak yang ia beri nama Kweiya.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/AsalUsulCendrawaih/Halaman1.png'),
          },
          {
            fill: [
              'Sepuluh tahun kemudian, Kweiya tumbuh menjadi remaja yang sangat rajin membantu ibunya bekerja dengan membuka hutan untuk dijadikan kebun sayur. Sementara itu, ibunya hanya bisa membantu membakar daun-daun dari pohon yang telah rebah. Akibatnya, asap tebal pun mengepul dan membumbung tinggi ke udara. Tanpa mereka sadari, ternyata asap tebal tersebut telah menarik perhatian seorang pria tua yang sedang mengail di sebuah sungai.',
              'Oleh karena penasaran, pria tua itu segera mencari sumber asap tebal tersebut. Lalu ia bertemu dengan Kweiya. “Selamat siang  anak muda… Siapa kamu dan mengapa menebang hutan di sini?” Sapa pria tua itu. “Nama saya Kweiya. Saya ingin membuat kebun untuk membantu ibu saya” jawab Kweiya. Pria tua itu mengerti bahwa Kweiya adalah anak yang berbakti kepada orang tua. Maka, ia pun memberikan kapak besinya kepada Kweiya.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/AsalUsulCendrawaih/Halaman2.png'),
          },
          {
            fill: [
              'Kweiya pun mengajak pria tersebut ke rumah sesampai dirumah Kweiya menceritakan ke ibunya karena pria tersebut sudah membantunya. Kweiya mengajak pria tersebut tinggal bersama mereka lalu pria tersebut menerima ajakan Kweiya. Mereka bertiga pun hidup bersama, seiring berjalannya waktu Kweiya memiliki 2 adik laki laki dan 1 adik perempuan, dia merasa sangat gembira.',
              'Tetapi kedua adik laki laki Kweiya iri karena mereka merasa kedua orang tuanya hanya selalu memperhatikan Kweiya saja. Suatu hari, ketika kedua orang tua mereka sedang ke kebun, tiba-tiba kedua adiknya mengeroyok Kweiya hingga luka-luka. Kweiya hanya pasrah karena tidak tega menyerang adik-adiknya. Setelah itu Kweiya pun memintal benang dari kulit pohon dan bermaksud untuk membuat sepasang sayap.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/AsalUsulCendrawaih/Halaman3.png'),
          },
          {
            fill: [
              'Ibu Kweiya pun pulang dari kebun, sang ibu tidak melihat Kweiya di rumah dan ia mulai gelisah karena hari sudah malam. Adik perempuan Kweiya menceritakan kepada ibunya apa yang sebenarnya terjadi. Ibu Kweiya bersedih dan langsung mencari Kweiya di hutan, sang ibu berteriak memanggil Kweiya. Namun bukan Kweiya yang menjawab tetapi seekor burung yang menjawab. Ternyata Kweiya telah berubah menjadi burung yang sangat cantik.',
              'Sang ibu menangis saat melihat Kweiya menjadi burung, sang ibu pun meminta benang pintalan kepada Kweiya. Kweiya memberikan benang pintalan kepada ibunya, lalu sang ibu memasang benang pintalan di ketiaknya, tiba-tiba sang ibu berubah menjadi burung yang cantik seperti Kweiya, kedua burung tersebut kini dikenal sebagai burung Cendrawasih.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/AsalUsulCendrawaih/Halaman4.png'),
          },
          {
            fill: [
              'Seorang anak harus selalu patuh dan taat terhadap kedua orang tua dan siap sedia ketika disuruh membantu pekerjaan rumah.Sifat iri hati terhadap saudara sendiri seperti kedua adik laki-laki Kweiya akan menimbulkan permasalahan yang baru dan merusak sebuah kebahagian. Sikap ikhlas dan mengalah adalah sikap yang akan menumbuhkan kebaikan dan mendapatkan balasan yang tidak pernah terduga.',
            ],
            color: '#575757',
            lagu: 'par1',
          },
        ],
        back: require('../assets/RoroJonggrang/BG_RoroJonggrang.png'),
      },
      lutung_kasarung: {
        content: [
          {
            fill: [
              'Pada zaman dahulu di Pasundan, berdiri sebuah kerajaan yang dipimpin oleh seorang raja bernama Prabu Tapak Agung. Beliau adalah sosok raja yang sangat bijaksana dan dicintai oleh rakyat. Raja tersebut memiliki dua orang anak yang bernama Purbararang dan Purbasari.',
              'Suatu hari sang ayah berpesan kepada kedua putrinya, dalam pesan tersebut raja ingin turun tahta dan Purbasari diminta untuk menggantikan sebagai pemimpin di kerajaan. Mendengar kabar tersebut Purbararang sebagai anak tertua tidak terima karena dia merasa lebih pantas untuk menggantikan ayahnya.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/LutungKasarung/Halaman1.png'),
          },
          {
            fill: [
              'Purbararang yang geram berencana untuk mencelakai Purbasari dengan menemui nenek sihir. Hal ini mengakibatkan kulit Purbasari penuh dengan bintik-bintik hitam sehingga kondisi ini digunakan untuk mengasingkan Purbasari ke hutan.',
              'Purbasari tidak merasa kesepian karena ia banyak teman dari hewan yang tinggal disana. Salah satunya adalah kera yang selalu membawakan buah dan bunga untuk menghiburnya. Suatu malam kera bersemedi, setelah itu tiba-tiba muncul air yang membentuk sebuah telaga dengan air jernih dan wangi. Kera meminta Purbasari untuk mandi di telaga, seketika tubuhnya berubah seperti semula bak seorang putri yang cantik.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/LutungKasarung/Halaman2.png'),
          },
          {
            fill: [
              'Suatu hari Purbararang berniat untuk menjenguk adiknya, ia terkejut melihat adiknya kembali cantik. Ia tidak menyerah dan meminta adiknya untuk adu panjang rambut, ternyata rambut Purbasari lebih panjang.',
              'Tak cukup sampai disini, Purbararang meminta adu tampan dengan tunangannya. Saat itu juga Purbasari menggandeng kera yang selama ini menemaninya hidup di hutan. Sebuah keajaiban terjadi pada si kera. Kera tersebut berubah menjadi seorang laki-laki yang sangat tampan dan lebih tampan daripada tunangan Purbararang sehingga Purbasari menang.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/LutungKasarung/Halaman3.png'),
          },
          {
            fill: [
              'Saat itu juga Purbararang meminta maaf dan mengakui kesalahan, akhirnya Purbasari menjadi ratu yang bijaksana dalam memimpin kerajaan warisan dari ayahnya bersama dengan kera atau lutung yang kini telah berubah menjadi seorang laki-laki yang tampan.',
              'Purbasari juga telah memaafkan kakaknya dan tidak berniat untuk menghukum kakaknya atau balas dendam. Kini Purbasari telah hidup bahagia bersama dengan sang pujaan hati.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/LutungKasarung/Halaman4.png'),
          },
          {
            fill: [
              'Kebenaran dan kebaikan akan dapat mengalahkan kecurangan dan kesewenang-wenangan. Sebuah kebenaran pada akhirnya akan keluar sebagai pemenang. Jiwa kesatria dalam memaafkan dan tidak membalas kesalahan orang yang telah berbuat curang kepada kita itu patut dicontoh.',
            ],
            color: '#575757',
            lagu: 'par1',
          },
        ],
        back: require('../assets/LutungKasarung/BG_LutungKasarung.png'),
      },
      keong_mas: {
        content: [
          {
            fill: [
              'Hidup seorang Raja yang sangat arif dan bijaksana dengan dua putri, putri pertama bernama Candra Kirana, dan putri kedua atau adiknya bernama Dewi Galuh, dua putri itu sangat cantik, tetapi memiliki watak yang berbeda. Candra Kirana sangat baik dan tidak sombong sehingga ia sangat dicintai oleh rakyat. Sebaliknya, Dewi Galuh jahat dan angkuh, ia sering kali menghina rakyat sehingga rakyat tak menyukainya.',
              'Suatu hari Raja memanggil Candra Kirana, Raja ingin agar Candra Kirana segera menikah dengan Pangeran lnu Kertapatih, Candra Kirana sangat senang, ia menerima lamaran Pangeran lnu Kertapatih. Tetapi, Dewi Galuh juga menyukai Pangeran lnu Kertapatih. Ia ingin Pangeran lnu Kertapatih menjadi suaminya.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/KeongMas/Halaman1.png'),
          },
          {
            fill: [
              'Dewi Galuh lantas pergi ke rumah penyihir, ia meminta agar penyihir itu menyihir Candra Kirana menjadi sebuah keong. Saat sedang asyik main di pantai, Candra Kirana ditemui oleh penyihir. Penyihir itu langsung menyihir Candra Kirana menjadi seekor keong emas. Sungguh sedih hati Candra Kirana.',
              '"Sihir itu hanya akan hilang jika kau menemukan cinta sejatimu,"seru Penyihir. Sementara itu, di sebuah desa, seorang nenek sedang mencari ikan. Saat ia mengambil jaringnya, ia menemukan seekor keong emas. Karena keong itu terlihat sangat cantik, nenek itu pun membawa pulang. Keesokan harinya, si nenek kembali mencari ikan, ia selalu bekerja dari pagi hingga sore, namun kadang-kadang tak mendapatkan ikan.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/KeongMas/Halaman2.png'),
          },
          {
            fill: [
              'Saat si Nenek pergi bekerja, keong emas berubah menjadi Candra Kirana, untuk membalas budi sang nenek, Candra Kirana membersihkan rumah nenek itu. Ia juga memasak makanan yang enak untuk si Nenek. Saat pulang, alangkah terkejutnya si Nenek, ia mendapati banyak makanan di meja makan. "Siapakah yang melakukan ini semua?" ucap si Nenek.',
              'Setiap hari, sepulang bekerja, si Nenek selalu mendapati rumahnya sudah bersih dan ada banyak makanan di meja makan. Ia ingin tahu, siapa yang melakukan itu semua. Maka pada suatu hari, ia pura-pura pergi bekerja. Ia mengintip di balik jendela. Si Nenek melihat keong emas miliknya berubah menjadi seorang gadis cantik. Si Nenek pun langsung masuk ke rumah, Candra Kirana kaget, tetapi akhirnya ia menceritakan semua kepada si Nenek.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/KeongMas/Halaman3.png'),
          },
          {
            fill: [
              'Sementara itu, Pangeran lnu Kertapatih ikut mencari Candra Kirana, dia mencari sampai ke pelosok desa. Saat sedang kelelahan, ia hendak meminta minum kepada salah satu warga. Dia mendatangi salah satu rumah warga, dan disana, olala... Pangeran lnu Kertapatih mendapati Candra Kirana, seketika kutukan nenek sihir itu pun sirna.',
              'Akhirnya Pangeran lnu Kertapatih membawa Candra Kirana kembali ke istana, si Nenek yang menolongnya pun dibawa serta. Kemudian, nenek sihir yang menyihir Candra Kirana, serta Dewi Galuh dihukum oleh Raja. Candra Kirana dan Pangeran Inu Kertapatih pun menikah dan hidup bahagia bersama.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/KeongMas/Halaman4.png'),
          },
          {
            fill: [
              'Kebenaran akan mengalahkan kebatilan atau kejahatan yang direncanakan.  Sifat iri hati Dewi Galuh membutakan hatinya untuk berbuat keburukan tanpa memikirkan apa yang terjadi dan ia tidak mengingat kebaikan dari ayahnya dan adiknya. Orang yang iri hati akan merasakan balasan kekalahan dan kehancuran di kemudian hari.',
            ],
            color: '#575757',
            lagu: 'par1',
          },
        ],
        back: require('../assets/KeongMas/BG_KeongMas.png'),
      },
      putri_tandampalik: {
        content: [
          {
            fill: [
              'Alkisah, pada zaman dahulu kala, di sebuah daerah di Provinsi Sulawesi Selatan, berdiri sebuah kerajaan yang bernama Kerajaaan Luwu. Kerajaan ini dipimpin seorang raja yang dikenal dengan nama Datu Luwu. Ia adalah seorang raja yang adil, arif dan bijaksana, sehingga rakyatnya hidup makmur dan sentosa.',
              'Datu Luwu mempunyai seorang putri yang cantik jelita dan berperangai baik, namanya Putri Tandampalik. Berita kecantikan dan perangai baiknya tersebar sampai ke berbagai negeri di Sulawesi Selatan, termasuk di antaranya Raja Bone yang tinggalnya sangat jauh dari Luwu.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/PutriTandamPalik/Halaman1.png'),
          },
          {
            fill: [
              'Keesokan harinya, tiba-tiba Putri Tandampalik terserang penyakit kusta. Sekujur tubuhnya mengeluarkan cairan kental yang berbau anyir dan sangat menjijikkan. Para tabib istana mengatakan bahwa Putri Tandampalik terserang penyakit menular yang sangat berbahaya. Dengan berat hati, Datu Luwu memutuskan untuk mengasingkan putrinya ke suatu tempat yang jauh. Ia khawatir penyakit putrinya akan menular ke seluruh rakyatnya. ',
              'Sebelum berangkat, Datu Luwu memberikan sebuah keris pusaka kepada Putri Tandampalik sebagai tanda bahwa ia tidak pernah melupakan, apalagi membuang anaknya.Setelah mempersiapkan segala perbekalan yang dibutuhkan, berangkatlah mereka ke suatu daerah yang jauh dari Kerajaan Luwu. Berbulan-bulan sudah mereka berlayar tanpa arah dan tujuan. ',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/PutriTandamPalik/Halaman2.png'),
          },
          {
            fill: [
              'Pada suatu hari, tampaklah bagi mereka sebuah pulau dari kejauhan. Seorang pengawal yang lebih dahulu menginjakkan kakinya di pulau itu menemukan buah wajao. Pengawal itu kemudian memetik beberapa biji buah wajao untuk sang Putri. "Pulau ini kuberi nama Pulau Wajo," kata sang Putri saat menerima buah itu. Sejak saat itu, Putri Tandampalik beserta pengawalnya memulai kehidupan baru.',
              ' Suatu waktu, Putri Tandampalik duduk di tepi danau yang terletak di tengah pulau itu. Tiba-tiba seekor kerbau putih menghampiri dan menjilati kulit sang Putri dengan lembut kulit sang Putri yang mengeluarkan cairan tiba-tiba hilang tanpa bekas. Kulit sang Putri kembali halus, mulus dan bersih seperti sediakala. ',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/PutriTandamPalik/Halaman3.png'),
          },
          {
            fill: [
              'Pada suatu hari, pulau Wajo kedatangan Pangeran  dari kerajaan Bone dan pengawalnya untuk berburu. Sang Pangeran tidak sadar kalau ia sudah terpisah dari rombongannya dan tersesat di hutan. Setelah lama berjalan akhirnya Sang pangeran menemukan pondok milik Putri Tandampalik. Sang pangeranpun mengetuk pintu dan meminta bantuan. Setelah lama mengobrol Pangeran dan sang puteri segera jatuh cinta.',
              'Sang pangeranpun melamar Putri Tandampalik, Putri pun memberikan keris pemberian ayahnya dan berkata “Bawalah keris ini dan berikan kepada ayahku. Jika ayahku menerima keris ini maka akan ku terima lamaran pangeran”. Setelah itu pangeranpun bergegas untuk menuju Kerajaan Luwu.',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/PutriTandamPalik/Halaman4.png'),
          },
          {
            fill: [
              'Sang pangeranpun tiba di Kerajaan Luwu dan menceritakan pertemuannya dengan Putri Tandampalik kepada Datu Luwu. Lalu Sang Pangeran menyerahkan keris yang diberikan Putri Tandampalik kepada Datu Luwu. Melihat kelembutan kelembutan tutur Bahasa dan ketangguhan hati Sang Pangeran, Datu Luwu menerima keris pusaka itu dengan tulus dan menerima lamaran untuk Putrinya',
              'Sang Pangeran dan Datu Luwu berlayar menuju Pulau Wajo untuk menjemput Putri Tandampalik. Akhir cerita merekapun Kembali ke Kerajaan Luwu dan pernikahan antara Putri Tandampalik dengan Sang Pangeran kerajaan Bone pun digelar dan mereka hidup Bahagia',
            ],
            color: '#575757',
            lagu: 'par1',
            gambar: require('../assets/PutriTandamPalik/Halaman5.png'),
          },
          {
            fill: [
              'Kita harus bisa ikhlas bila menerima cobaan dan ujian dari Tuhan karena cobaan tersebut tidak akan melebihi kesanggupan kita.',
            ],
            color: '#575757',
            lagu: 'par1',
          },
        ],
        back: require('../assets/PutriTandamPalik/BG_PutriTandamPalik.png'),
      },
    },
    selectedIndex: 0,
    currentPosition: 0,
    statusSound: 'OFF',
    iconSound: require('../assets/mic-on.png'),
  };

  componentDidMount() {
    // SoundPlayer.playSoundFile('par1', 'mp3');
  }

  componentWillUnmount() {
    // SoundPlayer.stop();
  }

  masukEvaluasi(judul) {
    // SoundPlayer.stop();
    this.props.navigation.navigate('Evaluasi', {judul: judul});
  }

  selanjutnya() {
    const position = this.state.currentPosition + 360;
    this.ticker.scrollTo({x: position, animated: true});
    const inter = this.state.selectedIndex + 1;
    // SoundPlayer.playSoundFile(this.state.content[inter].lagu, 'mp3');
    this.setState({currentPosition: position});
    this.setState({
      selectedIndex: inter,
    });
  }

  sebelumnya() {
    const position = this.state.currentPosition - 360;
    this.ticker.scrollTo({x: position, animated: true});
    const inter = this.state.selectedIndex - 1;
    // SoundPlayer.playSoundFile(this.state.content[inter].lagu, 'mp3');
    this.setState({currentPosition: position});
    this.setState({
      selectedIndex: inter,
    });
  }
  controlSound(status) {
    if (status === 'OFF') {
      // SoundPlayer.setVolume(0);
      this.setState({
        statusSound: 'ON',
        iconSound: require('../assets/mic-off.png'),
      });
    } else {
      // SoundPlayer.setVolume(1);
      this.setState({
        statusSound: 'OFF',
        iconSound: require('../assets/mic-on.png'),
      });
    }
  }

  render() {
    let currentStory;
    let {tags} = this.props.route.params;
    let resultJudul = '';
    let judul = tags.split('_');
    judul.map((item, index) => {
      resultJudul += item.toUpperCase();
      if (index != judul.length - 1) {
        resultJudul += ' ';
      }
    });
    if (tags == 'malin_kundang') {
      currentStory = this.state.cerita.malin_kundang;
    } else if (tags == 'roro_jonggrang') {
      currentStory = this.state.cerita.roro_jonggrang;
    } else if (tags == 'asal_usul_burung_cendrawasih') {
      currentStory = this.state.cerita.asal_usul_burung_cendrawasih;
    } else if (tags == 'lutung_kasarung') {
      currentStory = this.state.cerita.lutung_kasarung;
    } else if (tags == 'keong_mas') {
      currentStory = this.state.cerita.keong_mas;
    } else {
      currentStory = this.state.cerita.putri_tandampalik;
    }
    return (
      <ImageBackground source={currentStory.back} style={styles.container}>
        <View style={{alignItems: 'center', paddingTop: 30}}>
          <Text
            style={{
              fontSize: 18,
              color: '#575757',
              fontWeight: 'bold',
              flexWrap: 'wrap',
            }}>
            {resultJudul}
          </Text>
        </View>
        <View style={{alignSelf: 'flex-end', paddingTop: 20, paddingRight: 20, position:'absolute'}}>
          <TouchableOpacity
            onPress={() => this.controlSound(this.state.statusSound)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              width: 40,
              backgroundColor: '#fff',
              borderRadius: 50,
            }}>
            <Image
              source={this.state.iconSound}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 50, alignItems: 'center'}}>
          <ScrollView
            horizontal
            pagingEnabled
            scrollEnabled={false}
            ref={(ref) => (this.ticker = ref)}
            showsHorizontalScrollIndicator={false}
            style={{zIndex: 1}}
            contentContainerStyle={{justifyContent: 'space-between'}}>
            {currentStory.content.map((stor, ind) => {
              if (ind === 0) {
                return (
                  <View style={{paddingHorizontal: 25}}>
                    <View
                      style={{
                        height: '95%',
                        width: WIDTH - 50,
                        borderRadius: 10,
                        alignItems: 'center',
                      }}>
                      <View style={{height: '50%'}}>
                        <View
                          style={{paddingVertical: 10}}>
                          <Text
                            style={{
                              fontSize: 14,
                              color: stor.color,
                            }}>
                            {stor.fill[0]}
                          </Text>
                        </View>
                        <View
                          style={{paddingBottom: 10}}>
                          <Text
                            style={{
                              fontSize: 14,
                              color: stor.color,
                            }}>
                            {stor.fill[1]}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          height: '80%',
                          width: '80%',
                          flex: 1,
                          justifyContent: 'flex-end',
                        }}>
                        <Image
                          source={stor.gambar}
                          style={{
                            flex: 1,
                            height: null,
                            width: null,
                            resizeMode: 'contain',
                          }}
                        />
                      </View>
                    </View>
                    <TouchableOpacity
                      style={{
                        bottom: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'flex-end',
                      }}
                      onPress={() => this.selanjutnya()}>
                      <View
                        style={{
                          height: 40,
                          width: 40,
                          borderRadius: 40,
                          backgroundColor: '#fff',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Image
                          source={require('../assets/arrow-right.png')}
                          style={{width: 20, height: 20}}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              } else if (ind > 0 && ind !== currentStory.content.length - 1) {
                return (
                  <View style={{paddingHorizontal: 25}}>
                  <View
                      style={{
                        height: '95%',
                        width: WIDTH - 50,
                        borderRadius: 10,
                        alignItems: 'center',
                      }}>
                      <View style={{height: '50%'}}>
                        <View
                          style={{paddingVertical: 10}}>
                          <Text
                            style={{
                              fontSize: 14,
                              color: stor.color,
                            }}>
                            {stor.fill[0]}
                          </Text>
                        </View>
                        <View
                          style={{paddingBottom: 10}}>
                          <Text
                            style={{
                              fontSize: 14,
                              color: stor.color,
                            }}>
                            {stor.fill[1]}
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          height: '70%',
                          width: '70%',
                          flex: 1,
                          justifyContent: 'flex-end',
                        }}>
                        <Image
                          source={stor.gambar}
                          style={{
                            flex: 1,
                            height: null,
                            width: null,
                            resizeMode: 'contain',
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        bottom: 80,
                      }}>
                      <TouchableOpacity
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() => this.sebelumnya()}>
                        <View
                          style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Image
                            source={require('../assets/arrow-left.png')}
                            style={{width: 20, height: 20}}
                          />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          alignSelf: 'flex-end',
                        }}
                        onPress={() => this.selanjutnya()}>
                        <View
                          style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Image
                            source={require('../assets/arrow-right.png')}
                            style={{width: 20, height: 20}}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              } else {
                return (
                  <View style={{paddingHorizontal: 25}}>
                    <View
                      style={{
                        height: '95%',
                        width: WIDTH - 50,
                        borderRadius: 10,
                        alignItems: 'center',
                      }}>
                      <View style={{paddingHorizontal: 15, paddingTop: '5%'}}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: stor.color,
                            textAlign: 'center',
                          }}>
                          Pesan Moral
                        </Text>
                        <Text
                          style={{
                            paddingTop: 30,
                            fontSize: 18,
                            color: stor.color,
                            textAlign: 'center',
                          }}>
                          {stor.fill[0]}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        bottom: 80,
                      }}>
                      <TouchableOpacity
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        onPress={() => this.sebelumnya()}>
                        <View
                          style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Image
                            source={require('../assets/arrow-left.png')}
                            style={{width: 20, height: 20}}
                          />
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                          alignSelf: 'flex-end',
                        }}
                        onPress={() => this.masukEvaluasi(resultJudul)}>
                        <View
                          style={{
                            height: 40,
                            width: 40,
                            borderRadius: 40,
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          <Image
                            source={require('../assets/arrow-right.png')}
                            style={{width: 20, height: 20}}
                          />
                        </View>
                      </TouchableOpacity>
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
  },
});

//make this component available to the app
export default Baca;
