import Image from "next/image"
import { HERO_DATA } from "@/app/lib/data"

// Declaring Hero's props type
type HeroProps = (typeof HERO_DATA)[number]

export default function Hero({ title, paragraph, imageSrc, payoff, layoutOrder }: HeroProps) {

    // Conditional rendering of the order of the div, based on prop
    const divOrder = layoutOrder ? 'order-last' : 'order-first'; 

    return (
        <section id="hero" className="pb-6">
            <article className="max-w-7xl m-auto">
                <div className="grid grid-cols-12 gap-6 h-full animate-fade-in-up">
                    <div className="grid col-span-6 grid-rows-5 gap-6">
                        <div className="bg-indigo-100 rounded-2xl p-12 col-span-7 row-span-4">
                            <h1 className="font-bold text-6xl text-indigo-900 pb-8">{title}</h1>
                            <p>{paragraph}</p>
                        </div>
                        <div className="bg-indigo-600 rounded-2xl px-12 py-6 col-span-5 row-span-1">
                            <h2 className="text-4xl font-semibold text-gray-50 leading-normal">{payoff}</h2>
                        </div>
                        <div className="bg-orange-400 rounded-2xl col-span-2 row-span-1">
                            <p className="text-8xl font-black text-gray-50 text-center translate-y-2">✱</p>
                        </div>
                    </div>
                    <div className={`col-span-6 ${divOrder}`}>
                        <Image
                            src={imageSrc}
                            alt="hero"
                            className="rounded-2xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </article>
        </section>
    )
}