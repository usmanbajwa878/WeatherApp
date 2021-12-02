import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from "react-native";
import { fetchWeatherData } from "../Service/Api";

import COLORS from "../constants/Colors";
import { GetWeather, MONTH } from "../constants/Constants";
import { useIsFocused } from "@react-navigation/core";

export default function SearchDataScreen(props) {

    const weatherData = props.route?.params?.weatherData;
   
    console.log("PROPS",props.route)
    useEffect(() => {
        getApiData();
    }, []);

  const getApiData = async () => {
      setLoading(true);
    const filteredData = weatherData.filter((item)=>new Date(item.time).getHours() === new Date().getHours() && new Date(item.time).getDate() === new Date().getDate());
    setCurrentDateItem(filteredData[0]?.data);
   setLoading(false)
  };
//   if(isFocused){
//     getApiData()
//   }

//   const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDateItem,setCurrentDateItem] = useState();

  if (loading && !currentDateItem) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flex: 1, backgroundColor: COLORS.BACKGROUND_HOME }}>
        <View style={{ height: "50%", flexDirection: "row" }}>
          <View style={{ width: "50%", backgroundColor: COLORS.CTA }}>
         <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{marginTop:40,alignSelf:'flex-start',marginHorizontal:20,width:40,height:40}}>
              <Image style={{width:40,height:40}} source={require('../../assets/Icons/backIcon.png')} />
          </TouchableOpacity>
            <Text
              style={{
                marginTop: 50,
                color: COLORS.WHITE,
                fontFamily: "LatoBold",
                fontSize: 20,
                marginLeft: 20,
              }}
            >{`${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`}</Text>
            <Image
              style={{
                width: 80,
                height: 80,
                marginTop: 40,
                alignSelf: "center",
              }}
              source={require("../../assets/Icons/thunder.png")}
            />
            <View
              style={{
                justifyContent: "center",
                width: "100%",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: COLORS.WHITE,
                  fontFamily: "LatoBold",
                  fontSize: 60,
                  fontWeight: "bold",
                }}
              >
                {`${currentDateItem?.instant.details.air_temperature}°`}
              </Text>
              <Text
                style={{
                  color: COLORS.WHITE,
                  fontFamily: "LatoBold",
                  fontSize: 15,
                  alignSelf: "flex-start",
                  marginLeft: "30%",
                }}
              >
                {/* cloudy */}
                {GetWeather(currentDateItem?.next_1_hours?.summary.symbol_code).Title}  
              </Text>
              <Text
                style={{
                  color: COLORS.WHITE,
                  fontFamily: "LatoBold",
                  fontSize: 10,
                  alignSelf: "flex-start",
                  marginLeft: "30%",
                }}
              >
                {MONTH[new Date().getUTCMonth()]}
              </Text>
            </View>
          </View>

          <View style={{ width: "50%", alignItems: "center" }}>
            <View style={{ marginTop: 130, flexDirection: "row",alignItems:'center' }}>
              <Image
                style={{ width: 30, height: 30,marginRight:5 }}
                resizeMode="contain"
                source={require("../../assets/Icons/windSmall.png")}
              />
              <View>
                <Text
                  style={{
                    color: COLORS.WHITE,
                    fontFamily: "LatoThin",
                    fontSize: 14,
                  }}
                >
                  wind
                </Text>
                <Text
                  style={{
                    color: COLORS.WHITE,
                    fontFamily: "LatoNormal",
                    fontSize: 15,
                  }}
                >
                  {`${currentDateItem?.instant?.details.wind_speed} m/s`}
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 40, flexDirection: "row",alignItems:'center' }}>
              <Image
            style={{ width: 30, height: 30,marginRight:5 }}
                resizeMode="contain"
                source={require("../../assets/Icons/humidity.png")}
              />
              <View>
                <Text
                  style={{
                    color: COLORS.WHITE,
                    fontFamily: "LatoThin",
                    fontSize: 14,
                  }}
                >
                  humidity
                </Text>
                <Text
                  style={{
                    color: COLORS.WHITE,
                    fontFamily: "LatoNormal",
                    fontSize: 15,
                  }}
                >
                 {`${currentDateItem?.instant?.details?.relative_humidity} %`}
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 40, flexDirection: "row",alignItems:'center' }}>
              <Image
            style={{ width: 30, height: 30,marginRight:5 }}
                resizeMode="contain"
                source={require("../../assets/Icons/temperature.png")}
              />
              <View>
                <Text
                  style={{
                    color: COLORS.WHITE,
                    fontFamily: "LatoThin",
                    fontSize: 12,
                  }}
                >
                  Air Pressure
                </Text>
                <Text
                  style={{
                    color: COLORS.WHITE,
                    fontFamily: "LatoNormal",
                    fontSize: 15,
                  }}
                >
                   {`${currentDateItem?.instant?.details.air_pressure_at_sea_level} hPa`}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontSize: 40,
              fontFamily: "LatoNormal",
              color: COLORS.WHITE,
              width: "50%",
            }}
          >
            Hourly Timeline
          </Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../assets/Icons/cloudSmall.png")}
            />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "LatoNormal",
                color: COLORS.WHITE,
              }}
            >
               {`${currentDateItem?.instant?.details.cloud_area_fraction}%`}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "LatoNormal",
                color: COLORS.WHITE,
              }}
            >
              Cloudy
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 50, flexDirection: "row",justifyContent:'space-around',marginHorizontal:20 }}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:COLORS.WHITE,fontSize:16,}}>Next 1 Hour</Text>
            <Image
              style={{ width: 40, height: 40,marginTop:10 }}
              source={require("../../assets/Icons/cloudSmall.png")}
            />
            <Text style={{color:COLORS.WHITE,fontSize:12}}>{GetWeather(currentDateItem?.next_1_hours?.summary.symbol_code).Title} </Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:COLORS.WHITE,fontSize:16}}>Next 6 Hour</Text>
            <Image
              style={{ width: 40, height: 40,marginTop:10  }}
              source={require("../../assets/Icons/cloudSmall.png")}
            />
            <Text style={{color:COLORS.WHITE,fontSize:12}}>{GetWeather(currentDateItem?.next_6_hours?.summary.symbol_code).Title} </Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:COLORS.WHITE,fontSize:16}}>Next 12 Hour</Text>
            <Image
              style={{ width: 40, height: 40,marginTop:10  }}
              source={require("../../assets/Icons/cloudSmall.png")}
            />
            <Text style={{color:COLORS.WHITE,fontSize:12}}>{GetWeather(currentDateItem?.next_12_hours?.summary.symbol_code).Title} </Text>
          </View>
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
  buttonContainer: {
    backgroundColor: COLORS.CTA,
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.CTA,
    marginHorizontal: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'row',
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '600',
    width: '60%',
    textAlign: 'center',
    fontSize: 20,
  },
});
