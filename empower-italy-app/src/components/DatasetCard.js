import React from 'react';

const DatasetCard = ({ dataset }) => {
  const { id, format, title, source, license, metadata, link_dataset } = dataset;

  return (
        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden hover:shadow-lg transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-105 ">
                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">{format}</span>
                <h2 className="text-md tracking-widest title-font mb-1 font-medium">{id}</h2>
                <h1 className="text-2xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    {title}
                </h1>
                <p className="items-center text-gray-600 mb-3">
                    Source: {source}
                </p>
                <p className="items-center text-gray-600 mb-3">
                    License: {license} <a href="https:www.istat.it/en/legal-notice">Istat Legal Notice</a> 
                </p>
                <p className="items-center text-gray-600 mb-3">
                    Metadata: {metadata} and <a href="http:siqual.istat.it/SIQual/visualizza.do?id=0019400&refresh=true&language=IT">descriptive text</a>
                </p>
                <a href={link_dataset}>
                    <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">
                        Original URI 
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </a>
                <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
            </div>
        </div>
  );
};

export default DatasetCard;