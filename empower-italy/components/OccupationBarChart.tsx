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

export default function OccupationBarChart() {
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
            display: false
            },
        },
        y: {
            title: {
                    display: true,
                    text: 'Number of workers (thousand)',
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
    <section id="barchart-education" className="pb-6">
        <article className="
                        max-w-7xl
                        m-auto
                        animate-fade-in-down
        ">
            <div className="
                        m-full
                        gap-6
                        h-full
                        animate-fade-in-down
            ">
                <div className="
                            bg-indigo-100
                            rounded-2xl
                            p-8
                            md:p-12
                            row-span-4
                            relative
                            hover:drop-shadow-md
                            transition-all
                ">
                    <div className="
                                grid
                                grid-cols-1
                                lg:grid-cols-2
                                gap-6
                                pb-6
                    ">
                        <h1 className="
                                    font-bold
                                    text-4xl
                                    lg:text-6xl
                                    text-indigo-900
                                    pb-8
                         ">
                             Occupation distribution
                         </h1>
                         <p className="
                                     text-lg
                         ">
                            Displayed below is a comparative bar chart illustrating the number of workers (in thousands) across various occupational sectors. This visualizes a clear distinction between Italian and foreign workers. The chart allows for easy selection and comparison of workforce distribution among different sectors, shedding light on the employment patterns within these demographics.
                         </p>
                    </div>
                    <div id="chart-container" className="
                                                    relative
                                                    m-auto
                                                    w-full
                                                    bg-gray-50
                                                    rounded-xl
                                                    px-2 py-6 mb-12  
                    ">
                    { loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="font-bold text-5xl md:text-7xl text-indigo-600">
                            {error}
                        </p>        
                    ) : (
                        <>
                            <div className="flex text-lg pb-6">
                                <div className="p-4 font-bold text-indigo-600">
                                    <label htmlFor="territorySelect" className="text-indigo-900">Select Occupation:</label>
                                    <div className="relative inline-flex">
                                        <svg className="w-3 h-3 absolute top-[40%] right-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="rgb(249 250 251)"/></svg>
                                        <select id="territorySelect" className="text-gray-50 bg-indigo-300 hover:bg-indigo-500 focus:ring-2 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg pl-4 pr-7 py-2 m-2 text-center inline-flex items-center appearance-none" onChange={(e) => handleOccupationChange(e.target.value)}>
                                            <option value="industry">Industry</option>
                                            <option value="other services activity">Other Services Activity</option>
                                            <option value="trade, hotels and restaurants">Trade, Hotels and Restaurants</option>
                                            <option value="agriculture, forestry and fishing">Agriculture, Forestry and Fishing</option>
                                            <option value="construction">Construction</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* <h2>Occupation: {occupation}</h2> */}
                            <div className="h-[32rem] m-2">
                                <Bar data={chartData} options={options} />
                            </div>
                        </>
                    )}
                    </div>
                    <Link href="/datasets" className="absolute bottom-10 right-12 type-button">
                        Source: D6
                    </Link>
                </div>
            </div>
        </article>
    </section>
    );
}