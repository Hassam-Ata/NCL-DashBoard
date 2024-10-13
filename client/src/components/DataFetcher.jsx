// // src/App.js
// import React, { useEffect, useState } from 'react';
// import { fetchSensorData } from './sensorDataService';
// import Header from './components/Header';
// import TemperatureCard from './components/TemperatureCard';
// import VibrationCard from './components/VibrationCard';
// import SensorDataTable from './components/SensorDataTable';
// import Search from './components/Search';

// const DataFetcher = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // The search key (can be 'device_ID', 'sensor', etc.)
//   const searchKey = 'device_ID';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await fetchSensorData();
//         setData(result);
//         setFilteredData(result);  // Initially, all data is displayed
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (query) => {
//     if (!query) {
//       setFilteredData(data);  // If the search is empty, show all data
//     } else {
//       const filtered = data.filter((item) =>
//         String(item[searchKey]).toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredData(filtered);
//     }
//   };

//   if (loading) {
//     return <div className="text-center text-xl p-5">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-500 text-xl p-5">Error: {error}</div>;
//   }

//   const latestData = filteredData.length > 0 ? filteredData[0] : null;

//   return (
//     <div className="container mx-auto p-4">
//       <Search onSearch={handleSearch} searchKey={searchKey} />
//       {latestData && (
//         <>
//           <Header deviceID={latestData.device_ID} timestamp={latestData.timestamp} />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//             <TemperatureCard temperature={latestData.temp} />
//             <div className="grid grid-cols-1 gap-4">
//               <VibrationCard axis="X" value={latestData.vibr_x} />
//               <VibrationCard axis="Y" value={latestData.vibr_y} />
//               <VibrationCard axis="Z" value={latestData.vibr_z} />
//             </div>
//           </div>
//         </>
//       )}
//       <SensorDataTable data={filteredData} />
//     </div>
//   );
// };

// export default DataFetcher;
