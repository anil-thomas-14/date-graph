import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const UserChart = ({ graphData }) => {
  console.log("graphData", graphData);

  const finalData = [];

  graphData.forEach((item) => {
    const keys = Object.keys(item);
    console.log("keys", keys);
    finalData.push({
      name: keys[0],
      value: item[keys[0]],
    });
  });

  console.log("finalData", finalData);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={finalData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UserChart;
