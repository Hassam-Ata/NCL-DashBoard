// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchSensorData } from './sensorDataService';
import Header from './components/Header';
import TemperatureCard from './components/TemperatureCard';
import VibrationCard from './components/VibrationCard';
import SensorDataTable from './components/SensorDataTable';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSensorData();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-xl p-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-xl p-5">Error: {error}</div>;
  }

  const latestData = data.length > 0 ? data[0] : null;

  return (
    <div className="container mx-auto p-4">
      {latestData && (
        <>
          <Header deviceID={latestData.device_ID} timestamp={latestData.timestamp} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <TemperatureCard temperature={latestData.temp} />
            <div className="grid grid-cols-1 gap-4">
              <VibrationCard axis="X" value={latestData.vibr_x} />
              <VibrationCard axis="Y" value={latestData.vibr_y} />
              <VibrationCard axis="Z" value={latestData.vibr_z} />
            </div>
          </div>
        </>
      )}
      <SensorDataTable data={data} />
    </div>
  );
};

export default DataFetcher;
