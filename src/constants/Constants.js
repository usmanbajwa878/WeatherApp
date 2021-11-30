export const weatherCodes = [
  {
    Code: "snow",
    Title: "Snow",
    imageBackground: require("../../assets/Icons/snowIcon.png"),
  },
  {
    Code: "heavysnow",
    Title: "Heavy Snow",
    imageBackground: require("../../assets/Icons/snowIcon.png"),
  },
  {
    Code: "lightsnow",
    Title: "Light Snow",
    imageBackground: require("../../assets/Icons/snowIcon.png"),
  },
  {
    Code: "cloudy",
    Title: "Cloudy",
    imageBackground: require("../../assets/Icons/cloudSmall.png"),
  },
  {
    Code: "partlycloudy_night",
    Title: "Partly Cloudy Night",
    imageBackground: require("../../assets/Icons/cloudSmall.png"),
  },
  {
    Code: "partlycloudy_day",
    Title: "Partly Cloudy",
    imageBackground: require("../../assets/Icons/cloudSmall.png"),
  },
  {
    Code: "lightsnowshowers_day",
    Title: "Light Snow Showers",
    imageBackground: require("../../assets/Icons/snowIcon.png"),
  },
  {
    Code: "snowshowers_day",
    Title: "Ligh Showers",
    imageBackground: require("../../assets/Icons/snowIcon.png"),
  },
  {
    Code: "fair_day",
    Title: "Fair Day",
    imageBackground: require("../../assets/Icons/sun.png"),
  },
  {
    Code: "clearsky_day",
    Title: "Clear Day",
    imageBackground: require("../../assets/Icons/sun.png"),
  },
  {
    Code: "fair_night",
    Title: "Fair Night",
    imageBackground: require("../../assets/Icons/moon.png"),
  },

];

export const weatherCondtitions = [
  "snow",
  "heavysnow",
  "lightsnow",
  "cloudy",
  "partlycloudy_night",
  "partlycloudy_day",
  "lightsnowshowers_day",
  "snowshowers_day",
  "fair_day",
  "clearsky_day",
  "fair_night",
];

export const MONTH = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export const GetWeather = (key) =>{
    console.log("key",key);
    const index = weatherCondtitions.indexOf(key);
    console.log("index",index);
    if(index !== -1){
        return weatherCodes[index]
    }else {
        return   {
            Code: "fair_day",
            Title: "Fair Day",
            imageBackground: require("../../assets/Images/cloud.jpg"),
          }
    }
}