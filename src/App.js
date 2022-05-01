import React, { useState, useEffect, useRef, memo } from 'react';
import { Container } from 'components/Container/Container';
import { BarChart } from 'components/BarChart/BarChart';
import { LineGraph } from 'components/LineGraph/LineGraph';
import { PieChart } from 'components/PieChart/PieChart';
import { DoughnutChart } from 'components/DoughnutChart/DoughnutChart';
import { LoaderMy } from 'components/Loader/Loader';
import { converter2Labels, converter2Values, delay } from 'helpers/helper';
import s from 'App.module.css';

function App() {
  const [labels, setLabels] = useState('');
  const [values, setValues] = useState('');
  const [chartType, setChartType] = useState('bar');
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);

  const onHandleKeyPressFirst = e => {
    if (e.key === 'Enter' && e.target.value.length >= 3) {
      setLabels(ref.current.value);
    }
  };
  const onHandleBlurFirst = e => {
    setLabels(ref.current.value);
  };
  const onHandleKeyPressSecond = e => {
    if (e.key === 'Enter') {
      setValues(ref2.current.value);
    }
  };
  const onHandleBlurSecond = e => {
    setValues(ref2.current.value);
  };

  const onHandleChangeRadio = event => {
    setIsLoading(true);
    const value = event.target.value;
    delay(2000).then(() => {
      setChartType(value);
      setIsLoading(false);
    });
  };

  const ourCharts = type => {
    switch (type) {
      case 'bar':
        {
          return isLoading ? (
            <div className={s.loaderContainer}>
              <LoaderMy />
            </div>
          ) : (
            <BarChart
              barLabels={converter2Labels(labels)}
              barData={converter2Values(values)}
            />
          );
        }
        break;
      case 'line':
        {
          return isLoading ? (
            <div className={s.loaderContainer}>
              <LoaderMy />
            </div>
          ) : (
            <LineGraph
              lineLabels={converter2Labels(labels)}
              lineData={converter2Values(values)}
            />
          );
        }
        break;
      case 'pie':
        {
          return isLoading ? (
            <div className={s.loaderContainer}>
              <LoaderMy />
            </div>
          ) : (
            <PieChart
              pieLabels={converter2Labels(labels)}
              pieData={converter2Values(values)}
            />
          );
        }
        break;
      case 'doughnut':
        {
          return isLoading ? (
            <div className={s.loaderContainer}>
              <LoaderMy />
            </div>
          ) : (
            <DoughnutChart
              doughnutLabels={converter2Labels(labels)}
              doughnutData={converter2Values(values)}
            />
          );
        }
        break;
      default:
        return <BarChart />;
        break;
    }
  };
  return (
    <>
      <Container>
        <div className={s.mainInputWrapper}>
          <div className={s.firstInputWrapper}>
            <label className={s.label}>
              <span className={s.labelSpan}>X axis labels:</span>

              <input
                ref={ref}
                type="text"
                name="labels"
                onBlur={onHandleBlurFirst}
                onKeyPress={onHandleKeyPressFirst}
                placeholder=""
              />
            </label>
          </div>
          <div className={s.secondInputWrapper}>
            <label className={s.label}>
              <span className={s.labelSpan}>Y axis values:</span>
              <input
                ref={ref2}
                onBlur={onHandleBlurSecond}
                name="values"
                onKeyPress={onHandleKeyPressSecond}
                type="text"
                placeholder=""
              />
            </label>
          </div>
        </div>
        {labels.length && values.length ? (
          <div className={s.chartWrapper}>{ourCharts(chartType)}</div>
        ) : (
          <div className={s.chartWrapper}>
            <h1>Please fill X and Y fields</h1>
          </div>
        )}
        {labels.length && values.length ? (
          <div className={s.radioWrapper}>
            <label className={s.labelRadio}>
              <input
                onChange={onHandleChangeRadio}
                type="radio"
                name="chartjs"
                value="bar"
                checked={chartType === 'bar'}
              />
              <span className={s.spanRadio}>Bar Chart</span>
            </label>
            <label className={s.labelRadio}>
              <input
                onChange={onHandleChangeRadio}
                type="radio"
                name="chartjs"
                value="line"
                checked={chartType === 'line'}
              />
              <span className={s.spanRadio}>Line Graph</span>
            </label>
            <label className={s.labelRadio}>
              <input
                onChange={onHandleChangeRadio}
                type="radio"
                name="chartjs"
                value="pie"
                checked={chartType === 'pie'}
              />
              <span className={s.spanRadio}>Pie Chart</span>
            </label>
            <label className={s.labelRadio}>
              <input
                onChange={onHandleChangeRadio}
                type="radio"
                name="chartjs"
                value="doughnut"
                checked={chartType === 'doughnut'}
              />
              <span className={s.spanRadio}>Doughnut Chart</span>
            </label>
          </div>
        ) : (
          <div></div>
        )}
      </Container>
    </>
  );
}

export default memo(App);
