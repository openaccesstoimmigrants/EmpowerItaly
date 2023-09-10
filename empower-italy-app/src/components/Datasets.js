import React from 'react';
import { DATASET_OBJ } from '../constants';
import DatasetCard from './DatasetCard';

const DatasetList = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden items-center mb-16">
        <div className='flex flex-col text-center w-full mb-12'>
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium mb-3">EmpowerItaly - Open Access</h2>
            <h1 className="text-3xl font-bold text-gray-900">
                An exploration on immigration and work in Italy
            </h1>
        </div>
        <p className="g:w-2/3 mx-auto leading-relaxed text-center text-bas mb-8">Is Italy?</p>
        <div className="container flex flex-wrap m-auto py-12 px-6">
            {DATASET_OBJ.map(dataset => (
                <DatasetCard key={dataset.id} dataset={dataset} />
            ))}
        </div>
    </section>
  );
};

export default DatasetList;



