import Image from "next/image"
import intro from "@/public/intro.jpg"
import Link from "next/link"

export default function Intro() {
  return (
      <section id="intro" className="pb-6">
        <article className="max-w-7xl m-auto animate-fade-in-down">
            <div className="grid grid-cols-12 gap-6 h-full">
                <div className="col-span-12 lg:col-span-4">
                    <Image
                        src={intro}
                        alt="intro"
                        className="
                                lg:order-1
                                lg:block
                                rounded-2xl
                                w-full
                                h-full
                                object-cover"
                    />
                </div>
                <div className="
                            bg-indigo-100
                            rounded-2xl
                            p-8
                            md:p-12
                            col-span-12
                            lg:col-span-8
                            grid
                            order-first
                            lg:order-last
                            hover:drop-shadow-md
                            transition-all
                ">
                    {/* `grid` class is needed to use `place-self-end` on the button */}

                    <h1 className="
                                font-bold
                                text-4xl
                                md:text-6xl
                                text-indigo-900
                                pb-8">
                        About the project
                    </h1>
                    <p>
                        Acknowledging the complexity of immigration, our focus is on evaluating the active engagement of foreign individuals within Italy's labor market. Our aim is to ascertain whether immigrants experience a disproportionate impact from unemployment rates and the extent of this disparity. Our investigation seeks to pinpoint the regions in Italy with higher concentrations of immigrants and the key industries where they are predominantly employed. We have compared the labor force participation and unemployment rates between foreigners and Italians to observe and analyze any disparities that exist. 
                    </p>

                    <button className="place-self-end outline-button">
                        <Link href="/documentation">See documentation</Link>
                    </button>
                </div>
            </div>
        </article>
      </section>
  )
}
