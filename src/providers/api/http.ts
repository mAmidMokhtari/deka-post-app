import axios from "axios";

const http = axios.create({
  baseURL: `https://api.openweathermap.org/data`,
  headers: {
    "Content-type": "application/json",
  },
});

export const getWeather = async (city: string) => {
  const response = await http.get(
    `/2.5/weather?q=${city}&appid=27a93eaa7de7f0c81455007507d6240b&units=metric`
  );
  return response.data;
};
