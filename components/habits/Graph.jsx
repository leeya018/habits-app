import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import Button from "./Button";
import { useRouter } from "next/router";
import * as UTIL from "@/util";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function Graph({ items, totalAmount }) {
  const router = useRouter();
  console.log({ totalAmount });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      // scales: {
      //   y: {
      //     min: 0, // minimum value
      //     max: 100, // maximum value
      //   },
      // },
      scales: {
        y: {
          suggestedMin: 50,
          suggestedMax: 100,
          // suggestedMax: totalAmount,
        },
      },
      // scales: {
      //   yAxes: [
      //     {
      //       ticks: {
      //         min: 0, // minimum value
      //         max: 100, // maximum value
      //       },
      //     },
      //   ],
      // },
      // scales: {
      //   yAxis: {
      //     min: 0,
      //     max: 100,
      //   },
      // },
    },
  };

  const labels = items.map((data) => UTIL.getDateStrIsrael(data.date));

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Dataset 2",
        data: items.map((data) => data.amount),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div>
      <Button position="absolute top-1" onClick={() => router.back()}>
        back to habit
      </Button>
      <div className="scale-75">
        <Line options={options} data={data} items={items} />;
      </div>
    </div>
  );
}