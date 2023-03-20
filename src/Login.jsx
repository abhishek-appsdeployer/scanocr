import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err,setErr]=useState("")
  const [emailErr,setemailErr]=useState("")

  // validat email
const validateEmail = email => {
    // A simple email validation check using a regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleLogin = async () => {
    const payload = { email, password };
    if (!email && !password)
    {
      setemailErr("Email id required")
      setErr("Please enter password")
    }
    else if (!email ) {
      setErr("")
      setemailErr("Email id required");
    }
    else if (!validateEmail(email)) {
      setemailErr("Please enter a valid email address");
    } 
    else if (!password)
    {
      setemailErr("")
      setErr("Please enter password")
    }
     
    else {
      setemailErr("")
      setErr("");
      try {
        const response = await axios.post(
          'http://qms.consdeployer.com/qms/api/employee/login',
          payload
        );
        console.log(response)
        const decodedToken = jwt_decode(response.data.token);

// Store the decoded token in local storage
AsyncStorage.setItem('apiToken', JSON.stringify(decodedToken))
  .then(() => {
    console.log('API token stored successfully');
    console.log(decodedToken.uid);
    console.log(apiToken.name);
  })
  .catch((error) => {
    console.error('Error storing API token:', error);
  });
        if (response.data.success) {
          console.log("login successfully");
          navigation.navigate("Scanner");
        } else {
          console.log(response.data.msg);
        }
      } catch (error) {
        console.log(error.message);
        setErr("Invalid credentials")
      }
    }
  };
  

  return (
    <>
      {/* <View style={styles.nav}>
        <Text style={styles.navtext}>RDC</Text>
        <Icon name="dots-three-vertical" size={28} color="white" />
      </View> */}
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('./Image/image001.png')}
        />
        <View style={styles.textmain}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          value={email}
          required
        />
        {emailErr ? <Text style={styles.error}>{emailErr}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
          required={true}
         
        
        />
        
        {err ? <Text style={styles.error}>{err}</Text> : null}
        <View style={{width: 'auto', alignSelf: 'center',paddingTop:10}}>
          <Button style={styles.button} title="Login" onPress={handleLogin}  />
        </View>
        
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: "#2226ac",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18

  },
  navtext: {

    fontSize: 28,
    color: "white",
    fontFamily: "bold"
  },

  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
   paddingHorizontal:20
  },
  image: {
    width: '95%',
    height: 110,
    resizeMode: 'stretch',
    marginVertical: 60
  },
  textmain:{
    paddingHorizontal:20

  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
  error:{
    color:"red",
    fontSize:16,
    // padding:10,
     fontWeight: "300",
    
    justifyContent:"space-between"

  },button:{
    flex:1,
    alignSelf: 'center',
    textAlign: 'center',
    
    
  }
});

export default Login;
