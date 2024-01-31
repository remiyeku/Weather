export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.GEO_API_KEY,
    "X-RapidAPI-Host": process.env.GEO_API_HOST,
  },
};

export const GEO_API_URL = process.env.GEO_API_URL;

export const WEATHER_API_URL = process.env.WEATHER_API_URL;
export const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
