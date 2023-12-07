import Image from "next/image"
import Link from "next/link"
import conclusions from "@/public/conclusions.jpg"

export default function Conclusion() {
  return (
      <section id="conclusions" className="pb-6">
        <article className="max-w-7xl m-auto">
            <div className="grid grid-cols-12 gap-6 h-full">
                <div className="bg-indigo-100 rounded-2xl p-8 md:p-12 col-span-12 lg:col-span-8 grid                                     hover:drop-shadow-md transition-all"> {/* `grid` class is needed to use `place-self-end` on the button */}
                    <h1 className="font-bold text-5xl md:text-6xl text-indigo-900 pb-8">Our conclusions</h1>
                    <p>
                    This project aimed at understanding significant differences between immigrants and Italians in the labour market, assessing the foreign distribution in the country, their level of education and making a comparison between these two groups in the industry sectors and in terms of activity and unemployment. In an overall it's clear the existence of a significant disparity. 
                    </p>
                    <p>
                    Since the immigrant population is substantially smaller compared to the Italian one, they will consequently represent a smaller proportion in the labour market, but still they are always present in all the shown sectors and with further studies it could be understood if they complement the labour market when there's a lack of professionals in Italy or not.
                    </p>
                    <p>
                    Observing the mashup visualization is interesting to notice that immigrants with a low level of education (less than primary, primary and lower secondary school) always show a high activity rate compared to Italians. And only in the South and Islands showing a smaller unemployment rate compared to natives.
                    </p>
                    <p>
                    Foreigners indeed face a higher unemployment rate even though being sometimes equally or more active than natives. We understand that there is a difference between those groups that can be explained by other factors not considered here, since the aspects of the labour market are too many to be covered in this project.
                    </p>
                    <button className="place-self-end outline-button">
                        <Link href="/documentation">See documentation</Link>
                    </button>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <Image
                        src={conclusions}
                        alt="conclusions"
                        className="rounded-2xl w-full h-full object-cover"
                    />
                </div>
            </div>
        </article>
      </section>
  )
}
