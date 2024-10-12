// src/components/SensorDataTable.js
import React from 'react';

const SensorDataTable = ({ data }) => {
  return (
    <div className="mt-8">
      <table className="table-auto w-full text-left border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Timestamp</th>
            <th className="p-2 border">Temperature (°C)</th>
            <th className="p-2 border">Vibration (X)</th>
            <th className="p-2 border">Vibration (Y)</th>
            <th className="p-2 border">Vibration (Z)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2 border">{new Date(item.timestamp).toLocaleString()}</td>
              <td className="p-2 border">{item.temp}</td>
              <td className="p-2 border">{item.vibr_x}</td>
              <td className="p-2 border">{item.vibr_y}</td>
              <td className="p-2 border">{item.vibr_z}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SensorDataTable;
