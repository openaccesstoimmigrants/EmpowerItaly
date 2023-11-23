'use client'

import { useEffect, useState } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, GeoJSON, TileLayer, useMap } from 'react-leaflet'


interface GeoJSONFeature {
  type: string;
  properties: {
    NUTS2: string,
    Year: number,
    Sex: string,
    Age: string,
    Quantity: number
  };
  geometry: {
    type: string;
    coordinates: any;
  };
}

export default function Map() {

  const [geojsonData, setGeojsonData] = useState<any>(null);

  useEffect(() => {
    const fetchGeoJSON = async () => {
      try {
        const responseGeoJSON = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/map.geojson');
        const responsePopulation = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D1(b)/combined_immigrants_distribution.json');
        if (!responseGeoJSON.ok || !responsePopulation.ok) {
          throw new Error('Network response was not ok.');
        }
        const dataGeoJSON = await responseGeoJSON.json();
        const dataPopulation = await responsePopulation.json();

        console.log('GeoJSON data:', dataGeoJSON);
        console.log('Population data:', dataPopulation);

        if (Array.isArray(dataGeoJSON.features)) {
          const updatedGeoJSON = {
            type: 'FeatureCollection',
            features: dataGeoJSON.features
              .filter((feature: GeoJSONFeature) => feature.properties.Year === 2022)
              .map((feature: GeoJSONFeature) => {
                const region = feature.properties.NUTS2;

                const populationData = dataPopulation.find((data: any) => data.Territory === region);

                if (populationData) {
                  const population = populationData.Quantity || 0;
                  return {
                    ...feature,
                    properties: {
                      ...feature.properties,
                      Quantity: population,
                    },
                  };
                } else {
                  console.error(`Population data not found for region: ${region}`);
                  return feature;
                }
              }),
          };

          setGeojsonData(updatedGeoJSON);
          console.log(updatedGeoJSON);
        } else {
          console.error('Features array not found or not an array.');
        }
      } catch (error) {
        console.error('Error fetching GeoJSON data:', error);
      }
    };

    fetchGeoJSON();
  }, []);

  const getColor = (population: number): string => {
    return population > 50000 ? '#800026' :
           population > 30000 ? '#BD0026' :
           population > 10000 ? '#E31A1C' :
           '#FC4E2A';
  };

  const style = (feature: any) => {
    const population = feature.properties.Quantity;
    return {
      fillColor: getColor(population),
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7,
    };
  };

  return (
        <section id="barchart-education" className="pb-6">
            <article className="
                            max-w-7xl
                            m-auto
            ">
                <div className="
                            m-full
                            gap-6
                            h-full
                            animate-fade-in-down
                ">

                        <div className="
                                    bg-indigo-100
                                    rounded-2xl
                                    p-8
                                    md:p-12
                                    row-span-4
                                    hover:drop-shadow-md
                                    transition-all
                        ">
                            <div className="
                                        grid
                                        grid-cols-1
                                        lg:grid-cols-2
                                        gap-6
                                        pb-6
                            ">
                                <h1 className="
                                            font-bold
                                            text-4xl
                                            lg:text-6xl
                                            text-indigo-900
                                            pb-8
                                ">
                                    Map
                                </h1>
                                <p className="
                                            text-lg
                                ">
                                    Lorem lorem
                                </p>

                            </div>

                            <div id="chart-container" className="
                                                            relative
                                                            m-auto
                                                            w-full
                                                            h-[42rem]
                                                            bg-gray-50
                                                            rounded-xl
                                                            px-2 py-6
                                                            
                            ">
                              <MapContainer center={[41.872, 12.567]} zoom={6} scrollWheelZoom={false} style={{ height: '70vh' }}>
                                <TileLayer
                                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                  {geojsonData && geojsonData.length > 0 && (
                                    <GeoJSON data={geojsonData} style={style} />
                                  )}
                              </MapContainer>
                            </div>
                        </div>
                    </div>
            </article>
        </section>
  )
}