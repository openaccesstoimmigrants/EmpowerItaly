'use client'

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Footer() {

    const segment = useSelectedLayoutSegment();

    return (
        <section id="footer" className="pt-20 pb-10 px-12 md:px-16 lg:px-22 m-auto">
            <article className="max-w-7xl m-auto">
                <div className="grid grid-cols-12 gap-6 h-full">

                    <Link href={`${segment}` === 'workflow' ? '/' : '/workflow'} className="group col-span-12 lg:col-span-4 border-2 border-indigo-600 rounded-2xl p-4 md:p-8 hover:bg-indigo-600 transition-all">
                        <p className="font-bold text-xl lg:text-3xl xl:text-4xl text-indigo-600 uppercase group-hover:text-gray-50 transition-all">
                            Go to {`${segment}` === 'workflow' ? 'home' : 'workflow'}
                        </p>
                    </Link>

                    <Link href={`${segment}` === 'documentation' ? '/' : '/documentation'} className="group col-span-12 lg:col-span-4 border-2 border-indigo-600 rounded-2xl p-4 md:p-8 hover:bg-indigo-600 transition-all">
                        <p className="font-bold text-xl lg:text-3xl xl:text-4xl text-indigo-600 uppercase group-hover:text-gray-50 transition-all">
                            Go to {`${segment}` === 'documentation' ? 'home' : 'documentation'}
                        </p>
                    </Link>

                    <Link href={`${segment}` === 'datasets' ? '/' : '/datasets'} className="group col-span-12 lg:col-span-4 border-2 border-indigo-600 rounded-2xl p-4 md:p-8 hover:bg-indigo-600 transition-all">
                        <p className="font-bold text-xl lg:text-3xl xl:text-4xl text-indigo-600 uppercase group-hover:text-gray-50 transition-all">
                            Go to {`${segment}` === 'datasets' ? 'home' : 'datasets'}
                        </p>
                    </Link>
                        
                    <div className="col-span-12 pt-16 pb-10 text-center font-bold text-xl text-indigo-600">
                        <p>EmpowerItaly by <Link href="https://github.com/sterenz" target="_blank" className="type-button">Stefano Renzetti</Link>, <Link href="https://github.com/camilasamurai" target="_blank" className="type-button">Camila Oliveira</Link> and <Link href="https://github.com/teragramgius" target="_blank" className="type-button">Giusy Grieco</Link>.</p>
                        <p>The source code is licensed <Link href="https://mit-license.org/" target="_blank" className="type-button">MIT</Link>.</p>
                        <p>The web app content is licensed <Link href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" className="type-button">CC-BY-SA 4.0. <svg xmlns="http://www.w3.org/2000/svg" height="20" width="15.5" viewBox="0 0 496 512" className="inline align-middle mb-1"><path fill="#4f46e2" d="M245.8 214.9l-33.2 17.3c-9.4-19.6-25.2-19.9-27.5-19.9-22.1 0-33.2 14.6-33.2 43.8 0 23.6 9.2 43.8 33.2 43.8 14.5 0 24.7-7.1 30.6-21.3l30.6 15.5c-6.2 11.5-25.7 39-65.1 39-22.6 0-74-10.3-74-77.1 0-58.7 43-77.1 72.6-77.1 30.7 0 52.7 12 66 35.9zm143.1 0l-32.8 17.3c-9.5-19.8-25.7-19.9-27.9-19.9-22.1 0-33.2 14.6-33.2 43.8 0 23.6 9.2 43.8 33.2 43.8 14.5 0 24.7-7.1 30.5-21.3l31 15.5c-2.1 3.8-21.4 39-65.1 39-22.7 0-74-9.9-74-77.1 0-58.7 43-77.1 72.6-77.1 30.7 0 52.6 12 65.6 35.9zM247.6 8.1C104.7 8.1 0 123.1 0 256.1c0 138.5 113.6 248 247.6 248 129.9 0 248.4-100.9 248.4-248 0-137.9-106.6-248-248.4-248zm.9 450.8c-112.5 0-203.7-93-203.7-202.8 0-105.4 85.4-203.3 203.7-203.3 112.5 0 202.8 89.5 202.8 203.3 0 121.7-99.7 202.8-202.8 202.8z"/></svg></Link></p>
                    </div>
                    <p className="text-sm col-span-10 lg:col-span-8 lg:col-start-3 m-auto pb-6 text-center">
                        EmpowerItaly is a project developed for the "Open Access and Digital Ethics" course within the Digital Humanities and Digital Knowledge Masters Degree at Alma Mater Studiorum - University of Bologna
                    </p>
                    {/* <nav className="col-span-12 m-auto pb-6">
                        <ul className="flex items-center gap-x-6 text-indigo-600 font-bold uppercase">
                            <li>Contact</li>
                            <li>Disclaimer</li>
                            <li>References</li>
                            <li>License</li>
                        </ul>
                    </nav> */}
                </div>
            </article>
        </section>
    )
}
