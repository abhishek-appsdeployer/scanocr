import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Your login logic goes here
    navigation.navigate("Scanner")
  };

  return (
    <>
    <View style={styles.nav}>
    <Text style={styles.navtext}>RDC</Text>
        <Icon name="dots-three-vertical" size={28} color="white" />
    </View>
    <View style={styles.container}>
    <Image
        style={styles.image}
        source={require('./Image/image001.png')}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
    </>
  );
};

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
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Login;
