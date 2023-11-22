import Hero from "@/components/Hero";
import { HERO_DATA } from "@/app/lib/data"
import Intro from "@/components/Intro";
import Hypothesis from "@/components/Hypothesis";
import NumbersResidents from "@/components/NumbersResidents";
import BarChart from "@/components/BarChart";
import NumbersAge from "@/components/NumbersAge";
import Conclusions from "@/components/Conclusions";
import BubbleChartMashUp from "@/components/BubbleChartMashUp";
import HorizontalBarChart from "@/components/HorizontalBarChart";




export default function Home() {

  const dataHeroHome = HERO_DATA[0];

  return (
    <main className="px-6 md:px-16 lg:px-22 m-auto">
      <Hero {...dataHeroHome} />
      <Intro />
      <Hypothesis />
      <NumbersResidents />
      <BarChart />
      <NumbersAge />
      <HorizontalBarChart />
      <Conclusions />
      <BubbleChartMashUp />
    </main>
  )
}
