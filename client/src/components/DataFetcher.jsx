// src/App.js
import React, { useEffect, useState } from 'react';
// Below is the main component
const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use the proxied API URL
  const API_URL = '/data';  // Vite proxy will handle forwarding to http://pdm.nedncl.com/data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Sensor Data</h1>
      {data.map((item) => (
        <div key={item._id} style={{ border: '1px solid black', padding: '10px', margin: '10px 0' }}>
          <h3>Device ID: {item.device_ID}</h3>
          <p><strong>Sensor:</strong> {item.sensor}</p>
          <p><strong>Temperature:</strong> {item.temp}°C</p>
          <p><strong>Vibration (X):</strong> {item.vibr_x}</p>
          <p><strong>Vibration (Y):</strong> {item.vibr_y}</p>
          <p><strong>Vibration (Z):</strong> {item.vibr_z}</p>
          <p><strong>Timestamp:</strong> {new Date(item.timestamp).toLocaleString()}</p>
          <p><strong>Created:</strong> {new Date(item.created).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetcher;