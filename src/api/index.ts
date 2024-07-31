import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.weatherapi.com/v1/',
};

// 2. API 함수들을 정리
const apiKey = import.meta.env.VITE_API_KEY

const fetchWeatherData = (cityName: string | string[]) => {
  return axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5&aqi=no&alerts=no`);
}

export {
  fetchWeatherData,
};