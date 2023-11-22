import Hero from "@/components/Hero";
import { HERO_DATA } from "@/app/lib/data"
import Intro from "@/components/Intro";
import Hypothesis from "@/components/Hypothesis";
import NumbersResidents from "@/components/NumbersResidents";
import BarChart2 from "@/components/BarChart2";
import NumbersAge from "@/components/NumbersAge";
import Conclusions from "@/components/Conclusions";
import BubbleChartMashUp from "@/components/BubbleChartMashUp";




export default function Home() {

  const dataHeroHome = HERO_DATA[0];

  return (
    <main>
      <Hero {...dataHeroHome} />
      <Intro />
      <Hypothesis />
      <NumbersResidents />
      <BarChart2 />
      <NumbersAge />
      <BubbleChartMashUp />
      <Conclusions />
    </main>
  )
}
