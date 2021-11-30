import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {  View, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import AppStack from "./src/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import * as Location from 'expo-location';
import { fetchWeatherData } from "./src/Service/Api";

export default function App() {

  const [loading,setLoading] = useState(false);
  const [weatherData,setWeatherData]= useState([]);
  const [currentDateItem,setCurrentDateItem] = useState();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const loadFonts = async () => {
    await Font.loadAsync({
      LatoBold: require("./assets/fonts/LatoBold.ttf"),
      LatoNormal: require("./assets/fonts/LatoRegular.ttf"),
      LatoThin: require("./assets/fonts/LatoThin.ttf"),
      LatoLight: require("./assets/fonts/LatoLight.ttf"),
      LatoItalic: require("./assets/fonts/LatoItalic.ttf"),
      LatoBoldItalic: require("./assets/fonts/LatoBoldItalic.ttf"),
    });
    setLoading(false);
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log("location",location)
      setLocation(location);
      const data = await fetchWeatherData(location.coords.latitude, location.coords.longitude);
      setWeatherData(data?.properties?.timeseries);
     

    })();
  }, []);
  

  useEffect(() => {
    loadFonts();
  }, []);
  if(loading){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="green" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <AppStack weatherData={weatherData} />
    </NavigationContainer>
  );
}
