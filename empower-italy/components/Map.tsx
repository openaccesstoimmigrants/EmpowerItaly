'use client'

import { useEffect, useState } from "react";
import 'leaflet/dist/leaflet.css';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet'
import Legend from '@/components/Legend';

interface GeoJSONFeature {
  geometry: {
    coordinates: any;
    type: string;
  };
  properties: {
    COD_REG: string,
    COD_RIP: number,
    NUTS2: string,
    Nome: string,
    Quantity?: number; // Added Quantity as an optional field
  };
  type: string;
}

export default function Map() {

  const [geojsonData, setGeojsonData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseGeoJSON = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/map.geojson');
        const responsePopulation = await fetch('https://raw.githubusercontent.com/openaccesstoimmigrants/openaccesstoimmigrants/main/_datasets/Clean/D1(a)/immigrants_distribution_NUTS2.json');

        if (!responseGeoJSON.ok || !responsePopulation.ok) {
          throw new Error('Network response was not ok.');
        }

        const dataGeoJSON = await responseGeoJSON.json();
        const dataPopulation = await responsePopulation.json();

        const year = 2022; // Define the year you want to filter

        const filteredPopulationData = dataPopulation.filter((item: any) => item.Year === year);

        const updatedGeoJSON = {
          type: 'FeatureCollection',
          features: dataGeoJSON.features
            .filter((feature: GeoJSONFeature) => {
              const region = feature.properties.NUTS2;
              return filteredPopulationData.some((data: any) => data.Territory === region);
            })
            .map((feature: GeoJSONFeature) => {
              const region = feature.properties.NUTS2;
              const populationData = filteredPopulationData.find((data: any) => data.Territory === region);

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

        console.log('UpdatedGeoJSON:', updatedGeoJSON);
        console.log('Data Geo JSON:', dataGeoJSON);
        console.log('Data Population:', dataPopulation);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getColor = (population: number): string => {
    return population > 1000000 ? 'rgb(124 45 18)' :
          population > 700000 ? 'rgb(154 52 18)' :
          population > 500000 ? 'rgb(194 65 12)' :
          population > 300000 ? 'rgb(234 88 12)' :
          population > 100000 ? 'rgb(249 115 22)' :
          population > 70000 ? 'rgb(251 146 60)' :
          population > 50000 ? 'rgb(253 186 116)' :
          population > 30000 ? 'rgb(254 215 170)' :
          population > 10000 ? 'rgb(255 237 213)' :
          'rgb(255 237 213)';
  };

  const onEachFeature = (feature: any, layer: any) => {
    if (feature.properties && feature.properties.Nome && feature.properties.Quantity) {
      layer.bindTooltip(
        `Region: ${feature.properties.Nome}<br>Population: ${feature.properties.Quantity}`,
        {
          sticky: true,
        }
      );
    }
  };

  const style = (feature: any) => {
    const population = feature.properties.Quantity || 0;
    return {
      fillColor: getColor(population),
      weight: 1,
      opacity: 0.5,
      color: 'white',
      dashArray: '',
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
                                                            h-[46rem]
                                                            bg-gray-50
                                                            rounded-xl
                                                            px-2 py-6
                                                            
                            ">
                              <MapContainer center={[41.872, 12.567]} zoom={6} scrollWheelZoom={false} style={{ height: '44rem' }}>
                                <TileLayer
                                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                  // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png"
                                  // url="https://api.mapbox.com/styles/v1/renzrenz/ckkpj99tm0zei17p7s2a9hamh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmVuenJlbnoiLCJhIjoiY2trcGo3cHRtMGRpcTJ1czE2bWE5bnd2biJ9.cFUxoodeOiS16_Na8xFm9Q"
                                />
                                <Legend />
                                  {geojsonData && (
                                    <GeoJSON data={geojsonData} style={style} onEachFeature={onEachFeature} />
                                  )}
                              </MapContainer>

                            </div>
                        </div>
                    </div>
            </article>
        </section>
  )
}