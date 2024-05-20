'use client';

import React from "react";
import ReactApexChart from "react-apexcharts";

export const TemperatureChart: React.FC = () => {
  const series = [
    {
      name: "Temperatura Média (SP)",
      data: [22, 23, 21, 25, 28, 27, 26, 30, 32, 31],
    },
    {
      name: "Temperatura Registrada",
      data: [19, 21, 20, 22, 25, 24, 23, 27, 29, 28],
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: true,
      },
    },
    title: {
      text: "Variação Temperaturas",
      align: "left",
      style: {
        fontSize: "16px",
        color: "black",
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
      ],
      title: {
        text: "Meses",
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      title: {
        text: "Temperatura (°C)",
        style: {
          fontSize: "12px",
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export const UmidadeChart: React.FC = () => {
  const series = [
    {
      name: "Umidade Média (SP)",
      data: [74.7, 74.2, 76, 72.2, 65.4, 58.8, 51, 43.5, 46.5, 58.8, 74.5, 76],
    },
    {
      name: "Umidade Registrada",
      data: [19, 21, 20, 22, 25, 24, 23, 27, 29, 28, 12, 23,],
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: true,
      },
    },
    title: {
      text: "Variação da Umidade",
      align: "left",
      style: {
        fontSize: "16px",
        color: "black",
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
      ],
      title: {
        text: "Meses",
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      title: {
        text: "Umidade (%)",
        style: {
          fontSize: "12px",
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

