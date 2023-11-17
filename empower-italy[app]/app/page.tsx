import Hero from "@/components/Hero";
import { HERO_DATA } from "@/app/lib/data"
import Intro from "@/components/Intro";
import Hypothesis from "@/components/Hypothesis";
import NumbersResidents from "@/components/NumbersResidents";
import BarChart from "@/components/BarChart";
import NumbersAge from "@/components/NumbersAge";
import Conclusions from "@/components/Conclusions";




export default function Home() {

  const dataHeroHome = HERO_DATA[0];

  return (
    <main>
      <Hero {...dataHeroHome} />
      <Intro />
      <Hypothesis />
      <NumbersResidents />
      <BarChart />
      <NumbersAge />
      <Conclusions />
    </main>
  )
}
