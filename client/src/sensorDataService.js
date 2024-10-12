// src/sensorDataService.js
export const fetchSensorData = async () => {
    const API_URL = '/data';  // Vite proxy will handle forwarding to the actual API
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching sensor data:', error);
      throw error;
    }
  };
  