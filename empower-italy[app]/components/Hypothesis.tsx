import Link from "next/link"

export default function Hypothesis() {
  return (
      <section id="hypothesis" className="pb-6">
        <article className="max-w-7xl m-auto">
            <div className="grid grid-cols-12 gap-6 h-full">
                <div className="bg-indigo-100 rounded-2xl p-12 col-span-7">
                    <h1 className="font-bold text-6xl text-indigo-900 pb-8">Does the number of immigrant impact on the labor market?</h1>
                    <p>For our datasets, since we are dealing with data related to Italy, our main source is <Link href="https://www.istat.it/en/" className="font-bold">Istat</Link>, the Italian National Institute of Statistics, a public research organization that has been the main producer of official statistics since 1926, serving citizens and policy-makers.</p>
                </div>
                <div className="bg-orange-100 rounded-2xl p-12 col-span-5">
                    <h1 className="font-bold text-5xl text-orange-900 pb-8">Who is an immigrant in our context?</h1>
                    <p>We will refer to foreign or immigrant residence as a person with foreign or stateless citizenship who has their habitual residence in the accommodation or cohabitation that is subject to the survey and who meets the requirements for registration in the registry.</p>
                </div>
            </div>
        </article>
      </section>
  )
}
