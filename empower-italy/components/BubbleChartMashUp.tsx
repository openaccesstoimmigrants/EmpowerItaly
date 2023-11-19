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


export default function BubbleChartMashUp() {

    // Fetch the data relative to MASHUP_1
    const [mashupData, setMashupData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Italians age data
                const mashupDataResponse = await fetch("https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/MASHUP_1/mashup_1.json");
                if (!mashupDataResponse.ok) {
                    throw new Error("Network response was not ok.");
                }

            } catch (error) {
                console.error("Error fetching data:", error);
                setError("An error occurred while fetching data.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section id='scatterplot-mashup'  className="pb-6">
            <article className="max-w-7xl m-auto">
                <div className="grid grid-cols-12 gap-6 h-full">
                    <div className="bg-indigo-100 rounded-2xl p-12 col-span-7 grid">
                        <h1 className="font-bold text-4xl text-indigo-900 uppercase pb-8">MASH UP</h1>
                        {/* <Bubble data={chartData} options={chartOptions} /> */}
                    </div>
                </div>
            </article>
        </section>
    );
}



// export const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

// export const data = {
//   datasets: [
//     {
//       label: 'Red dataset',
//       data: Array.from({ length: 50 }, () => ({
//         x: faker.datatype.number({ min: -100, max: 100 }),
//         y: faker.datatype.number({ min: -100, max: 100 }),
//         r: faker.datatype.number({ min: 5, max: 20 }),
//       })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Blue dataset',
//       data: Array.from({ length: 50 }, () => ({
//         x: faker.datatype.number({ min: -100, max: 100 }),
//         y: faker.datatype.number({ min: -100, max: 100 }),
//         r: faker.datatype.number({ min: 5, max: 20 }),
//       })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };