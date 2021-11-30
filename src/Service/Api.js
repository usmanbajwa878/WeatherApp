export const fetchWeatherData = async (lat, lng) => {
    console.log("lAT",lat)
    try {
        let response = await fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58',{
            method:"GET",
            headers:{
                'User-Agent': 'Web/2.0',
                'Accept': 'application/json'
            }
        });
        console.log("RESPONSE",response)
        let responseJson = await response.json();
        return responseJson;
        } catch (error) {
        console.error(error);
        }
};
