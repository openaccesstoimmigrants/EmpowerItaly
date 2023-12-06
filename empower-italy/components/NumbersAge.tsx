'use client'

import { useEffect, useState } from "react";
import Link from "next/link";

interface PopulationData {
    AGE: number;
    YEAR: number;
    POPULATION: number;
}

export default function Numbers() {

    // Funtion to calculate the medium average residents age                                
    const [italiansMediumAge, setItaliansMediumAge] = useState<number | null>(null);
    const [immigrantsMediumAge, setImmigrantsMediumAge] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Italians age data
                const italiansResponse = await fetch("https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D3/resident_italian_population_age.json");
                if (!italiansResponse.ok) {
                    throw new Error("Network response was not ok.");
                }

                const italiansData: PopulationData[] = await italiansResponse.json();

                // Fetch immigrants age data
                const immigrantsResponse = await fetch("https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D1(a)/resident_immigrant_population_age.json"); // CHANGE WITH NEW
                if (!immigrantsResponse.ok) {
                    throw new Error("Network response was not ok.");
                }
                const immigrantsData: PopulationData[] = await immigrantsResponse.json();

                // Calculate medium Italians age
                let italianWeightedSum = 0;
                let italianTotalPopulation = 0;

                italiansData.forEach((entry) => {
                    if (entry.YEAR === 2022) {
                        italianWeightedSum += entry.AGE * entry.POPULATION;
                        italianTotalPopulation += entry.POPULATION;
                    }
                });

                // Calculate medium immigrants age
                const italianMediumAge = italianTotalPopulation === 0 ? 0 : italianWeightedSum / italianTotalPopulation;

                // Calculate medium Italians age
                let immigrantWeightedSum = 0;
                let immigrantPopulation = 0;

                immigrantsData.forEach((entry) => {
                    if (entry.YEAR === 2022) {
                        immigrantWeightedSum += entry.AGE * entry.POPULATION;
                        immigrantPopulation += entry.POPULATION;
                    }
                });

                // Calculate medium immigrants age
                const immigrantsMediumAge = immigrantPopulation === 0 ? 0 : immigrantWeightedSum / immigrantPopulation;


                setItaliansMediumAge(italianMediumAge);
                setImmigrantsMediumAge(immigrantsMediumAge);

                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("An error occurred while fetching data.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    return (
        <section id="numbers-demographic" className="pb-6">
            <article className="max-w-7xl m-auto animate-fade-in-down">
                <div className="grid grid-cols-12 gap-6 h-full">
                    <div className="
                                bg-indigo-100
                                rounded-2xl
                                p-8 md:p-12
                                col-span-12
                                lg:col-span-6
                                grid
                                hover:drop-shadow-md
                                transition-all
                    ">
                        <h1 className="font-bold text-2xl md:text-4xl text-indigo-900 uppercase pb-8">ITALIAN MEDIUM AGE</h1>
                        {/* conditional rendering */}
                        {loading ? (
                            <p className="font-bold text-5xl md:text-7xl text-indigo-600">Loading...</p>
                        ) : error ? (
                            <p className="font-bold text-5xl md:text-7xl text-indigo-600">{error}</p>        
                        ) : (
                            <>
                                <p className="font-bold text-6xl md:text-7xl text-indigo-600">{italiansMediumAge !== null ? italiansMediumAge.toFixed(1) : "N/A"}</p> {/* If null display N/A */}
                            </>
                        )}
                        <p className="font-bold text-3xl md:text-4xl text-indigo-600">one of world's highest*</p>
                        <Link href="https://ourworldindata.org/age-structure" className="text-sm" target="_blank">*Our World in Data</Link>
                        <Link href="/" className="place-self-end type-button">
                            Source: D1(a) and D1(b)
                        </Link>
                    </div>
                    <div className="bg-indigo-100 rounded-2xl p-8 md:p-12 col-span-12 lg:col-span-6 grid hover:drop-shadow-md transition-all">
                        <h1 className="font-bold text-2xl md:text-4xl text-indigo-900 uppercase pb-8">IMMIGRANTS MEDIUM AGE</h1>
                        {/* conditional rendering */}
                        {loading ? (
                            <p className="font-bold text-5xl md:text-7xl text-indigo-600">Loading...</p>
                        ) : error ? (
                            <p className="font-bold text-5xl md:text-7xl text-indigo-600">{error}</p>        
                        ) : (
                            <>
                                <p className="font-bold text-6xl md:text-7xl text-indigo-600">{immigrantsMediumAge !== null ? immigrantsMediumAge.toFixed(1) : "N/A"}</p> 
                            </>
                        )}
                        <p className="font-bold text-3xl md:text-4xl text-indigo-600">in line with world's medium*</p>
                        <Link href="https://ourworldindata.org/age-structure" className="text-sm" target="_blank">*Our World in Data</Link>
                        <Link href="/" className="place-self-end type-button">
                            Source: D2
                        </Link>
                    </div>
                </div>
            </article>
        </section>
    )
}
