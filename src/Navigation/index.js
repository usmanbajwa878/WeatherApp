import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SearchDataScreen from '../screens/SearchDataScreen';

const Stack = createStackNavigator();

function AppStack(props) {
   
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="FirstScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} initialParams={{...props}} />
      <Stack.Screen name="FirstScreen" component={FirstScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="SearchDataScreen" component={SearchDataScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;