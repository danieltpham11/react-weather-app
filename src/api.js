export const geoAPI_url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

export const geoAPIOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "GEOAPI_KEY",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

try {
  const response = await fetch(geoAPI_url, geoAPIOptions);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

export const WEATHER_API_URL ="https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "WEATHERAPI_KEY";