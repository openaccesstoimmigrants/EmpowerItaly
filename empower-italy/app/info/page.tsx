import Link from "next/link";

export default function page() {
  return (
    <main  className="px-6 md:px-16 lg:px-22 m-auto">

        <section id="contact" className="pb-6">
            <article className="max-w-7xl m-auto animate-fade-in-down">
                <div className="
                            grid
                            grid-cols-12
                            gap-6
                            h-full
                ">
                    <div className="
                                bg-indigo-100
                                rounded-2xl
                                p-8
                                md:p-12
                                lg:col-start-2
                                col-span-12
                                lg:col-span-10
                                hover:drop-shadow-md
                                transition-all
                    ">
                        <h1 className="
                                    font-bold
                                    text-4xl
                                    md:text-6xl
                                    text-indigo-900
                                    pb-8
                        ">
                            Contact
                        </h1>

                            <p>
                                The EmpowerItaly datasets comprise information gathered from catalogs pertaining to various aspects of the Italian labor market. Initially created as part of a University of Bologna course, the catalog is presently not actively maintained. Nevertheless, the datasets within this catalog are managed by their respective institutions. Despite the catalog's lack of ongoing updates, our scripts remain accessible and can be executed on new files whenever needed.
                            </p>
                            <p>
                                If you discover a newer version of any of our input files, please notify us to assist in updating our files through our automated script. It's essential to note that our scripts are licensed under <Link target="_blank" className="font-bold underline" href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1">CC BY-NC 4.0.</Link> We invite the community to contribute to the enhancement of our files by submitting updated versions to our <Link className="font-bold underline" href="https://github.com/openaccesstoimmigrants/openaccesstoimmigrants">GitHub</Link> project. Submitted files will undergo review, and if deemed accurate, they will be added to the project.
                            </p>
                            <p>
                                For further communication, you can reach us via our university emails:
                            </p>
                            <ul>
                                <li>Stefano Renzetti: <Link className="underline" href="mailto:stefano.renzetti3@studio.unibo.it">stefano.renzetti3@studio.unibo.it</Link></li>
                                <li>Camila Oliveira: <Link className="underline" href="mailto:camila.oliveira@studio.unibo.it">camila.oliveira@studio.unibo.it</Link></li>
                                <li>Giusy Grieco: <Link className="underline" href="mailto:giusy.grieco@studio.unibo.it">giusy.grieco@studio.unibo.it</Link></li>
                            </ul>
                    </div>
                </div>
            </article>
        </section>

        <section id="discalimer" className="pb-6">
            <article className="max-w-7xl m-auto animate-fade-in-down">
                <div className="
                            grid
                            grid-cols-12
                            gap-6
                            h-full
                ">
                    <div className="
                                bg-indigo-100
                                rounded-2xl
                                p-8
                                md:p-12
                                lg:col-start-2
                                col-span-12
                                lg:col-span-10
                                hover:drop-shadow-md
                                transition-all
                    ">
                        <h1 className="
                                    font-bold
                                    text-4xl
                                    md:text-6xl
                                    text-indigo-900
                                    pb-8
                        ">
                            Discalimer
                        </h1>
                        <p>
                            EmpowerItaly presents the outcomes of a comprehensive project delving into the immigration phenomenon in Italy, focusing on its economic underpinnings. This initiative was developed as part of the 'Open Access and Digital Ethics' course within the Master's Degree program in <Link target="_blank" className="font-bold underline" href="https://corsi.unibo.it/2cycle/DigitalHumanitiesKnowledge/">Digital Humanities and Digital Knowledge</Link> at the University of Bologna, under the guidance of Professor Monica Palmirani.
                        </p>
                    </div>
                </div>
            </article>
        </section>

        <section id="references" className="pb-6">
            <article className="max-w-7xl m-auto animate-fade-in-down">
                <div className="
                            grid
                            grid-cols-12
                            gap-6
                            h-full
                ">
                    <div className="
                                bg-indigo-100
                                rounded-2xl
                                p-8
                                md:p-12
                                lg:col-start-2
                                col-span-12
                                lg:col-span-10
                                hover:drop-shadow-md
                                transition-all
                    ">
                        <h1 className="
                                    font-bold
                                    text-4xl
                                    md:text-6xl
                                    text-indigo-900
                                    pb-8
                        ">
                            References
                        </h1>
                        <p>
                            Through the utilization of a comprehensive array of powerful and freely accessible tools, our project has come to fruition. These tools, each serving a unique purpose, have been instrumental in crafting a robust and insightful endeavor. Leveraging the capabilities of tools such as Jupyter Lab, Python, Plotly, Numpy, Matplotlib, Next.js, TypeScript, Chart.js, Leaflet, FontAwesome, GitHub, and Visual Studio Code, we have crafted an innovative platform that delves deep into the complexities of Italy's immigration landscape.
                        </p>
                        <h2 className="font-bold text-lg text-indigo-900" >Text Editor and Repository</h2>
                        <ul className="pt-2 pb-6">
                            <li className="pb-2">
                                <strong>GitHub:</strong> A platform for version control using Git, facilitating collaborative development, code management, and project hosting. <Link target="_blank" className="font-bold underline" href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">LICENSE</Link>
                            </li>
                            <li className="pb-2">
                                <strong>Visual Studio Code:</strong> A lightweight but powerful source code editor known for its built-in features, support for various programming languages, and extensions for customization. <Link target="_blank" className="font-bold underline" href="https://code.visualstudio.com/license">LICENSE</Link>
                            </li>
                        </ul>
                        <h2 className="font-bold text-lg text-indigo-900" >Back-end</h2>
                        <ul className="pt-2 pb-6">
                            <li className="pb-2">
                                <strong>Jupyter Lab:</strong> An interactive development environment for creating and sharing documents containing live code, equations, visualizations, and narrative text. <Link target="_blank" className="font-bold underline" href="https://jupyter.org/about">LICENSE</Link>
                            </li>
                            <li className="pb-2">
                                <strong>Python:</strong> A versatile and widely-used programming language known for its simplicity and readability, often used for various applications including data analysis, scripting, and web development. <Link target="_blank" className="font-bold underline" href="https://docs.python.org/3/license.html">LICENSE</Link>
                            </li>
                            <li className="pb-2">
                                <strong>Plotly:</strong> A graphing library used to create interactive and publication-quality graphs and visualizations. <Link target="_blank" className="font-bold underline" href="https://code.visualstudio.com/license">LICENSE</Link>
                            </li>
                            <li className="pb-2">
                                <strong>Numpy:</strong> A powerful library for numerical computing in Python, providing support for large, multi-dimensional arrays and matrices, along with a collection of mathematical functions to operate on these arrays. <Link target="_blank" className="font-bold underline" href="https://plotly.com/python/is-plotly-free/">LICENSE</Link>
                            </li>
                            <li className="pb-2">
                                <strong>Matplotlib:</strong> A comprehensive library for creating static, interactive, and animated visualizations in Python. <Link target="_blank" className="font-bold underline" href="https://matplotlib.org/stable/users/project/license.html">LICENSE</Link>
                            </li>
                        </ul>
                        <h2 className="font-bold text-lg text-indigo-900" >Front-end</h2>
                        <ul className="pt-2 pb-6">
                            <li className="pb-2">
                                <strong>Next.js (built upon React):</strong> A popular framework built on top of React for building fast and scalable web applications using server-side rendering and other features. <Link target="_blank" className="font-bold underline" href="https://github.com/vercel/next.js/blob/canary/license.md">LICENSE</Link>
                            </li>
                            <li className="pb-2">
                                <strong>TypeScript:</strong> A typed superset of JavaScript that compiles to plain JavaScript, providing improved tooling, error-checking, and maintainability for larger-scale projects. <Link target="_blank" className="font-bold underline" href="https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt">LICENSE</Link>
                            </li>
                            <li className="pb-2">
                                <strong>Chart.js:</strong> A simple yet flexible JavaScript charting library for creating various types of charts and graphs. <Link target="_blank" className="font-bold underline" href="https://www.chartjs.org/docs/2.9.4/notes/license.html">LICENSE</Link>
                            </li>
                            <li className="pb-2">
                                <strong>Leaflet:</strong> An open-source JavaScript library used for interactive maps, widely customizable and adaptable to various mapping applications. <Link target="_blank" className="font-bold underline" href="https://github.com/Leaflet/Leaflet/blob/main/LICENSE">LICENSE</Link>
                            </li>
                        </ul>
                        <p>
                            All the images utilized within the web site were created with the AI online tool by Wepik. To comply with the terms of use, the attribution <Link target="_blank" className="font-bold underline" href="https://support.wepik.com/s/article/Attribution?language=en_US">'Designed by Wepik'</Link> along with a link to www.wepik.com has been provided as required by the service.
                        </p>
                        <p>
                            The icons used in our web site to represent Creative Commons licenses have been sourced from <Link target="_blank" className="font-bold underline" href="https://fontawesome.com/v4/license/">FontAwesome.</Link> 
                        </p>
                    </div>
                </div>
            </article>
        </section>
    </main>
  )
}
