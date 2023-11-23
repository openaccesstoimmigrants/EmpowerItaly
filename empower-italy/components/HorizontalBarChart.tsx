'use client'

import { useEffect, useState } from "react";
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

interface OccupationData {
    Occupation: string;
    Year: string;
    Value: number;
}

export default function HorizontalBarChart() {

    const [jsonData, setJsonData] = useState<OccupationData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D6/occupations_rate.json');
                if (!response.ok) {
                    throw new Error("Network response was not ok.")
                }

                const data = await response.json() as OccupationData[];
                setJsonData(data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);


    const years = Array.from(new Set(jsonData.map(item => item.Year.toString())));
    const occupations = Array.from(new Set(jsonData.map(item => item.Occupation)));

    const groupedData: Record<string, Record<string, number[]>> = {};
    jsonData.forEach(item => {
        if (!groupedData[item.Occupation]) {
            groupedData[item.Occupation] = {};
        }
        if (!groupedData[item.Occupation][item.Year]) {
            groupedData[item.Occupation][item.Year] = [];
        }
        groupedData[item.Occupation][item.Year].push(item.Value);
    });


    // Define custom colors for bars
    const customColors = [
        'rgba(244, 63, 94, 0.6)', // rose
        'rgba(217, 70, 239, 0.6)', // fucsia
        'rgba(139, 92, 246, 0.6)', // violet
        'rgba(59, 130, 246, 0.6)', // blue
        'rgba(6, 182, 212, 0.6)', // cyan
        'rgba(16, 185, 129, 0.6)', // emerald
    ];

    const customBorderColors = [
        'rgba(244, 63, 94, 0.6)', // rose
        'rgba(217, 70, 239, 0.6)', // fucsia
        'rgba(139, 92, 246, 0.6)', // violet
        'rgba(59, 130, 246, 0.6)', // blue
        'rgba(6, 182, 212, 0.6)', // cyan
        'rgba(16, 185, 129, 0.6)', // emerald
    ];


    const datasets = occupations.map((occupation, index) => {
        const data = years.map(year => {
            const total = groupedData[occupation][parseInt(year)]?.reduce((acc, val) => acc + val, 0) || 0;
            return total;
        });
        return {
            label: occupation,
            data,
            backgroundColor: customColors[index % customColors.length], // Assign custom colors
            borderColor: customBorderColors[index % customBorderColors.length], // Assign custom colors
            borderWidth: 1,
        };
    });

    const chartData = {
        labels: years,
        datasets,
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        indexAxis: 'y' as const,
        // plugins: {
        //     legend: {
        //         position: 'right' as const,
        //         align: 'start' as const,
        //     }
        // },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Number of workers',
                },
            },
            y: {
                title: {
                    display: false,
                },
                suggestedMin: 0,
            },
        },
    };

    // console.log(jsonData); // Check data in the console to ensure it's fetched

    return (
        <section id="barchart-education" className="pb-6">
            <article className="
                            max-w-7xl
                            m-auto
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
                                    Lorem lorem
                                </p>

                            </div>

                            <div id="chart-container" className="
                                                            relative
                                                            m-auto
                                                            w-full
                                                            h-[42rem]
                                                            bg-gray-50
                                                            rounded-xl
                                                            px-2 py-6
                                                            
                            ">
                                {jsonData.length > 0 ? (
                                    <Bar data={chartData} options={options} />
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                        </div>
                    </div>
            </article>
        </section>
    )
}