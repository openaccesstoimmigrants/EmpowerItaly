'use client'

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface OccupationDataAll {
  foreign: OccupationData[];
  italian: OccupationData[];
}

interface OccupationData {
  OCCUPATION: string;
  YEAR: string;
  VALUE: number;
}

export default function HorizontalBarChart() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [jsonData, setJsonData] = useState<OccupationDataAll | null>(null);
    const [occupation, setOccupation] = useState<string>('industry');
    const [chartData, setChartData] = useState<{ labels: string[]; datasets: any[] }>({
        labels: [],
        datasets: [],
    });


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D6/occupations_rate.json');
                if (!response.ok) {
                throw new Error("Network response was not ok.")
                }

                const data = await response.json();
                setJsonData(data as OccupationDataAll);
                setLoading(false);

            } catch (error) {
                console.error("Error fetching data:", error);
                setError("An error occurred while fetching data.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getChartData = useCallback(() => {
        if (!jsonData) {
            console.log('Data not available.');
            return { labels: [], datasets: [] };
        }

        const italianOccupationData = jsonData.italian?.filter(data => data.OCCUPATION === occupation) || [];
        const foreignOccupationData = jsonData.foreign?.filter(data => data.OCCUPATION === occupation) || [];

        const years = italianOccupationData.map(data => data.YEAR);
        const italianValues = italianOccupationData.map(data => data.VALUE);
        const foreignValues = foreignOccupationData.map(data => data.VALUE);

        setChartData((prevState: any) => ({
        ...prevState,
        labels: years,
        datasets: [
            {
            label: 'Italian',
            data: italianValues,
            backgroundColor: 'rgba(79, 70, 229, 0.6)',
            borderColor: 'rgba(79, 70, 229, 1)',
            borderWidth: 1,
            },
            {
            label: 'Foreign',
            data: foreignValues,
            backgroundColor: 'rgba(234, 88, 12, 0.6)',
            borderColor: 'rgba(234, 88, 12, 1)',
            borderWidth: 1,
            },
        ],
        }));
    }, [occupation, jsonData]);

    // Update chart data when occupation or jsonData changes
    useEffect(() => {
        getChartData();
    }, [getChartData]);

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        //indexAxis: 'y' as const,
        scales: {
        x: {
            title: {
            display: true,
            text: 'Number of workers (thousand)',
            },
        },
        y: {
            title: {
            display: false,
            },
            suggestedMin: 11000,
            suggestedMax: 11000, // Set a fixed maximum value for the y-axis
        },
        },
    };

    const handleOccupationChange = (selectedOccupation: string) => {
        setOccupation(selectedOccupation);
    };

    return (
        <div>
        <select onChange={(e) => handleOccupationChange(e.target.value)}>
            <option value="industry">Industry</option>
            <option value="other services activity">Other Services Activity</option>
            <option value="trade, hotels and restaurants">Trade, Hotels and Restaurants</option>
            <option value="agriculture, forestry and fishing">Agriculture, Forestry and Fishing</option>
            <option value="construction">Construction</option>
        </select>
        <div>
            <h2>Occupation: {occupation}</h2>
                                <div className="h-[32rem] m-2">
            <Bar data={chartData} options={options} />
</div>
        </div>
        </div>
    );
}


    // return (
    //     <section id="barchart-education" className="pb-6">
    //         <article className="
    //                         max-w-7xl
    //                         m-auto
    //                         animate-fade-in-down
    //         ">
    //             <div className="
    //                         m-full
    //                         gap-6
    //                         h-full
    //                         animate-fade-in-down
    //             ">

    //                     <div className="
    //                                 bg-indigo-100
    //                                 rounded-2xl
    //                                 p-8
    //                                 md:p-12
    //                                 row-span-4
    //                                 grid
    //                                 hover:drop-shadow-md
    //                                 transition-all
    //                     ">
    //                         <div className="
    //                                     grid
    //                                     grid-cols-1
    //                                     lg:grid-cols-2
    //                                     gap-6
    //                                     pb-6
    //                         ">
    //                             <h1 className="
    //                                         font-bold
    //                                         text-4xl
    //                                         lg:text-6xl
    //                                         text-indigo-900
    //                                         pb-8
    //                             ">
    //                                 Occupation distribution
    //                             </h1>
    //                             <p className="
    //                                         text-lg
    //                             ">
    //                                 Lorem lorem
    //                             </p>

    //                         </div>

    //                         <div id="chart-container" className="
    //                                                         relative
    //                                                         m-auto
    //                                                         w-full
    //                                                         h-[42rem]
    //                                                         bg-gray-50
    //                                                         rounded-xl
    //                                                         px-2 py-6
                                                            
    //                         ">
    //                             {jsonData.foreign.length > 0 || jsonData.italian.length > 0 ? (
    //                                 <Bar data={chartData} options={options} />
    //                             ) : (
    //                                 <p>Loading...</p>
    //                             )}
    //                         </div>
    //                     <Link href="/" className="place-self-end type-button">
    //                         Source DX
    //                     </Link>
    //                     </div>
    //                 </div>
    //         </article>
    //     </section>
    // )