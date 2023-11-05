import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, View, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bai1 from './BaiTap/Bai1';
import Bai2 from './BaiTap/Bai2';


function HomeScreen({ navigation }) {
  return (
    <View style={{flex: 1,backgroundColor:"#ffffff",flexDirection:"column"}}>
      
      <View>  
      <Image source={require('./assets/Vs.jpg')} style={{width:301,height:361,marginLeft:50,marginTop:30}}></Image>
        <View>
        <Text style={{fontWeight: "bold",fontFamily:"Arial", marginLeft:20}}>
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View style={{ flexDirection:'row',marginLeft:20}}>
      <Image source={require("./assets/Star.png")} style={{ width:30,height:30,marginLeft:5,top:10}}></Image>
      <Image source={require("./assets/Star.png")} style={{ width:30,height:30,marginLeft:5,top:10}}></Image>
      <Image source={require("./assets/Star.png")} style={{ width:30,height:30,marginLeft:5,top:10}}></Image>
      <Image source={require("./assets/Star.png")} style={{ width:30,height:30,marginLeft:5,top:10}}></Image>
      <Image source={require("./assets/Star.png")} style={{ width:30,height:30,marginLeft:5,top:10}}></Image>
      <Text style={{fontWeight: "bold",fontFamily:"Arial", marginLeft:20, top:16}} >(Xem 828 đánh giá)</Text>
      </View>
      <View style={{flexDirection:'row',marginLeft:20,marginRight:20,top:25}}>
      <Text style={{fontWeight:"bold",fontSize:25, fontFamily:"Arial"}}>1.790.000 đ</Text>
      <Text style={{fontWeight:"bold",fontSize:20, fontFamily:"Arial",textDecorationLine:'line-through',left:30,color:'#808080',top:0}}>1.790.000 đ</Text>
      </View>
      </View>
      <View>
     
      <Button style={styles.button}
       title="4 MÀU-CHỌN 1"
       onPress={() => navigation.navigate('Details')}
      /><Button style={styles.button}
      title="4 MÀU-CHỌN 1"
      onPress={() => navigation.navigate('Details')}
     />
     <Button style={styles.button}
       title="4 MÀU-CHỌN 1"
       onPress={() => navigation.navigate('Details')}
      />
      </View>
    </View>
   
  );
}
function DetailsScreen({ navigation }) {
  return (
   <Bai2/>
  );
}

const Stack = createNativeStackNavigator();

function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
       <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  
});