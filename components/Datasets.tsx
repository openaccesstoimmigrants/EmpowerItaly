import React from "react";
import Link from "next/link";
import { DATASETS_OBJ } from "../app/lib/data";

export default function Datasets() {
  return (
    <section id="datsets" className="pb-6">
        <article className="max-w-7xl m-auto">
            <div className="grid grid-cols-3 gap-6 h-full animate-fade-in-down">
                {
                    DATASETS_OBJ.map((dataset) => (
                        // We put the `key` in the fragment to not pass it as prop 
                        <React.Fragment key={dataset.id}>
                            <Dataset {...dataset} />
                        </React.Fragment>
                    ))
                }
            </div>
        </article>
    </section>
  )
}

// Specifying the type
type DatasetProps = {
    id: string,
    format: string,
    title: string,
    source: string,
    license: string,
    license_link: string,
    metadata: string,
    metadata_link: string,
    link_dataset: string,
    description: string
};

function Dataset({
    id,
    format,
    title,
    source,
    license,
    license_link,
    metadata,
    metadata_link,
    link_dataset,
    description
}:DatasetProps) {
    return (
        <div className="col-span-1 bg-indigo-100 rounded-2xl p-8 h-full relative hover:shadow-lg transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-100">
            <span className="bg-indigo-600 text-gray-50 py-3 px-5 tracking-widest text-xs absolute right-4 top-4 rounded-full">{format}</span>
            <div className="pb-2">
            <h2 className="font-bold text-xl text-indigo-900 pt-6 pb-2">{id}</h2>
            <h1 className="font-bold text-3xl text-indigo-900 pb-8">
                {title}
            </h1>
            <h3 className="font-bold text-indigo-900">SOURCE</h3>
            <p> {source} </p>
            <h3 className="font-bold text-indigo-900">LICENSE</h3>
            <p> <Link href={license_link} target="_blank">{license}</Link> </p>
            <h3 className="font-bold text-indigo-900">METADATA</h3>
            <p> <Link href={metadata_link} target="_blank"> {metadata}</Link> </p>
            </div>
            <Link href={link_dataset} target="_blank" className="absolute bottom-6 right-6">
                <button className="flex items-center text-indigo-600 border-indigo-600 border-2 py-2 px-6 w-full focus:outline-none hover:bg-indigo-600 hover:text-gray-50 rounded-full">
                    Original URI 
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </Link>
            <p className="text-xs text-gray-500 mt-3">{description}</p>
        </div>
    )
}
