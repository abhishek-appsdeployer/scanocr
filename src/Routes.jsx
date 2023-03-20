import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Scanner from './Scanner';

import Ocrscan from './Ocrscan';
import Sample from './Sample';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
        
      />
      <Stack.Screen name="Scanner"
       options={{headerShown: false}}
       component={Scanner} />
       <Stack.Screen name="ocr"
       options={{headerShown: false}}
       component={Ocrscan} />

        
       <Stack.Screen name="sample"
       options={{headerShown: false}}
       component={Sample} />
       
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Routes
