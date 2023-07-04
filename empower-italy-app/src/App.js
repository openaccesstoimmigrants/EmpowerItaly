import { useEffect, useState } from 'react';
import './App.css';
import { TOTAL_IMMIGRANTS_WORLD_JSON } from './constants';
import { IMMIGRANTS_DEMOGRAPHIC_JSON } from './constants';
import Header from './components/Header';
import Hero from './components/Hero';
import Numbers from './components/Numbers';
import Hypothesis from './components/Hypothesis';
import GroupedBarChart from './components/GroupedBarChart';
import Footer from './components/Footer';
import Team from './components/Team';
import Datasets from './components/Datasets';
import PyramidGraph from './components/PyramidGraph';

export default function App() {

  // Fetch the data relative to TOTAL_IMMIGRANTS_WORLD_JSON than passed to
  // `GroupedBarChart` component
  const [totalImmigrants, setTotalImmigrants] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(TOTAL_IMMIGRANTS_WORLD_JSON)
      .then(response => response.json())
      .then(jsonData => {
        setTotalImmigrants(jsonData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Fetch the data relative to IMMIGRANTS_DEMOGRAPHIC_JSON and pass it to `PyramidGraph` component
  const [immigrantsDemographic, setImmigrantsDemographic] = useState(null);

  useEffect(() => {
    fetch(IMMIGRANTS_DEMOGRAPHIC_JSON)
      .then(response => response.json())
      .then(jsonData => {
        console.log('Fetched data:', jsonData);
        setImmigrantsDemographic(jsonData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div className="App">
      <Header />
      <Hero />
      <Hypothesis />
      <Numbers />
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <>
          <GroupedBarChart data={totalImmigrants} />
          {immigrantsDemographic && (
            <PyramidGraph data={immigrantsDemographic} />
          )}
        </>
      )}
      <Datasets />
      <Team />
      <Footer />
    </div>
  );
}
