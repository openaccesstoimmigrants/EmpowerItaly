import Hero from "@/components/Hero"
import { HERO_DATA } from "@/app/lib/data"

export default function page() {

    const dataHeroDocumentation = HERO_DATA[2]

    return (
        <main>
            <Hero {...dataHeroDocumentation} />
            <section id="documentation" className="pb-6">
                <article className="max-w-7xl m-auto">
                    <div className="grid grid-cols-12 gap-6 h-full relative">
                        <div className="bg-orange-100 col-span-3 sticky top-0 max-h-40">
                            Bla Bla
                        </div>
                        <div className="bg-indigo-100 col-span-9 min-h-[2000px]">
                            Bla Bla
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}
