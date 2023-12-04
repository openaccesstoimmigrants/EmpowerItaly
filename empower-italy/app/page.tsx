import Hero from "@/components/Hero";
import { HERO_DATA } from "@/app/lib/data"
import Intro from "@/components/Intro";
import Hypothesis from "@/components/Hypothesis";
import NumbersResidents from "@/components/NumbersResidents";
import BarChart from "@/components/BarChart";
import NumbersAge from "@/components/NumbersAge";
import Conclusions from "@/components/Conclusions";
import MashUp from "@/components/MashUp";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import Map from "@/components/Map";
import Countries from "@/components/Countries";



export default function Home() {

  const dataHeroHome = HERO_DATA[0];

  return (
    <main className="px-6 md:px-16 lg:px-22 m-auto">
      <Hero {...dataHeroHome} />
      <Intro />
      <Hypothesis />
      <NumbersResidents />
        <section id="distribution-demographic" className="pb-6">
            <article className="max-w-7xl m-auto">
                <div className="grid grid-cols-12 gap-6 h-full">
                  <Countries />
                  <Map />
                </div>
            </article>
        </section>
      <BarChart />
      <NumbersAge />
      <HorizontalBarChart />
      <Conclusions />
      <MashUp />
    </main>
  )
}
