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
                            <p>Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec. Tellus nulla tortor a orci est. Nam cursus velit facilisis sed. Egestas bibendum eget semper sed cras pellentesque. Aenean ut iaculis vitae maecenas orci mattis porta lacus. Mauris ut purus id ipsum ultricies.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation">See documentation</Link>
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
                            <p>Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec. Tellus nulla tortor a orci est. Nam cursus velit facilisis sed. Egestas bibendum eget semper sed cras pellentesque. Aenean ut iaculis vitae maecenas orci mattis porta lacus. Mauris ut purus id ipsum ultricies.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation">See documentation</Link>
                            </button>
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div className="grid grid-cols-12 gap-6 h-full pb-6">
                        <div className="bg-indigo-100 rounded-2xl p-12 col-span-8 grid"> {/* `grid` class is needed to use `place-self-end` on the button */}
                            <h1 className="font-bold text-6xl text-indigo-900 pb-8">Cleaning and Mash up</h1>
                            <p>Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec. Tellus nulla tortor a orci est. Nam cursus velit facilisis sed. Egestas bibendum eget semper sed cras pellentesque. Aenean ut iaculis vitae maecenas orci mattis porta lacus. Mauris ut purus id ipsum ultricies.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation">See documentation</Link>
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
                            <p>Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec. Tellus nulla tortor a orci est. Nam cursus velit facilisis sed. Egestas bibendum eget semper sed cras pellentesque. Aenean ut iaculis vitae maecenas orci mattis porta lacus. Mauris ut purus id ipsum ultricies.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation">See documentation</Link>
                            </button>
                        </div>
                    </div>

                    {/* STEP 5 */}
                    <div className="grid grid-cols-12 gap-6 h-full pb-6">
                        <div className="bg-indigo-100 rounded-2xl p-12 col-span-8 grid"> {/* `grid` class is needed to use `place-self-end` on the button */}
                            <h1 className="font-bold text-6xl text-indigo-900 pb-8">Open Data practices</h1>
                            <p>Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec. Tellus nulla tortor a orci est. Nam cursus velit facilisis sed. Egestas bibendum eget semper sed cras pellentesque. Aenean ut iaculis vitae maecenas orci mattis porta lacus. Mauris ut purus id ipsum ultricies.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation">See documentation</Link>
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
                            <p>Aliquam massa iaculis in sit felis. Diam bibendum fames lectus odio porttitor consectetur purus donec. Tellus nulla tortor a orci est. Nam cursus velit facilisis sed. Egestas bibendum eget semper sed cras pellentesque. Aenean ut iaculis vitae maecenas orci mattis porta lacus. Mauris ut purus id ipsum ultricies.</p>

                            <button className="place-self-end outline-button">
                                <Link href="/documentation">See documentation</Link>
                            </button>
                        </div>
                    </div>



                </article>
            </section>
        </main>
    )
}
