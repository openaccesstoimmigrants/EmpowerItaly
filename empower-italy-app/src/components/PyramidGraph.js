import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PyramidChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart = null;

    const createChart = () => {
      const ctx = chartRef.current.getContext('2d');

      const ageLabels = [...Array(100).keys()].map(age => (age === 99 ? '100+' : age.toString())).reverse();
      const filteredData = data.filter(item => item.Year === 2022 && item.Age !== 'TOTAL');

      const maleData = ageLabels.map(age => {
        const maleItem = filteredData.find(item => item.Age === age && item.Sex === 'Male');
        return maleItem ? maleItem.Quantity : 0;
      });

      const femaleData = ageLabels.map(age => {
        const femaleItem = filteredData.find(item => item.Age === age && item.Sex === 'Female');
        return femaleItem ? -femaleItem.Quantity : 0; // Use negative values for female bars
      });

      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ageLabels,
          datasets: [
            {
              label: 'Male',
              data: maleData,
              backgroundColor: 'rgba(54, 162, 235, 0.8)',
            },
            {
              label: 'Female',
              data: femaleData,
              backgroundColor: 'rgba(255, 99, 132, 0.8)',
            },
          ],
        },
        options: {
          barPercentage: 1,
          categoryPercentage: 0.8,
          borderSkipped: false,
          indexAxis: 'y',
          responsive: true,
          scales: {
            x: {
              beginAtZero: true,
              stacked: true,
              ticks: {
                callback: value => (Math.abs(value) === 100 ? '100+' : Math.abs(value)), // Display positive values
              },
            },
            y: {
              stacked: true,
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: context => {
                  const datasetLabel = context.dataset.label || '';
                  const age = Math.abs(ageLabels[context.dataIndex]); // Get the absolute value of the age
                  let value = 0;

                  if (datasetLabel === 'Male') {
                    value = Math.abs(maleData[context.dataIndex]); // Display positive values
                  } else if (datasetLabel === 'Female') {
                    value = Math.abs(femaleData[context.dataIndex]); // Display positive values
                  }

                  return `${datasetLabel} (Age ${age}): ${value}`;
                },
              },
            },
            title: {
              display: true,
              text: 'Resident immigrants demographic in 2022 (thousands)',
            },
          },
        },
      });
    };

    const destroyChart = () => {
      if (chart) {
        chart.destroy();
        chart = null;
      }
    };

    createChart();

    return () => {
      destroyChart();
    };
  }, [data]);

  return (
    <section id="immigrants-demographics" className="max-w-6xl items-center mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">From where?</h1>
      <p>Bla bla bla</p>
      <canvas ref={chartRef} style={{ height: '200px'}} />
    </section>
  );
};

export default PyramidChart;
