import Image from "next/image"
import intro from "@/public/intro.jpg"
import Link from "next/link"

export default function Intro() {
  return (
      <section id="intro" className="pb-6">
        <article className="max-w-7xl m-auto animate-fade-in-up">
            <div className="grid grid-cols-12 gap-6 h-full">
                <div className="col-span-4">
                    <Image
                        src={intro}
                        alt="intro"
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>
                <div className="bg-indigo-100 rounded-2xl p-12 col-span-8 grid"> {/* `grid` class is needed to use `place-self-end` on the button */}
                    <h1 className="font-bold text-6xl text-indigo-900 pb-8">About the project</h1>
                    <p>EmpowerItaly aligns data from various sources to generate insights about past and current migrational flows throughout Italy. Specifically, we are interested in how the number of entrants has changed over time, and in analyzing where people are moving to and from. Additionally, we aim to analyze the level of education to explore active participation in Italy's economy.</p>

                    <button className="place-self-end outline-button">
                        <Link href="/documentation">See documentation</Link>
                    </button>
                </div>
            </div>
        </article>
      </section>
  )
}
