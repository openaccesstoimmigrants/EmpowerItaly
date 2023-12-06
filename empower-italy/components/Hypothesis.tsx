import Link from "next/link"

export default function Hypothesis() {
  return (
      <section id="hypothesis" className="pb-6">
        <article className="max-w-7xl m-auto animate-fade-in-down">
            <div className="
                        grid
                        grid-cols-12
                        gap-6
                        h-full
            ">
                <div className="
                            bg-indigo-100
                            rounded-2xl
                            p-8
                            md:p-12
                            col-span-12
                            lg:col-span-7
                            hover:drop-shadow-md
                            transition-all
                ">
                    <h1 className="
                                font-bold
                                text-4xl
                                md:text-6xl
                                text-indigo-900
                                pb-8
                    ">
                        How significant is the disparity between Italians and foreigners in the labor market?
                    </h1>
                    <p>
                        For our datasets, since we are dealing with data related to Italy, our main source is <Link href="https://www.istat.it/en/" className="font-bold">Istat</Link>, the Italian National Institute of Statistics, a public research organization that has been the main producer of official statistics since 1926, serving citizens and policy-makers.
                    </p>
                </div>
                <div className="
                            bg-orange-100
                            rounded-2xl
                            p-8
                            md:p-12
                            col-span-12
                            lg:col-span-5
                            hover:drop-shadow-md
                            transition-all
                ">
                    <h1 className="
                                font-bold
                                text-4xl
                                md:text-5xl
                                text-orange-900
                                pb-8
                    ">
                        Who is an immigrant in our context?
                    </h1>
                    <p>We define a foreign or immigrant resident as an individual possessing foreign or stateless citizenship, whose habitual residence is within the surveyed accommodation or cohabitation. This definition encompasses individuals who meet the criteria for registration in the official registry.</p>
                </div>
            </div>
        </article>
      </section>
  )
}
