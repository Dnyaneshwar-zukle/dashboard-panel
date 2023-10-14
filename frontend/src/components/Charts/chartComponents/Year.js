import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Year = ({ data }) => {
  // Extract relevant data for the Year chart
  const yearData = data.map((item) => ({
    year: item.start_year, // Extract the start year as the 'year'
    value: item.intensity, // Extract intensity as the 'value' (you can change this as needed)
  }));

  // Format the data for the chart
  const chartData = {
    labels: yearData.map((item) => item.year),
    datasets: [
      {
        label: "Intensity",
        data: yearData.map((item) => item.value),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Year Chart Example</h2>
      <Line width="100" data={chartData} options={options} />
    </div>
  );
};

export default Year;
