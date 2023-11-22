'use client'

import { useEffect, useState } from "react";
import {
    BarElement,
    Chart,
    CategoryScale,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


Chart.register(CategoryScale, BarElement, Tooltip, Legend);

interface EducationData {
    Year: number;
    EducationLevel: string;
    'Value (%)': number;
}

export default function BarChart2() {
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

    const createGroupedChartData = () => {
        const chartData: Record<number, Record<string, number>> = {};
        jsonData.forEach(item => {
            if (!chartData[item.Year]) {
                chartData[item.Year] = {};
            }
            if (!chartData[item.Year][item.EducationLevel]) {
                chartData[item.Year][item.EducationLevel] = item['Value (%)'];
            }
        });

        const labels = Object.keys(chartData);
        const uniqueEducationLevels = Array.from(new Set(jsonData.map(item => item.EducationLevel)));

        const datasets = uniqueEducationLevels.map((educationLevel, index) => {
            const data = labels.map(year => chartData[parseInt(year)][educationLevel] || 0);
            return {
                label: educationLevel,
                data,
                backgroundColor: getBackgroundColor(index),
            };
        });

        return {
            labels,
            datasets,
        };
    };

    const getBackgroundColor = (index: number): string => {
        // Logic to set different colors here based on the index
        const colors = ['red', 'blue', 'green'];
        return colors[index % colors.length];
    };

    const options = {
        // Adjust chart options as needed
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
                    text: 'Value',
                },
            },
        },
    };


    return (
        <section id="barchart-immigration" className="pb-6">
            <h1>Groupped Bar Chart</h1>
            <div className="chart-container">
                <Bar data={createGroupedChartData()} options={options} />
            </div>
        </section>
    )
}