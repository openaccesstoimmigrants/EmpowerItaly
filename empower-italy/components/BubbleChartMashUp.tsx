'use client'

import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

interface ChartDataItem {
    Year: number;
    total_x: number;
    total_y: number;
    Citizenship: string;
}

export default function BubbleChartMashUp() {
  const [chartData, setChartData] = useState<Array<ChartDataItem> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mashupDataResponse = await fetch("https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/MASHUP_1/mashup_1.json");
        if (!mashupDataResponse.ok) {
          throw new Error("Network response was not ok.");
        }
        const jsonData: ChartDataItem[] = await mashupDataResponse.json();
        setChartData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("An error occurred while fetching data.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Year'
        }
      },
      y: {
        title: {
          display: true,
          text: 'total_x'
        }
      }
    }
  };

  // Separate data into two datasets based on 'Citizenship'
  const foreignerData = chartData?.filter(item => item.Citizenship === 'foreign');
  const italianData = chartData?.filter(item => item.Citizenship === 'italian');

  const foreignerBubbleData = foreignerData?.map(item => ({
    x: item.Year,
    y: item.total_y,
    r: item.total_x
  }));

  const italianBubbleData = italianData?.map(item => ({
    x: item.Year,
    y: item.total_y,
    r: item.total_x
  }));

  return (
    <section id='scatterplot-mashup' className="pb-6">
      <article className="max-w-7xl m-auto">
        <div className="grid grid-cols-12 gap-6 h-full">
          <div className="bg-indigo-100 rounded-2xl p-12 col-span-12">
            <h1 className="font-bold text-4xl text-indigo-900 uppercase pb-8">MASH UP</h1>
            <div className='bg-gray-50 rounded-2xl p-12'>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <Bubble
                data={{
                  datasets: [
                    {
                      label: 'Foreigners',
                        backgroundColor: 'rgba(251, 146, 60, 0.5)',
                      data: foreignerBubbleData || [],
                    },
                    {
                      label: 'Italians',
                        backgroundColor: 'rgba(129, 140, 248, 0.5)',
                      data: italianBubbleData || [],
                    }
                  ]
                }}
                options={chartOptions}
              />
            )}
          </div>
        </div>
        </div>
      </article>
    </section>
  );
}