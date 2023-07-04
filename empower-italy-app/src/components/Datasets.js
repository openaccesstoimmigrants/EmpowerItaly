import React from 'react';

function Datasets() {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium mb-3">THE TEAM</h2>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Analysis of sources</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
                            <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">SDMXML</span>
                            <h2 className="text-md tracking-widest title-font mb-1 font-medium">D0</h2>
                            <h1 className="text-2xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                Total immigrants to Italy divided by continents
                            </h1>
                            <p className="items-center text-gray-600 mb-3">
                                Source: Istat (IstatData)
                            </p>
                            <p className="items-center text-gray-600 mb-3">
                                License: Creative Commons License – Attribution – 3.0 (CC BY) <a href="https://www.istat.it/en/legal-notice">Istat Legal Notice</a> 
                            </p>
                            <p className="items-center text-gray-600 mb-3">
                                Metadata: Provided in SDMX and <a href="http://siqual.istat.it/SIQual/visualizza.do?id=0019400&refresh=true&language=IT">descriptive text</a>
                            </p>
                            <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">URI
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Datasets

