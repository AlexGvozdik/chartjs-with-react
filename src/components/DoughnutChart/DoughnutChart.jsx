import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import s from './DoughnutChart.module.css';

export const DoughnutChart = ({ doughnutLabels, doughnutData }) => {
  const state = {
    labels: doughnutLabels,
    datasets: [
      {
        label: 'RainFall',
        backgroundColor: ['#bbff00', '#3420e8', '#e58a13', '#ea1418'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: doughnutData,
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
        text: 'My first DoughnutChart',
        display: true,
        fontSize: 20,
      },
    },
  };
  return (
    <div className={s.doughnutChart}>
      <Doughnut data={state} options={options} />
    </div>
  );
};

DoughnutChart.propTypes = {
  doughnutLabels: PropTypes.arrayOf(PropTypes.string),
  doughnutData: PropTypes.arrayOf(PropTypes.number),
};
