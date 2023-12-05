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
                        <p>The source code is licensed <Link href="/" target="_blank" className="type-button">MIT</Link>.</p>
                        <p>The webapp content is licensed <Link href="/" target="_blank" className="type-button">CC-BY-SA 4.0.</Link></p>
                    </div>
                    <nav className="col-span-12 m-auto pb-6">
                        <ul className="flex items-center gap-x-6 text-indigo-600 font-bold uppercase">
                            <li>Contact</li>
                            <li>Disclaimer</li>
                                <p>https://support.wepik.com/s/article/Attribution?language=en_US</p>
                            <li>References</li>
                            <li>License</li>
                        </ul>
                    </nav>
                </div>
            </article>
        </section>
    )
}
