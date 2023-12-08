import Hero from "@/components/Hero"
import { DOCUMENTATION_LINKS, HERO_DATA } from "@/app/lib/data"
import Documentation from "@/components/Documentation"

export default function page() {

    const dataHeroDocumentation = HERO_DATA[2]

    return (
        <main  className="px-6 md:px-16 lg:px-22 m-auto">
            <Hero {...dataHeroDocumentation} />
            <section id="documentation" className="pb-6">
                <article className="max-w-7xl m-auto">
                    <Documentation links={DOCUMENTATION_LINKS} />
                </article>
            </section>
        </main>
    )
}
