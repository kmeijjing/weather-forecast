import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import { GeoLocation } from "../models/geoLocation"
import { fetchGeoLocationData } from '../api/index';
import { useRoute } from 'vue-router'

export const useLocationStore = defineStore('location', () => {
  const location: GeoLocation = reactive({});

  const route = useRoute();

  async function fetchLocation() {
    const cityName = route.params.city || 'Seoul'
    try {
      const { data } = await fetchGeoLocationData(cityName);
      location.country = data[0].country;
      location.name = data[0].name;
      location.lat = data[0].lat;
      location.lon = data[0].lon;
    } catch (err) {
      console.log(err);
    }
  }

  return {
    location,
    fetchLocation,
  };
});
