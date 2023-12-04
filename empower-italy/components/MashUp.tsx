'use client'

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
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
  center: {
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

    const [jsonData, setJsonData] = useState<MashupData[]>([]);

    return (
        <div>MashUp</div>
    )
}