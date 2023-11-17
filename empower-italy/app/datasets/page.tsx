import Hero from "@/components/Hero";
import { HERO_DATA } from "@/app/lib/data";
import Datasets from "@/components/Datasets";



export default function DatasetsList() {

  const dataHeroDatasets = HERO_DATA[3]

  return (
    <main>
      <Hero {...dataHeroDatasets} />
      <Datasets />
    </main>
  )
}