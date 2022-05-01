import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import s from './LineGraph.module.css';
export const LineGraph = ({ lineLabels, lineData }) => {
  const state = {
    labels: lineLabels,
    datasets: [
      {
        label: 'RainFall',
        backgroundColor: ['#bbff00', '#3420e8', '#e58a13', '#ea1418'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: lineData,
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
        text: 'My first LineGraph',
        display: true,
        fontSize: 20,
      },
    },
  };
  return <Line data={state} options={options} />;
};

LineGraph.propTypes = {
  lineLabels: PropTypes.arrayOf(PropTypes.string),
  lineData: PropTypes.arrayOf(PropTypes.number),
};
