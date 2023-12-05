'use client'

import { useEffect, useState } from "react";
import Link from "next/link";

interface ImmigrationData {
  Territory: string;
  Year: number;
  Sex: string;
  Age: string;
  Quantity: number;
}

interface PopulationEntry {
  TIME_PERIOD: string;
  ObsValue: string;
}

export default function Numbers() {

    // Funtion to calculate total foreing residents                                
    const [totalImmigrants, setTotalImmigrants] = useState<number | null>(null);
    const [totalWithCommas, setTotalWithCommas] = useState<string | null>(null);
    const [totalItalianPopulation, setTotalItalianPopulation] = useState<number | null>(null);
    const [percentage, setPercentage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch total immigrants data
                const immigrantsResponse = await fetch("https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D1(a)/immigrants_demographic.json");
                if (!immigrantsResponse.ok) {
                    throw new Error("Network response was not ok.");
                }

                const immigrantsData: ImmigrationData[] = await immigrantsResponse.json();

                // Fetch total Italian population for 2022
                const populationResponse = await fetch("https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D3/resident_italian_population.json");
                if (!populationResponse.ok) {
                    throw new Error("Network response was not ok.");
                }
                const populationData = await populationResponse.json();

                // Calculate total immigrants for 2022
                let maleSum = 0;
                let femaleSum = 0;

                immigrantsData.forEach((entry) => {
                    if (entry.Year === 2022 && entry.Territory === "IT" && entry.Age === "TOTAL") {
                        if (entry.Sex === "Male") {
                            maleSum += entry.Quantity;
                        } else if (entry.Sex === "Female") {
                            femaleSum += entry.Quantity;
                        }
                    }
                });

                const totalImmigrants = maleSum + femaleSum;

                // Calculate total Italian population for 2022
                const italianPopulation2022 = populationData.IT.find(
                    (entry: PopulationEntry) => entry.TIME_PERIOD === "2022"
                );

                const totalPopulation2022 = italianPopulation2022
                    ? parseInt(italianPopulation2022.ObsValue, 10)
                : 0;

                // Calculate the percentage
                const percentage = ((totalImmigrants / totalPopulation2022) * 100).toFixed(1);

                setTotalImmigrants(totalImmigrants);

                const totalWithCommas = totalImmigrants.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                    setTotalWithCommas(totalWithCommas);
                

                setTotalItalianPopulation(totalPopulation2022);
                setPercentage(percentage);
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
                <div className="
                            grid
                            grid-cols-12
                            gap-6
                            h-full">
                    <div className="
                                bg-indigo-100
                                rounded-2xl
                                p-8
                                md:p-12
                                col-span-12
                                lg:col-span-7
                                grid
                                hover:drop-shadow-md
                                transition-all
                    ">
                        <h1 className="
                                    font-bold
                                    text-2xl
                                    md:text-4xl
                                    text-indigo-900
                                    uppercase
                                    pb-8
                        ">
                            TOTAL RESIDENT FOREIGNERS
                        </h1>
                        {/* conditional rendering */}
                        {loading ? (
                            <p className="
                                        font-bold
                                        text-5xl
                                        md:text-7xl 
                                        text-indigo-600
                            ">
                                Loading...
                            </p>
                        ) : error ? (
                            <p className="
                                        font-bold
                                        text-5xl
                                        md:text-7xl 
                                        text-indigo-600
                            ">
                            {error}
                        </p>        
                        ) : (
                            <>
                                <p className="
                                            font-bold
                                            text-6xl
                                            md:text-7xl
                                            text-indigo-600
                                ">
                                    {totalWithCommas}
                                </p> 
                            </>
                        )}
                        <p className="
                                    font-bold
                                    text-3xl
                                    md:text-4xl
                                    text-indigo-600
                        ">
                            in Italy in 2022
                        </p>
                        <Link href="/datasets" className="place-self-end type-button">
                            Source DX
                        </Link>
                    </div>
                    <div className="
                                bg-indigo-100
                                rounded-2xl
                                p-8
                                md:p-12
                                col-span-12
                                lg:col-span-5
                                grid
                                hover:drop-shadow-md
                                transition-all
                    ">
                        <h1 className="
                                    font-bold
                                    text-2xl
                                    md:text-4xl
                                    text-indigo-900
                                    uppercase
                                    pb-8
                        ">
                            THEY REPRESENT THE
                        </h1>
                        {/* conditional rendering */}
                        {loading ? (
                            <p className="font-bold text-5xl md:text-7xl text-indigo-600">Loading...</p>
                        ) : error ? (
                            <p className="font-bold text-5xl md:text-7xl text-indigo-600">{error}</p>        
                        ) : (
                            <>
                                <p className="font-bold text-6xl md:text-7xl text-indigo-600">{percentage}%</p> 
                            </>
                        )}
                        <p className="
                                    font-bold
                                    text-3xl
                                    md:text-4xl
                                    text-indigo-600
                        ">of the Italian population</p>
                        <Link href="/" className="place-self-end type-button">
                            Source
                        </Link>
                    </div>
                </div>
            </article>
        </section>
    )
}
