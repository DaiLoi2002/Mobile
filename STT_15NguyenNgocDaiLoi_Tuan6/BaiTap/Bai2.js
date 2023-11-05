import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,CheckBox } from "react-native";

import { TextInput } from "react-native-web";

export default function Bai2(navigation) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Vs.jpg')} style={styles.Image}></Image>
        <Text style={styles.Text}>
        Điện Thoại Vsmart Joy 3 
        Hàng chính hãng
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.txtchonmau}>Chọn một màu bên dưới:</Text>
        <Image source={require('../assets/trang.jpg')} style={styles.Imagemau}></Image>
        <Image source={require('../assets/do.jpg')} style={styles.Imagemau}></Image>
        <Image source={require('../assets/den.jpg')} style={styles.Imagemau}></Image>
        <Image source={require('../assets/hong.jpg')} style={styles.Imagemau}></Image>
        <button style={styles.button}>
          <Text style={styles.textbutton}> Xong</Text>

        </button>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    width: 390,
    height: 650,
   
  },
  Image:{
    width:112,
    height:132,
    marginLeft:4,
    marginTop:30,
  },
  header:{ 
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:"flex-start"
  },
  Text:{
    width:164,
    height:36,
    fontSize:15,
    fontFamily:'Roboto',
    lineHeight:17.58,
    fontWeight:'bold',
    top:40,
    left:20

  },
  body:{
    flex:1,
    backgroundColor:'#C4C4C4',
    flexDirection:'column',
    flexWrap: 'wrap'
  },
  txtchonmau:{
    width:200,
    height:21,
    fontSize:18,
    left:20
  },
  Imagemau:{
    width:85,
    height:80,
    marginLeft:4,
    marginTop:15,
    borderRadius:4,
    left:150
  }   ,
  button:{
    backgroundColor:'#1952E2',
    width:326,
    height:40,
    marginTop:15,
    marginLeft:40,
    borderRadius:10
  },
  textbutton:{
    fontWeight:500,
    fontSize:20,
    color:'#ffffff'
  }
});
