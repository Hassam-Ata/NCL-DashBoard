import React, { useEffect, useState } from "react";
import { fetchSensorData } from "./sensorDataService";
import Header from "./components/Header";
import TemperatureCard from "./components/TemperatureCard";
import VibrationCard from "./components/VibrationCard";
import SensorDataTable from "./components/SensorDataTable";
// import ThemeToggle from "./components/ThemeToggle";
import Filter from "./components/Filter";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterKey, setFilterKey] = useState("device_ID");
  const [query, setQuery] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const filterOptions = [
    { value: "device_ID", label: "Device ID" },
    { value: "sensor", label: "Sensor" },
    { value: "temp", label: "Temperature" },
    { value: "vibr_x", label: "Vibration X" },
    { value: "vibr_y", label: "Vibration Y" },
    { value: "vibr_z", label: "Vibration Z" },
  ];

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSensorData();
        setData(result);
        setFilteredData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Search and filter logic
  const handleSearch = () => {
    const filtered = query
      ? data.filter((item) =>
          String(item[filterKey]).toLowerCase().includes(query.toLowerCase())
        )
      : data;
    setFilteredData(filtered);
  };

  const handleFilterChange = (key) => {
    setFilterKey(key);
    setFilterVisible(false); // Hide dropdown after selecting
  };

  if (loading) return <div className="text-center text-xl p-5">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500 text-xl p-5">Error: {error}</div>
    );

  const renderSearchBar = () => (
    <div className="flex flex-col md:flex-row justify-center items-center my-4 space-x-0 md:space-x-2">
      <input
        type="text"
        placeholder={`Search by ${filterKey}`}
        className="border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-2/3 dark:text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2 md:mt-0"
      >
        Search
      </button>
      <button
        onClick={() => setFilterVisible(!filterVisible)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2 md:mt-0"
      >
        Filter
      </button>
    </div>
  );

  const renderFilterDropdown = () =>
    filterVisible && (
      <div className="flex justify-center items-center mb-4">
        <Filter options={filterOptions} onFilterChange={handleFilterChange} />
      </div>
    );

  const renderSensorCards = (latestData) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <TemperatureCard temperature={latestData.temp} />
      <div className="grid grid-cols-1 gap-4">
        <VibrationCard axis="X" value={latestData.vibr_x} />
        <VibrationCard axis="Y" value={latestData.vibr_y} />
        <VibrationCard axis="Z" value={latestData.vibr_z} />
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4 bg-white text-black dark:bg-gray-900 dark:text-white">
      {/* <ThemeToggle /> */}

      {filteredData.length > 0 ? (
        <>
          <Header
            deviceID={filteredData[0].device_ID}
            timestamp={filteredData[0].timestamp}
          />
          {renderSensorCards(filteredData[0])}
        </>
      ) : (
        <div className="text-center text-red-500">Device ID does not exist</div>
      )}

      {renderSearchBar()}
      {renderFilterDropdown()}

      <SensorDataTable data={filteredData} />
    </div>
  );
};

export default DataFetcher;
