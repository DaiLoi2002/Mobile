import { StatusBar } from 'expo-status-bar';
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

export default function screen1() {
  return (
    <View style={styles.container}>
      
      <Image source={require("../image/sach+viet.jpg")} style={styles.img}></Image>
      
      <Text style={styles.text1}>MANAGE YOUR TASK</Text>
      <View  style={styles.middle}>
      <View>
      <TextInput
            style={styles.TextInput}
            placeholder="Name"
            textContentType="Enter your name"
            inputMode="text"
          />
  <Icon
            name="gmail"
            size={20}
            color="black"
            style={{ position: "absolute", left: 15, top: 10 }}
          />
       
        
          
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height: 271,
    width: 271,
    marginBottom:50  
  },
  text1:{
    fontSize:24,
    fontFamily:"Arial",
    fontWeight:700,
    color:"#8353E2",
    marginBottom:250
  },
  middle:{
    flex: 0.3,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection:"row"
  },
  TextInput:{
    height: 48,
    width: 320,
    margin: 1,
    border: "1px solid #ffffff",
    backgroundColor: "rgba(196,196,196,0.3)",
    paddingLeft: "50px",
    marginVertical: 4,
    marginBottom:300

  }
});
