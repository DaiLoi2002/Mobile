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
      <View>
        <Text style={{fontWeight: "bold",fontFamily:"Arial", marginLeft:20}}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={styles.v2}>
      <Image source={require("../assets/Star.png")} style={styles.imgstar}></Image>
      <Image source={require("../assets/Star.png")} style={styles.imgstar}></Image>
      <Image source={require("../assets/Star.png")} style={styles.imgstar}></Image>
      <Image source={require("../assets/Star.png")} style={styles.imgstar}></Image>
        <Image source={require("../assets/Star.png")} style={styles.imgstar}></Image>
      <Text style={{fontWeight: "bold",fontFamily:"Arial", marginLeft:20, top:16}} >(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.v3}>
      <Text style={{fontWeight:"bold",fontSize:25, fontFamily:"Arial"}}>1.790.000 đ</Text>
      <Text style={{fontWeight:"bold",fontSize:20, fontFamily:"Arial",textDecorationLine:'line-through',left:30,color:'#808080',top:0}}>1.790.000 đ</Text>
      
      </View>
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
  v2:{
    flexDirection:'row',
    marginLeft:20
  },
  imgstar:{
    width:30,
    height:30,
    marginLeft:5,
    top:10
  },
  v3:{
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    top:25,
    
  
  }
  
});
