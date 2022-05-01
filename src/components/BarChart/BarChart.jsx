import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import s from './BarChart.module.css';

export const BarChart = ({ barLabels, barData }) => {
  const state = {
    labels: barLabels,
    datasets: [
      {
        label: 'RainFall',
        backgroundColor: ['#bbff00', '#3420e8', '#e58a13', '#ea1418'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: barData,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
      title: {
        text: 'My first BarChart',
        display: true,
        fontSize: 20,
      },
    },
  };
  return <Bar data={state} options={options} />;
};

BarChart.propTypes = {
  barLabels: PropTypes.arrayOf(PropTypes.string),
  barData: PropTypes.arrayOf(PropTypes.number),
};
