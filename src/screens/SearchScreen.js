import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { fetchWeatherData } from "../Service/Api";

import COLORS from "../constants/Colors";
import { GetWeather, MONTH } from "../constants/Constants";
import { useIsFocused } from "@react-navigation/core";
import { CITIES } from "../Service/Mock";
import { FlatList } from "react-native-gesture-handler";

export default function SearchScreen(props) {
  const weatherData = props.route?.params?.weatherData;
  //     useEffect(() => {
  //         getApiData();
  //     }, []);

  //   const getApiData = async () => {
  //       setLoading(true);
  //     const filteredData = weatherData.filter((item)=>new Date(item.time).getHours() === new Date().getHours() && new Date(item.time).getDate() === new Date().getDate());
  //     setCurrentDateItem(filteredData[0]?.data);
  //    setLoading(false)
  //   };
  //   if(isFocused){
  //     getApiData()
  //   }

  //   const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentDateItem, setCurrentDateItem] = useState();
  const [cityData, setCityData] = useState(CITIES);

  if (loading) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  const handleFilter = (searchItem) => {
    console.log("ITEM", searchItem);
    if (searchItem === "") {
      setCityData(CITIES);
    } else {
      let filteredData = cityData.filter(function (item) {
        return item.name.toLowerCase().includes(searchItem.toLowerCase());
      });
      console.log("DATA", filteredData);
      setCityData(filteredData);
    }
  };

  const handleSearch = async(item) =>{
      setLoading(true)
    const data = await fetchWeatherData(item.lat, item.lng);
    setLoading(false);
    props.navigation.push('SearchDataScreen',{
        weatherData:data?.properties?.timeseries
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND_HOME }}>
  
        <View style={{ flex: 1, marginTop: 50 }}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{marginBottom:20,alignSelf:'flex-start',marginHorizontal:20,width:40,height:40}}>
              <Image style={{width:40,height:40}} source={require('../../assets/Icons/backIcon.png')} />
          </TouchableOpacity>
          <View
            style={{
              marginHorizontal: 20,
              height: 45,
              borderRadius: 20,
              backgroundColor: COLORS.WHITE,
              flexDirection: "row",
              marginBottom: 20,
            }}
          >
            <TextInput
              placeholder="Search City"
              style={{ width: "80%", marginLeft: 20 }}
              onChangeText={(e) => handleFilter(e)}
            />
            <TouchableOpacity
              style={{
                height: 45,
                width: 45,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 25, height: 25 }}
                source={require("../../assets/Icons/search.png")}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={cityData}
            renderItem={({ item, index }) => (
              <TouchableOpacity
              onPress={()=>handleSearch(item)}
                style={{
                  height: 30,
                  marginHorizontal: 20,
                  borderBottomWidth: 1,
                  justifyContent: "center",
                }}
                key={index}
              >
                <Text style={{ color: "white", fontSize: 15 }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
