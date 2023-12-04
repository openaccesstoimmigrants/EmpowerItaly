'use client'

import { useEffect, useState } from "react";
import Link from "next/link";

interface CitizenshipData {
  TERRITORY: string;
  YEAR: number;
  SEX: string;
  CITIZENSHIP: string;
  POPULATION: number;
}

export default function Countries() {

    const [topCitizenships, setTopCitizenships] = useState<{ citizenship: string; population: number; }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D2/immigrants_citizenship.json');
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const jsonData: CitizenshipData[] = await response.json();

            // Filter data for the year 2022
            const filteredData = jsonData.filter((entry) => entry.YEAR === 2022);

            // CHECK FOR THE CITIZENSHIP WITH THE LARGER NUMBER OF POPULATION
            // Group by citizenship and calculate total population for each citizenship
            const citizenshipMap = new Map<string, number>();
            filteredData.forEach((entry) => {
            const currentPopulation = citizenshipMap.get(entry.CITIZENSHIP) || 0;
            citizenshipMap.set(entry.CITIZENSHIP, currentPopulation + entry.POPULATION);
            });

            // Sort the citizenships by population in descending order
            const sortedCitizenships = Array.from(citizenshipMap.entries()).sort(
            (a, b) => b[1] - a[1]
            );

            // Get the top 10 citizenships
            const topCitizenships = sortedCitizenships.slice(0, 10).map((entry) => ({
                citizenship: entry[0],
                population: entry[1],
            }))

            setTopCitizenships(topCitizenships);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError("An error occurred while fetching data.");
            setLoading(false);
        }
    };

    fetchData();
  }, []);


    return (
        <div className="
                    bg-indigo-100
                    rounded-2xl
                    p-8 md:p-12
                    col-span-12
                    lg:col-span-5
                    grid
                    hover:drop-shadow-md
                    transition-all
        ">
            <h1 className="font-bold text-2xl md:text-4xl text-indigo-900 uppercase pb-8">TOP 10 CITIZENSHIP</h1>
            {/* conditional rendering */}
            {loading ? (
                <p className="font-bold text-5xl md:text-7xl text-indigo-600">Loading...</p>
            ) : error ? (
                <p className="font-bold text-5xl md:text-7xl text-indigo-600">{error}</p>        
            ) : (
                <ul className="text-indigo-600">
                {topCitizenships.map((item, index) => (
                    <li key={index}  className="flex items-baseline pb-2">
                        <p className="font-bold text-2xl md:text-4xl w-2/3">{item.citizenship}</p>
                        <p className="w-1/3 text-right">{item.population.toLocaleString()}</p>
                    </li>
                ))}
                </ul>
            )}
            <Link href="/" className="place-self-end type-button">
                Source DX
            </Link>
        </div>
    )
}

