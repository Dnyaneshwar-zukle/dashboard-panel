import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Likehood = ({ data }) => {
  // Extract and format the data for the Pie chart
  const customDataMapping = data.map((item) => ({
    _id: item._id,
    likelihood: item.likelihood,
  }));

  const chartData = {
    labels: customDataMapping.map((item) => item._id),
    datasets: [
      {
        label: "Likelihood Data",
        data: customDataMapping.map((item) => item.likelihood),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // Adjust options as needed
  };

  return (
    <div>
      <h2>Pie Chart Example</h2>
      <Pie width="100" data={chartData} options={options} />
    </div>
  );
};

export default Likehood;
