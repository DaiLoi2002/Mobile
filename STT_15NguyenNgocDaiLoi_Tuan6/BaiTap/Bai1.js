import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { TextInput } from "react-native-web";

export default function Bai1() {
  
  return (
    <View style={styles.container}>
      <View style={styles.top}>
         <Image source={require('../assets/Vs.jpg')} style={styles.Image}></Image>
      </View>
      <View style={{fontSize:15,
    width:288,
    height:18,
    fontStyle:'normal',
    fontFamily: 'Roboto',
    lineHeight:17.58}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</View>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: "#ffffff",
    width: 390,
  },
  Image:{
    width:301,
    height:361,
    marginLeft:50,
    marginTop:30
  },
  text1:{
    fontSize:15,
    width:288,
    height:18,
    fontStyle:'normal',
    fontFamily: 'Roboto',
    lineHeight:17.58

  }
});
