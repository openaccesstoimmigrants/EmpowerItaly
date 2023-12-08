'use client'

import { ChangeEvent, useEffect, useState } from "react";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface MashupData {
  [key: string]: {
    [key: string]: {
      [key: string]: RateData[];
    };
  };
}

interface RateData {
  TERRITORY: string;
  CITIZENSHIP: string;
  YEAR: number;
  EDU_LEVEL: string;
  UNEMPLOYMENT_RATE: number;
  ACTIVITY_RATE: number;
}

export default function MashUp() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [jsonData, setJsonData] = useState<MashupData | null>(null);
    const [selectedTerritory, setSelectedTerritory] = useState<string>('center');
    const [selectedCitizenship, setSelectedCitizenship] = useState<string>('foreign');
    const [selectedLevel, setSelectedLevel] = useState<"High" | "Medium" | "Low">("High");
    const [chartData, setChartData] = useState<{ labels: string[]; datasets: any[] }>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/MASHUP/mashup.json');
                if (!response.ok) {
                    throw new Error("Network response was not ok.")
                }

                const data: MashupData = await response.json();
                // console.log('Fetched data:', data); // Log fetched data

                setJsonData(data);
                setLoading(false); // Update isLoading once data is fetched

            } catch (error) {
                // console.error("Error fetching data:", error);
                setError("An error occurred while fetching data.");
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    useEffect(() => {
    console.log('jsonData:', jsonData); // Log jsonData whenever it changes
    }, [jsonData]);

    const getChartData = () => {
        if (!jsonData) {
            console.log('Data not available.');
            return { labels: [], datasets: [] };
        }

        const territoryData = jsonData[selectedTerritory];

        if (!territoryData) {
            console.log('Territory Data not available.');
            return { labels: [], datasets: [] };
        }

        const foreignCitizenshipData = territoryData['foreign'];
        const italianCitizenshipData = territoryData['italian'];

        if (!foreignCitizenshipData || !italianCitizenshipData) {
            console.log('Citizenship Data not available.');
            return { labels: [], datasets: [] };
        }

        const selectedLevelForeignData = foreignCitizenshipData[selectedLevel];
        const selectedLevelItalianData = italianCitizenshipData[selectedLevel];

        if (!selectedLevelForeignData || !selectedLevelItalianData) {
            console.log('Selected Level Data not available.');
            return { labels: [], datasets: [] };
        }

        const years = selectedLevelForeignData.map((data: RateData) => data.YEAR.toString());
        const unemploymentRatesForeign = selectedLevelForeignData.map((data: RateData) => data.UNEMPLOYMENT_RATE);
        const activityRatesForeign = selectedLevelForeignData.map((data: RateData) => data.ACTIVITY_RATE);
        const unemploymentRatesItalian = selectedLevelItalianData.map((data: RateData) => data.UNEMPLOYMENT_RATE);
        const activityRatesItalian = selectedLevelItalianData.map((data: RateData) => data.ACTIVITY_RATE);

        const unemploymentDatasetForeign = {
            label: `Foreign Unemployment Rate`,
            data: unemploymentRatesForeign,
            // borderColor: selectedLevel === 'High' ? 'orange' : selectedLevel === 'Medium' ? 'purple' : 'yellow',
            borderColor: 'rgb(154 52 18)',
            fill: false,
        };

        const activityDatasetForeign = {
            label: `Foreign Activity Rate`,
            data: activityRatesForeign,
            borderColor: 'rgb(234 88 12)',
            fill: false,
        };

        const unemploymentDatasetItalian = {
            label: `Italian Unemployment Rate`,
            data: unemploymentRatesItalian,
            borderColor: 'rgb(55 48 163)',
            fill: false,
        };

        const activityDatasetItalian = {
            label: `Italian Activity Rate`,
            data: activityRatesItalian,
            borderColor: 'rgb(79 70 229)',
            fill: false,
        };

        return {
            labels: years,
            datasets: [unemploymentDatasetForeign, activityDatasetForeign, unemploymentDatasetItalian, activityDatasetItalian],
        };
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true
    };

    const handleTerritoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedTerritory(e.target.value);
    };

    console.log(selectedTerritory)

    const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLevel(e.target.value as "High" | "Medium" | "Low");
    };

    console.log('chartData:', chartData)

    return (
        <section id="mashup" className="pb-6">
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
                                relative
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
                                Mash Up
                            </h1>
                            <p className="
                                        text-lg
                            ">
                                In the chart above the activity and unemployment rate were put together in order to understand the disparities among natives and foreigners in the 4 sub-divisions used by ISTAT and among 3 levels of education in the time span of five years.
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
                                        <label htmlFor="territorySelect" className="text-indigo-900">Select Territory:</label>
                                        <div className="relative inline-flex">
                                            <svg className="w-3 h-3 absolute top-[40%] right-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="rgb(249 250 251)"/></svg>
                                            <select id="territorySelect" className="text-gray-50 bg-indigo-300 hover:bg-indigo-500 focus:ring-2 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg pl-4 pr-7 py-2 m-2 text-center inline-flex items-center appearance-none" onChange={handleTerritoryChange} value={selectedTerritory}>
                                                <option value="center">Center</option>
                                                <option value="south and islands">South and Islands</option>
                                                <option value="north-east">North-East</option>
                                                <option value="north-west">North-West</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="p-4 font-bold text-indigo-600">
                                        <label htmlFor="levelSelect" className="text-indigo-900">Select Educational Level:</label>
                                        <div className="relative inline-flex">
                                            <svg className="w-3 h-3 absolute top-[40%] right-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="rgb(249 250 251)" fill-rule="nonzero"/></svg>
                                            <select id="levelSelect" className="text-gray-50 bg-indigo-300 hover:bg-indigo-500 focus:ring-2 focus:outline-none focus:ring-indigo-200 font-medium rounded-lg pl-4 pr-7 py-2 m-2 text-center inline-flex items-center appearance-none" onChange={handleLevelChange} value={selectedLevel}>
                                                <option value="High">Tertiary</option>
                                                <option value="Medium">Secondary</option>
                                                <option value="Low">Primary</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[32rem] m-2">
                                    <Line data={getChartData()} options={options} />
                                </div>
                            </>
                        )}
                        </div>
                        <Link href="/datasets" className="absolute bottom-10 right-12 type-button">
                            Source: MASHUP
                        </Link>
                    </div>
                </div>
            </article>
        </section>
    );
}