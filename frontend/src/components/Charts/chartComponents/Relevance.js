import React from "react";
import { Bubble, Radar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Relevance = ({ data }) => {
  // Extract and format the data for the Radar chart
  const relevanceData = data.map((item, index) => ({
    label: `Data Point ${index + 1}`, // Generic label
    value: item.relevance,
  }));

  // Format the data for the Radar chart
  const chartData = {
    labels: relevanceData.map((item) => item.label),
    datasets: [
      {
        label: "Relevance Data",
        data: relevanceData.map((item) => item.value),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5, // Adjust the max value as needed
      },
    },
  };

  return (
    <div>
      <h2>Radar Chart Example</h2>
      <Radar width="100" data={chartData} options={options} />
    </div>
  );
};

export default Relevance;
