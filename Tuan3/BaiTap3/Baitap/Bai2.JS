import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import  Bai1  from '../BaiTap3/Baitap/Bai1.JS';

export default function Bai2() {
  
  return (
     
    
    

    <View style={styles.container}>
      <View style={styles.Image}>
        <Image
          source={require("./images.jpg")}
          style={{
            width: 200,
            height: 180,
            alignSelf: "center",
            justifyContent: "center",
            marginVertical: 50
          }}
        />
      </View>
      <View
        style={{
          fontWeight: "bold",
          fontFamily: "arial",
          fontSize: 28,
          marginVertical: 80 , 
          alignItems: 'center',
          textalign:'center'
        }}
      >
        GROW YOUR BUSINESS
      </View>
      <View style={{
       fontWeight: "bold",
       fontFamily: "arial",
       marginVertical: 20,
       fontSize: 13,
       alignItems: 'center',
       textAlign: 'justify'
      }}>
    
    We will help you to grow your business using online server
  </View>
      
      <StatusBar style="auto" />
      <View style={styles.body}>
        <View
          style={{
            borderRadius: 100,
            marginEnd: 30,
            marginStart: 30,
            fontWeight: "bold",
          fontFamily: "arial",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
          fontWeight: "bold",
          fontFamily: "arial",
          fontSize: 28,
          marginVertical: 30, 
          alignItems: 'center',
          textalign:'center',
          
        }} >
        HOW WE WORK?
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignSelf: "center",
    justifyContent: "center",
  },
  body: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "yellow",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 150,
    alignItems: "center",
    marginEnd: 20,
    marginStart: 20,
  },
  buttonText: {
    color: "white",
  },
  footer: {
    backgroundColor: "white",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: "black",
    fontSize: 2,
  },
  Text: {},
});
