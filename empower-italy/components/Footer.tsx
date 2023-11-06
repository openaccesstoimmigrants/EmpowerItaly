import Link from "next/link";

export default function Footer() {
    return (
        <section id="footer" className="pb-6">
            <article className="max-w-7xl m-auto">
                <div className="grid grid-cols-12 gap-6 h-full">
                        
                    <div className="group col-span-4 border-2 border-indigo-600 rounded-2xl p-12 hover:bg-indigo-600 transition-all">
                        <Link href="/workflow" className="font-bold text-4xl text-indigo-600 uppercase group-hover:text-gray-50 transition-all">
                            Go to workflow
                        </Link>
                    </div>
                        
                    <div className="group col-span-4 border-2 border-indigo-600 rounded-2xl p-12 hover:bg-indigo-600 transition-all">
                        <Link href="/documentation" className="font-bold text-4xl text-indigo-600 uppercase group-hover:text-gray-50 transition-all">
                            Go to documentation
                        </Link>
                    </div>
                        
                    <div className="group col-span-4 border-2 border-indigo-600 rounded-2xl p-12 hover:bg-indigo-600 transition-all">
                        <Link href="/datasets" className="font-bold text-4xl text-indigo-600 uppercase group-hover:text-gray-50 transition-all">
                            Go to datasets
                        </Link>            
                    </div>
                    <div className="col-span-12 pt-16 pb-10 text-center font-bold text-xl text-indigo-600">
                        <p>EmpowerItaly by <Link href="https://github.com/sterenz" target="_blank" className="type-button">Stefano Renzetti</Link>, <Link href="/" target="_blank" className="type-button">Camila Oliveira</Link> and <Link href="/" target="_blank" className="type-button">Giusy Grieco</Link>.</p>
                        <p>The source code is licensed <Link href="/" target="_blank" className="type-button">MIT</Link>.</p>
                        <p>The webapp content is licensed <Link href="/" target="_blank" className="type-button">CC-BY-SA 4.0.</Link></p>
                    </div>
                    <nav className="col-span-12 m-auto pb-6">
                        <ul className="flex items-center gap-x-6 text-indigo-600 font-bold uppercase">
                            <li>Contact</li>
                            <li>Disclaimer</li>
                            <li>References</li>
                            <li>License</li>
                        </ul>
                    </nav>
                </div>
            </article>
        </section>
    )
}
