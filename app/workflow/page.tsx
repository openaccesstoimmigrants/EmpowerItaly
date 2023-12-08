import Image from "next/image"
import Link from "next/link"
import Hero from "@/components/Hero"
import { HERO_DATA } from "@/app/lib/data"

import w_step_1 from "@/public/w_step_1.jpg"
import w_step_2 from "@/public/w_step_2.jpg"
import w_step_3 from "@/public/w_step_3.jpg"
import w_step_4 from "@/public/w_step_4.jpg"
import w_step_5 from "@/public/w_step_5.jpg"
import w_step_6 from "@/public/w_step_6.jpg"

export default function page() {

    const dataHeroDocumentation = HERO_DATA[1]

    return (
        <main className="px-6 md:px-16 lg:px-22 m-auto">
            <Hero {...dataHeroDocumentation} />
            <section id="workflow" className="pb-6">
                <article className="max-w-7xl m-auto animate-fade-in-down">

                    {/* STEP 1 */}
                    <div className="grid grid-cols-12 gap-6 h-full pb-6">
                        <div className="bg-indigo-100 rounded-2xl p-12 col-span-8 grid"> {/* `grid` class is needed to use `place-self-end` on the button */}
                            <h1 className="font-bold text-6xl text-indigo-900 pb-8">Formulating Hypothesis</h1>
                            <p>From the project's inception, our aim was to conduct a comprehensive study on the presence of immigrants in Italy. Given the sensitivity of the topic, framing a viable research question posed a challenge. Initially, our focus centered on aspects of the labor market and education, specifically examining whether the professional positions held by foreigners corresponded with their educational qualifications. However, the scarcity of relevant data at the regional level in Italy prompted us to transition into the exploratory phase, where we formulated a well-defined hypothesis.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation#Introduction">See documentation</Link>
                            </button>
                        </div>
                        <div className="col-span-4">
                            <Image
                                src={w_step_1}
                                alt="intro"
                                className="rounded-2xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div className="grid grid-cols-12 gap-6 h-full pb-6">
                        <div className="col-span-4">
                            <Image
                                src={w_step_2}
                                alt="intro"
                                className="rounded-2xl w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-indigo-100 rounded-2xl p-12 col-span-8 grid"> {/* `grid` class is needed to use `place-self-end` on the button */}
                            <h1 className="font-bold text-6xl text-indigo-900 pb-8">Searching Data</h1>
                            <p>The project leveraged data from reputable sources, namely ISTAT and EUROSTAT, both housing extensive data repositories beneficial for students and various organizations. Notably, ISTAT's dedicated page on immigrant statistics in Italy, accessible through its older data explorer, proved invaluable. Despite encountering dynamic changes in the data presentation methods of these institutions during the project's development, such as ISTAT's transition from its [old data explorer](http://dati.istat.it/) to the [new one](https://esploradati.istat.it/databrowser/#/), the abundance of data remained consistent, ensuring a robust foundation for our analysis. Additionally, organizations like OECD, previously considered in earlier project phases, underwent transitions in their data explorer interfaces.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation#Datasets">See documentation</Link>
                            </button>
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div className="grid grid-cols-12 gap-6 h-full pb-6">
                        <div className="bg-indigo-100 rounded-2xl p-12 col-span-8 grid"> {/* `grid` class is needed to use `place-self-end` on the button */}
                            <h1 className="font-bold text-6xl text-indigo-900 pb-8">Cleaning and Mash up</h1>
                            <p>During the cleaning phase, a standardized procedure was applied to most datasets. This involved understanding the content of each dataset, identifying relevant values, and ensuring alignment with the information available on the respective data explorer platforms.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation#Datasets">See documentation</Link>
                            </button>
                        </div>
                        <div className="col-span-4">
                            <Image
                                src={w_step_3}
                                alt="intro"
                                className="rounded-2xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* STEP 4 */}
                    <div className="grid grid-cols-12 gap-6 h-full pb-6">
                        <div className="col-span-4">
                            <Image
                                src={w_step_4}
                                alt="intro"
                                className="rounded-2xl w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-indigo-100 rounded-2xl p-12 col-span-8 grid"> {/* `grid` class is needed to use `place-self-end` on the button */}
                            <h1 className="font-bold text-6xl text-indigo-900 pb-8">Visualization</h1>
                            <p>An integral aspect of the project, the visualization process adhered to the principles of simplicity and user choice. Our goal was to allow the data to speak for itself, presenting it in a straightforward manner while providing users the flexibility to select the information they wished to view.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation#Visualization">See documentation</Link>
                            </button>
                        </div>
                    </div>

                    {/* STEP 5 */}
                    <div className="grid grid-cols-12 gap-6 h-full pb-6">
                        <div className="bg-indigo-100 rounded-2xl p-12 col-span-8 grid"> {/* `grid` class is needed to use `place-self-end` on the button */}
                            <h1 className="font-bold text-6xl text-indigo-900 pb-8">Open Data practices</h1>
                            <p>This project adheres to the FAIR principles of data—ensuring data is Findable, Accessible, Interoperable, and Reusable. All project materials are made openly available, and we welcome user feedback to address any deviations from these principles.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation#Praxis">See documentation</Link>
                            </button>
                        </div>
                        <div className="col-span-4">
                            <Image
                                src={w_step_5}
                                alt="intro"
                                className="rounded-2xl w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* STEP 6 */}
                    <div className="grid grid-cols-12 gap-6 h-full pb-6">
                        <div className="col-span-4">
                            <Image
                                src={w_step_6}
                                alt="intro"
                                className="rounded-2xl w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-indigo-100 rounded-2xl p-12 col-span-8 grid"> {/* `grid` class is needed to use `place-self-end` on the button */}
                            <h1 className="font-bold text-6xl text-indigo-900 pb-8">Afterlife</h1>
                            <p>The EmpowerItaly datasets compile data from catalogs concerning diverse aspects of the Italian labor market. Originating from a University of Bologna course, the catalog is not actively maintained anymore, but the datasets within it are managed by their respective institutions. Despite the catalog's lack of ongoing updates, our accessible scripts can be run on new files as needed.
                            </p>
                            <p>
                            We encourage notification if newer versions of our input files are discovered, enabling us to update our files using our automated script. It's essential to highlight that our scripts are licensed under CC 4.0. We invite the community to contribute to our GitHub project by submitting updated files for review and potential inclusion, enhancing the dataset quality.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation#Sustainability">See documentation</Link>
                            </button>
                        </div>
                    </div>



                </article>
            </section>
        </main>
    )
}
