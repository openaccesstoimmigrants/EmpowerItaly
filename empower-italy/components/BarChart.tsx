'use client'

import { useEffect, useState } from "react";
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

interface EducationData {
    Year: number;
    EducationLevel: string;
    Value: number;
}

export default function BarChart() {
    const [jsonData, setJsonData] = useState<EducationData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D4/level_of_education.json');
                if (!response.ok) {
                    throw new Error("Network response was not ok.")
                }

                const data = await response.json() as EducationData[];
                setJsonData(data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // const chartData = {
    //     labels: jsonData.map(item => item.Year.toString()),
    //     datasets: [
    //         {
    //             label: 'Education Data',
    //             data: jsonData.map(item => item.Value),
    //             backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust color as needed
    //             borderColor: 'rgba(75, 192, 192, 1)', // Adjust color as needed
    //         },
    //     ],
    // };

    const groupedData: Record<number, Record<string, number[]>> = {};

    // Group values by year and education level
    jsonData.forEach(item => {
        if (!groupedData[item.Year]) {
            groupedData[item.Year] = {};
        }
        if (!groupedData[item.Year][item.EducationLevel]) {
            groupedData[item.Year][item.EducationLevel] = [];
        }
        groupedData[item.Year][item.EducationLevel].push(item.Value);
    });

    const years = Object.keys(groupedData);

    const educationLevels = Array.from(
        new Set(jsonData.map(item => item.EducationLevel))
    );

    // Define custom colors for bars
    const customColors = [
        'rgba(254, 215, 170, 0.6)',
        'rgba(251, 146, 60, 0.6)',
        'rgba(234, 88, 12, 0.6)',
    ];

    const customBorderColors = [
        'rgba(254, 215, 170, 1)',
        'rgba(251, 146, 60, 1)',
        'rgba(234, 88, 12, 1)',
    ];


    const datasets = educationLevels.map((level, index) => {
        const data = years.map(year => groupedData[parseInt(year)][level]?.reduce((acc, val) => acc + val, 0) || 0);
        return {
            label: level,
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
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Year',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Rate of Education Level',
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
                                    grid
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
                                            pr-2
                                ">
                                    Immigrants Level of Education
                                </h1>
                                <p className="
                                            text-lg
                                ">
                                    Over the observed time span, there hasn't been a substantial change; however, there is a minor increase in the attainment of Secondary School degrees.
                                </p>

                            </div>

                            <div id="chart-container" className="
                                                            relative
                                                            m-auto
                                                            w-full
                                                            h-[32rem]
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
                    <Link href="/" className="place-self-end type-button">
                        Source: D4
                    </Link>
                        </div>
                    </div>
            </article>
        </section>
    )
}
