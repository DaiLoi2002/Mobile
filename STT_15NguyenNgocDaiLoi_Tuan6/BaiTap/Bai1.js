import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,button,Button } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Bai2 from "./Bai2";
import App from "../App";

import {useNavigation} from '@react-navigation/native';

export default function Bai1( navigation) {
  
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
      <View style={styles.v4}>
        <Text style={styles.textred}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      
      </View>
      <Image source={require("../assets/z4798920117134_ddbf5724396427113589bf29d97d8e69.jpg")} style={styles.chamhoi}></Image>
      
       <View style={styles.v5}>
       <Button 
      title="Go to Details"
      onPress={() => navigation.navigate('Details')} 
    />
       </View>
       <View style={styles.v6}>
        <button style={styles.button2}>
          <Text style={styles.textbutton2}>CHỌN MUA</Text>
        </button>
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
    
  
  },
  v4:{
    flexDirection:'row',
  },
  textred:{
    fontFamily: 'Arial',
    fontWeight:"bold",
    fontSize:15,
    color:"red",
    top: 40,
    left:20,
    width:200,
    height:14
  },
  chamhoi:{
    width:20,
    height:20,
    marginLeft:230,
    top:23
  },
  v5:{
    top:40,
   
    width:332,
    height:34,
    left:20
  },
  button1:{
    borderWidth:3,
    borderRadius:10,
    height:34,
    width:332
  },
  textbutton1:
  { width:127,
    height:18,
    fontSize:17

  },
  v6:{
    top:65,
    width:332,
    height:40,
    left:20
  },
  button2:{
    borderWidth:3,
    borderRadius:10,
    height:40,
    width:332,
    backgroundColor:'red'
  },
  textbutton2:
  { width:127,
    height:18,
    fontSize:22,
    color:"#ffffff",
    fontWeight:'bold'

  }
  
});