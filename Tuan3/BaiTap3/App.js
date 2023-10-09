import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import  Bai1  from './Baitap/Bai1.JS';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  
  return (
    <Bai1/>
  )};
     
    
    

   /* <View style={styles.container}>
      <View style={styles.Image}>
        <Image
          source={require("./okhoa.jpg")}
          style={{
            width: 200,
            height: 180,
            alignSelf: "center",
            justifyContent: "center",
            marginVertical:1
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
        FORGET PASSWORD
      </View>
      <View style={{
       fontWeight: "bold",
       fontFamily: "Roboto",
       marginVertical: 20,
       fontSize: 13,
       alignItems: 'center',
       textAlign: 'justify'
      }}>
    
    Provide your account’s email for which you want to reset your password
  </View>
      
      <StatusBar style="auto" />
      

      <View style={styles.body}>
        
        <View
          style={{
            marginEnd: 30,
            marginStart: 30,
            fontWeight: "bold",
          fontFamily: "arial",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
          
        </View>
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
});*/
