import React from 'react';
import { Bar } from 'react-chartjs-2';

const GroupedBarChart = ({ data }) => {

    const colors = ['#FFE45E', '#FC6471','#FFB9C8',  '#2C497F', '#A4D1F5','#6BCD9A'];

    const continentLabels = {
    AFR: 'Africa',
    AME: 'America',
    ASI: 'Asia',
    EU27_FOR: 'EU 27',
    EUR_NEU27: 'Extra EU 27',
    OCE: 'Oceania',
    };

    // Prepare chart data
    const labels = data.AFR
      .map(entry => entry.year.split('-')[0])
      .slice(-10); // Filter and show only the last 10 years

    const datasets = Object.keys(data).map(region => {
      return {
          label: continentLabels[region], // Use the custom label from the continentLabels object
          data: data[region]
            .map(entry => entry.tot_immigrants)
            .slice(-10), // Filter and show only the last 10 years
          backgroundColor: getColor(region),
          barPercentage: 0.8, // Set the width of the bars
          };
    });

  // Generate random color for each region
    function getColor(region) {
    // Use a predefined color array
    const colorIndex = Object.keys(data).indexOf(region);
    return colors[colorIndex % colors.length];
    }

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  // Chart.js options
  const chartOptions = {
    indexAxis: 'x', // Display bars along the x-axis
    plugins: {
      title: {
        display: true,
        text: 'Immigrants from the world to Italy (thousands)',
      },
    },
    scales: {
      x: {
        stacked: false,
        beginAtZero: true,
        grid: {
            offset: true, // Add some space between bars and the axis
        },
        ticks: {
          autoSkip: false,
          maxTicksLimit: 1,
        },
      },
      y: {
        stacked: false,
        beginAtZero: true,
      },
    },
    //barSpacing: 80, // Set the spacing between bars in pixels
    //barCategoryGap: '20%', // Set the gap between bars of each year
    //categoryPercentage: 0.5,
    //barPercentage:0.5,
  };

  return (
        <section id="total-immigrants-world" className="max-w-6xl items-center mx-auto py-12">
            <h1 className="text-4xl font-bold mb-6">From where?</h1>
            <p>Bla bla bla</p>
            <Bar data={chartData} options={chartOptions} />
        </section>
    )
}

export default GroupedBarChart;
