'use client'

import { useEffect, useState } from "react";
import {
  BarElement,
  Chart,
  CategoryScale
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale,BarElement);

interface EducationData {
    'Year': Record<string, number>;
    'Value (%)': Record<string, number>;
    'Education Level': Record<string, string>;
}

export default function BarChart() {

    const labelMap: { [key: string]: string } = {
    'ED0-2': 'Primary School',
    'ED3_4': 'Secondary School',
    'ED5-8': 'Tertiary School',
    };

    const colorMap: { [key: string]: string } = {
        'Primary School': 'rgb(253 186 116)',
        'Secondary School': 'rgb(249 115 22)',
        'Tertiary School': 'rgb(234 88 12)',
    };

    const [educationLevelData, setEducationLevelData] = useState<any>({
        labels: [],
        datasets: [],
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D4/D4.json')
                if (!response.ok) {
                    throw new Error("Network response was not ok.")
                }

                const jsonData: EducationData = await response.json()

                const years = Object.values(jsonData['Year']).map(String);
                const uniqueYears = Array.from(new Set(years));
                const educationLevels = Object.values(jsonData['Education Level']);
                const values = Object.values(jsonData['Value (%)']);

                const groupedData: any = {
                    labels: uniqueYears,
                    datasets: [],
                };

                const uniqueLevels = Array.from(new Set(educationLevels));

                uniqueLevels.forEach((level: string) => {
                    const data = uniqueYears.map((year: string) => {
                        let total = 0;
                        for (let i = 0; i < years.length; i++) {
                            if (years[i] === year && educationLevels[i] === level) {
                                total += values[i];
                            }
                        }
                        return total;
                    });

                    groupedData.datasets.push({
                        label: labelMap[level] || level,
                        data,
                        backgroundColor: colorMap[labelMap[level]],
                    });
                });

                setEducationLevelData(groupedData);

            } catch (error) {
                console.error("Error fetching data:", error)
                setError("An error occurred while fetching data.")
            } finally {
                setLoading(false)
            }
        };

        fetchData()
    },);

    const chartOptions = {
        // Define chart options if needed
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
                    text: 'Total',
                },
            },
        },
    };

    return (
        <section id="barchart-immigration" className="pb-6">
            <article className="max-w-7xl m-auto">
                <div className="grid grid-cols-12 gap-6 h-full">
                    <div className="col-span-12 bg-indigo-100 rounded-2xl p-12">
                        <div className="bg-indigo-400">
                            <h1 className="float-left font-bold text-4xl text-indigo-900 uppercase pb-8 max-w-1/2">FROM WHERE?</h1>
                            <p className="float-right max-w-1/2">Aaliquam massa iaculis in sit felis. aa Diam bibendum fames lectus odio porttitor consectetur purus donec. Tellus nulla tortor a orci est. Nam cursus velit facilisis sed. Egestas bibendum eget semper sed cras pellentesque.</p>
                        </div>
                        <div className="bg-gray-50 pt-20">
                            {loading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p>{error}</p>
                            ) : (
                                <Bar data={educationLevelData} options={chartOptions} />
                            )}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
