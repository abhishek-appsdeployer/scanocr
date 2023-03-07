import React from 'react'
import {View, TextInput, Button, StyleSheet,Text,Image , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import { ViewPropTypes } from 'deprecated-react-native-prop-types'
const Scanner = ({navigation}) => {
  return (
    <>
         <View style={styles.nav}>
        <Text style={styles.navtext}>RDC</Text>
        <Icon name="dots-three-vertical" size={28} color="white" />
    </View>
    
   
    <View style={styles.container} >
      <Image
        style={styles.image}
        source={require('./Image/image001.png')}
      />
       <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("ocr")} >
        <Text style={styles.buttonText}>SCAN</Text>
      </TouchableOpacity>
      <Text style={{textAlign:"center",color:"#c0c0c0",paddingTop:20,fontSize:20}}  onPress={()=>navigation.navigate("sample")}>PAN</Text>
    
    </View>
   
    </>
    
  )
}
const styles = StyleSheet.create({
    nav:{
        backgroundColor:"#2226ac",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:18
        
    },
    navtext:{
        
        fontSize:28,
        color:"white",
        fontFamily:"bold"
    },
    container: {
        flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
      },
      image: {
        width: '95%',
        height: 110,
        resizeMode: 'stretch',
        marginVertical:60
      },
      button: {
        marginTop:50,
        backgroundColor: '#2226ac',
        borderRadius: 5,
        padding: 10,
        fontSize:20,
        alignItems:"center",
        paddingHorizontal:30
        
        
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        // textAlign: 'center',
        
      },
});

export default Scanner
