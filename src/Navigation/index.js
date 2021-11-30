import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

function AppStack(props) {
   
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="FirstScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} initialParams={{...props}} />
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;