import { useEffect, useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import { ImmigrationData } from "./Data";
import data from "./components/data/Immigrati - paesi di provenienza (IT1,28_185_DF_DCIS_MIGRAZIONI_3,1.0).json"
import Header from './components/Header';
import Hero from './components/Hero';
import Numbers from './components/Numbers';
import Hypothesis from './components/Hypothesis';


export default function App() {

  const [immigrationData, setImmigrationData] = useState({
    labels: ImmigrationData.map((data) => data.continent),
    datasets: [
      {
        label: "Total Immigrants",
        data: ImmigrationData.map((data) => data.totalImmigrants)
      }
    ]
  })

  // const dimensions = data.data.structure.dimensions.series
  // const series = dimensions.map((items) => items.values)

  // console.log(dimensions)
  // console.log(series)

  // Testing the ISTAT API
  useEffect(() => {
    fetch("http://sdmx.istat.it/SDMXWS/rest/data/29_956")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <Hero />
      <Hypothesis />
      <Numbers />
      <BarChart chartData={immigrationData} />
    </div>
  );
}
