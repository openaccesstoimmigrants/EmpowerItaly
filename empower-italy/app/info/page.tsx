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
                                If you discover a newer version of any of our input files, please notify us to assist in updating our files through our automated script. It's essential to note that our scripts are licensed under CC 4.0. We invite the community to contribute to the enhancement of our files by submitting updated versions to our <Link className="font-bold underline" href="https://github.com/openaccesstoimmigrants/openaccesstoimmigrants">GitHub</Link> project. Submitted files will undergo review, and if deemed accurate, they will be added to the project.
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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam distinctio quis ullam optio dignissimos? Facere ullam ea neque. Magni ab hic ipsa? Nam deleniti illo sit molestias deserunt sed pariatur!
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
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam distinctio quis ullam optio dignissimos? Facere ullam ea neque. Magni ab hic ipsa? Nam deleniti illo sit molestias deserunt sed pariatur!
                        </p>
                    </div>
                </div>
            </article>
        </section>

        <section id="licenses" className="pb-6">
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
                            Licenses
                        </h1>
                        <p>
                            <Link href="https://support.wepik.com/s/article/Attribution?language=en_US">https://support.wepik.com/s/article/Attribution?language=en_US</Link>
                            for CC icon    Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam distinctio quis ullam optio dignissimos? Facere ullam ea neque. Magni ab hic ipsa? Nam deleniti illo sit molestias deserunt sed pariatur!
                        </p>
                    </div>
                </div>
            </article>
        </section>
    </main>
  )
}
