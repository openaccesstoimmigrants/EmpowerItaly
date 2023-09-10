import React, { useEffect, useState } from 'react';

const NumbersFromJSON = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ec.europa.eu/eurostat/api/dissemination/sdmx/2.1/data/TPS00001/..IT?format=JSON&lang=en');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='md:w-1/3 w-full px-4 py-6'>
      {data ? (
        <h4 className='font-bold md:text-4xl text-sm'>{data.value[11]}</h4>
      ) : (
        <p>Loading...</p>
      )}
        <p>Population on 1 January 2022</p>
    </div>
  );
};

export default NumbersFromJSON;
