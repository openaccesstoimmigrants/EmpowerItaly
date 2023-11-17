import Image from "next/image"
import Link from "next/link"
import Hero from "@/components/Hero"
import { HERO_DATA } from "@/app/lib/data"

import w_step_1 from "@/public/intro.jpg"

export default function page() {

    const dataHeroDocumentation = HERO_DATA[1]

    return (
        <main>
            <Hero {...dataHeroDocumentation} />
            <section id="documentation" className="pb-6">
                <article className="max-w-7xl m-auto animate-fade-in-down">
                    <div className="grid grid-cols-12 gap-6 h-full">
                        <div className="col-span-4">
                            <Image
                                src={w_step_1}
                                alt="intro"
                                className="rounded-2xl w-full h-full object-cover"
                            />
                        </div>
                        <div className="bg-indigo-100 rounded-2xl p-12 col-span-8 grid"> {/* `grid` class is needed to use `place-self-end` on the button */}
                            <h1 className="font-bold text-6xl text-indigo-900 pb-8">About the project</h1>
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
