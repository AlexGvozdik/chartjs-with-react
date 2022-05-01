import React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import s from './PieChart.module.css';

export const PieChart = ({ pieLabels, pieData }) => {
  const state = {
    labels: pieLabels,
    datasets: [
      {
        label: 'RainFall',
        backgroundColor: ['#bbff00', '#3420e8', '#e58a13', '#ea1418'],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: pieData,
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
        text: 'My first PieChart',
        display: true,
        fontSize: 20,
      },
    },
  };
  return (
    <div className={s.pieChart}>
      <Pie data={state} options={options} />
    </div>
  );
};

PieChart.propTypes = {
  pieLabels: PropTypes.arrayOf(PropTypes.string),
  pieData: PropTypes.arrayOf(PropTypes.number),
};
