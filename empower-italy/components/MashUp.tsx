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

interface rateData {
  TERRITORY: string;
  CITIZENSHIP: string;
  YEAR: number;
  UNEMPLOYMENT_RATE: number;
  ACTIVITY_RATE: number;
};

interface MashupData {
  'center': {
    High: rateData[];
    Medium: rateData[];
    Low: rateData[];
  };
  'south and islands': {
    High: rateData[];
    Medium: rateData[];
    Low: rateData[];
  };
  'north-east': {
    High: rateData[];
    Medium: rateData[];
    Low: rateData[];
  };
  'north-west': {
    High: rateData[];
    Medium: rateData[];
    Low: rateData[];
  };
}

export default function MashUp() {
  const [jsonData, setJsonData] = useState<MashupData | null>(null);
  const [selectedTerritory, setSelectedTerritory] = useState<keyof MashupData>('center');
  const [selectedLevel, setSelectedLevel] = useState<"High" | "Medium" | "Low">("High");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/MASHUP/mashup.json');
        if (!response.ok) {
          throw new Error("Network response was not ok.")
        }

        const data = await response.json() as unknown as MashupData;
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

    const getChartData = () => {
    if (!jsonData) return { labels: [], datasets: [] };

    const territoryData = jsonData[selectedTerritory][selectedLevel];

    const italianData = territoryData.filter(
        (data: rateData) => data.CITIZENSHIP === 'italian'
    );
    const foreignData = territoryData.filter(
        (data: rateData) => data.CITIZENSHIP === 'foreign'
    );

    const years = italianData.map((data: rateData) => data.YEAR.toString());

    const italianUnemploymentRates = italianData.map(
        (data: rateData) => data.UNEMPLOYMENT_RATE
    );
    const foreignUnemploymentRates = foreignData.map(
        (data: rateData) => data.UNEMPLOYMENT_RATE
    );

    const italianActivityRates = italianData.map(
        (data: rateData) => data.ACTIVITY_RATE
    );
    const foreignActivityRates = foreignData.map(
        (data: rateData) => data.ACTIVITY_RATE
    );


    return {
      labels: years,
      datasets: [
        {
          label: 'Italian Unemployment Rate',
          data: italianUnemploymentRates,
          borderColor: 'blue',
          fill: false,
        },
        {
          label: 'Foreign Unemployment Rate',
          data: foreignUnemploymentRates,
          borderColor: 'red',
          fill: false,
        },
        {
          label: 'Italian Activity Rate',
          data: italianActivityRates,
          borderColor: 'green',
          fill: false,
        },
        {
          label: 'Foreign Activity Rate',
          data: foreignActivityRates,
          borderColor: 'orange',
          fill: false,
        },
      ],
    };
  };

  const chartData = getChartData();

  const handleTerritoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTerritory(e.target.value as keyof MashupData);
  };

  const handleLevelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(e.target.value as "High" | "Medium" | "Low");
  };

  return (
    <div>
      <h1>MashUp</h1>
      <div>
        <label htmlFor="territorySelect">Select Territory:</label>
        <select id="territorySelect" onChange={handleTerritoryChange} value={selectedTerritory}>
          <option value="center">Center</option>
          <option value="south and islands">South and Islands</option>
          <option value="north-east">North-East</option>
          <option value="north-west">North-West</option>
        </select>
      </div>
      <div>
        <label htmlFor="levelSelect">Select Level:</label>
        <select id="levelSelect" onChange={handleLevelChange} value={selectedLevel}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>
      {jsonData && (
        <div>
          <Line data={getChartData()} />
        </div>
      )}
    </div>
  );
}