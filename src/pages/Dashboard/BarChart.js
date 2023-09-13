import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export default function BarChart({ chartdata, labels }) {
  const [data, setData] = useState({});
  useEffect(() => {
    setData({
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: chartdata,
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
  }, [chartdata, labels]);
  return (
    <div className="chart">
      {chartdata?.length > 0 && labels?.length > 0 ? (
        <Bar options={options} data={data} />
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}
