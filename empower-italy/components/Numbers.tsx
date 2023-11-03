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

export default function Numbers() {

    // Funtion to calculate total foreing residents                                
    const [totalImmigrants, setTotalImmigrants] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D1(a)/immigrants_demographic.json")
        .then((response) => response.json())
        .then((jsonData: ImmigrationData[]) => {
            let maleSum = 0;
            let femaleSum = 0;

            jsonData.forEach((entry) => {
            if (entry.Year === 2022 && entry.Territory === "IT" && entry.Age === "TOTAL") {
                if (entry.Sex === "Male") {
                maleSum += entry.Quantity;
                } else if (entry.Sex === "Female") {
                femaleSum += entry.Quantity;
                }
            }
            });

            const total = maleSum + femaleSum;
            const totalWithCommas = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            setTotalImmigrants(totalWithCommas);
        });
    }, []);


  return (
      <section id="numbers-demographic" className="pb-6">
        <article className="max-w-7xl m-auto">
            <div className="grid grid-cols-12 gap-6 h-full">
                <div className="bg-indigo-100 rounded-2xl p-12 col-span-7 grid">
                    <h1 className="font-bold text-4xl text-indigo-900 uppercase pb-8">TOTAL RESIDENT FOREIGNERS</h1>
                    <p className="font-bold text-7xl text-indigo-600">{totalImmigrants}</p> 
                    <p className="font-bold text-4xl text-indigo-600">in Italy in 2022</p>
                    <Link href="/" className="place-self-end font-bold text-lg text-indigo-600 uppercase pt-6">
                        Source
                    </Link>
                </div>
                <div className="bg-indigo-100 rounded-2xl p-12 col-span-5 grid">
                    <h1 className="font-bold text-4xl text-indigo-900 uppercase pb-8">THEY REPRESENT</h1>
                    <p className="font-bold text-7xl text-indigo-600">6,2%</p> {/* data will be loaded here */}
                    <p className="font-bold text-4xl text-indigo-600">of the Italian population</p>
                    <Link href="/" className="place-self-end font-bold text-lg text-indigo-600 uppercase pt-6">
                        Source
                    </Link>
                </div>
            </div>
        </article>
      </section>
  )
}
