import Hero from "@/components/Hero";
import { HERO_DATA } from "@/app/lib/data";
import Datasets from "@/components/Datasets";



export default function DatasetsList() {

  const dataHeroDatasets = HERO_DATA[3]

  return (
    <main className="px-6 md:px-16 lg:px-22 m-auto">
      <Hero {...dataHeroDatasets} />
      <Datasets />
    </main>
  )
}