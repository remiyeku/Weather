export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.GEO_API_KEY,
    "X-RapidAPI-Host": process.env.GEO_API_HOST,
  },
};

try {
  const response = await fetch(GEO_API_URL, geoApiOptions);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}

export const WEATHER_API_URL = process.env.WEATHER_API_URL;
export const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
