
import { ref, computed, reactive, Ref } from 'vue';
import { defineStore } from 'pinia';
import { Weather } from "../models/weather"
import { fetchWeatherData } from '../api/index';
import { weatherIcon } from '../static/weatherIcon';
import { useRoute } from 'vue-router'


export const useWeatherStore = defineStore('weather', () => {
  const route = useRoute();
  const cityName = computed(() => {
    return route.params.city || 'Seoul';
  })

  const weatherData = ref({
    
  });

  const currentWeather:Ref<Weather> = ref({
    date: '',
    city: '',
    country: '',
    temp: 0,
    feels_like: 0,
    cloud: 0,
    humidity: 0,
    visibility: 0,
    wind_kph: 0,
    wind_direction: '',
    uv: 0,
    rain: 0,
    snow: 0,
    condition: '',
    icon: '',
    is_day: true,
    sunrise: '',
    sunset: '',
    moon_phase: '',
    moon_illumination: 0,
    last_updated: '',
  })

  const dailyWeather = ref([]);

  const getCurrentWeatherData = (data) => {
    let result = {
      date: data.location.localtime,
      city: data.location.name,
      country: data.location.country,
      temp: Math.round(data.current.temp_c),
      feels_like: Math.round(data.current.feelslike_c),
      cloud: data.current.cloud,
      humidity: data.current.humidity,
      visibility: data.current.vis_km,
      wind_kph: data.current.wind_kph,
      wind_direction: data.current.wind_dir,
      uv: data.current.uv,
      rain: data.forecast.forecastday[0].day.daily_chance_of_rain,
      snow: data.forecast.forecastday[0].day.daily_chance_of_snow,
      condition: data.current.condition.text,
      icon: `https:${data.current.condition.icon}`,
      is_day: data.current.is_day === 1,
      sunrise: data.forecast.forecastday[0].astro.sunrise,
      sunset: data.forecast.forecastday[0].astro.sunset,
      moon_phase: data.forecast.forecastday[0].astro.moon_phase,
      moon_illumination: data.forecast.forecastday[0].astro.moon_illumination,
      last_updated: data.current.last_updated,
    }
    
    return result;
  };

  const getDailyWeatherData = (data) => {
    let result = data.forecast.forecastday.map((el) => ({
      date: el.date,
      day: new Date(el.date_epoch * 1000).toString().slice(0, 3),
      max_temp: Math.round(el.day.maxtemp_c),
      min_temp: Math.round(el.day.mintemp_c),
      temp: Math.round(el.day.avgtemp_c),
      humidity: el.day.avghumidity,
      wind: el.day.maxwind_kph,
      wind_degree: el.day.maxwind_degree,
      ux: el.day.uv,
      condition: el.day.condition.text,
      icon : `https:${el.day.condition.icon}`,
      is_day: el.day.condition.is_day === 1,
    }))

    return result;
  };


  async function fetchWeather() {
    try {
      const { data } = await fetchWeatherData(cityName.value);
      currentWeather.value = getCurrentWeatherData(data);
      dailyWeather.value = getDailyWeatherData(data);
    } catch (err) {
      console.log(err);
    }
  }

  return {
    currentWeather,
    dailyWeather,
    fetchWeather,
  };
});