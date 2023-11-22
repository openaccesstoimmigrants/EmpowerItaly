'use client'

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface DocumentationLink {
    name: string;
    href: string;
}

interface DocumentationProps {
    links: DocumentationLink[];
}

export default function Documentation({ links }: DocumentationProps) {

    const segment = useSelectedLayoutSegment();

    return (
        <section id="documentation" className="pb-6">
            <article className="max-w-7xl m-auto">
                <div className="grid grid-cols-12 gap-6 h-full relative">
                    <div className="
                                rounded-2xl
                                p-8
                                md:p-12
                                bg-orange-100
                                col-span-12
                                lg:col-span-3
                                sticky
                                top-0
                                max-h-40
                    ">
                        <nav>
                            <h3 className="font-bold uppercase">Index</h3>
                            <ul className="cursor-pointer">
                                {links.map((link) => ( 
                                    <Link key={link.name} className={`/${segment}` === link.href ? 'y' : 'x'} href={link.href}>
                                        <li className="">
                                            {link.name}
                                        </li>
                                    </Link> 
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="
                                bg-indigo-100
                                col-span-12
                                lg:col-span-9
                                min-h-[2000px]
                                rounded-2xl
                                p-8
                                md:p-12
                    ">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet varius ante. Nulla placerat, urna in condimentum pellentesque, ipsum lacus placerat sem, malesuada fermentum augue sapien vitae arcu. In magna enim, luctus eget pulvinar sit amet, varius at leo. Cras sit amet diam augue. Donec sit amet bibendum diam, ac venenatis lorem. Donec vitae enim ornare, commodo risus quis, dignissim turpis. In hac habitasse platea dictumst. Praesent egestas, orci sed molestie euismod, felis urna pellentesque magna, in rutrum ante nibh nec libero. Phasellus at feugiat justo. Phasellus blandit enim a massa faucibus consequat. Suspendisse potenti. Aliquam vehicula nibh eu sollicitudin gravida. Phasellus quis nunc eu arcu rutrum vestibulum ut eget diam. Praesent vehicula arcu eu facilisis condimentum.

                            Vivamus ac purus in tellus viverra ornare. Suspendisse in odio ac turpis iaculis semper. In ac tincidunt erat. Duis sollicitudin a libero ut pellentesque. Donec a aliquam ligula. Vestibulum elementum facilisis ultricies. Curabitur commodo mi non orci luctus, sed volutpat enim ultrices.

                            Nunc id dictum augue. In ultrices eros nec congue eleifend. Nulla urna lectus, rutrum quis fermentum non, lobortis ac tortor. Integer rutrum sit amet dolor ac maximus. Nullam et lobortis magna. Fusce maximus fermentum mattis. Mauris magna justo, vestibulum id ligula ut, fermentum ultrices odio. Etiam elit est, convallis eu risus a, elementum sagittis eros.

                            Suspendisse potenti. Nam maximus sodales nulla, at porta ex tempor nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ultrices dui quis eros mollis, efficitur viverra dui pharetra. Nulla id velit sodales, gravida ipsum quis, posuere sapien. Etiam auctor sem pulvinar ornare posuere. Phasellus ac ornare justo. Phasellus id nibh nec ex suscipit facilisis. Aliquam egestas massa vel neque pellentesque, eu euismod lacus semper. Nunc vestibulum pretium magna sed euismod. Integer eu nunc maximus, gravida diam id, vestibulum eros. Integer justo mauris, porta vitae urna eget, vulputate scelerisque nisi. Sed quis tincidunt tellus. Vivamus mollis pretium purus vitae tincidunt. In ipsum purus, volutpat vitae gravida id, posuere vitae sem. Praesent convallis sit amet metus ut finibus.

                            Pellentesque gravida non arcu eu ornare. In dictum sem et nisi iaculis rutrum. Nam eget justo ut metus vulputate tincidunt. Suspendisse eros tortor, euismod id interdum sed, egestas quis ex. Phasellus molestie sapien in posuere interdum. Curabitur fringilla consequat semper. Sed id vehicula turpis, in dapibus ligula. Nullam ullamcorper ipsum id odio convallis auctor. In condimentum nisl est. Vivamus vehicula ac nulla sed pretium. Nunc eu lobortis leo, pretium congue quam.
                        </p>

                        <div id="Scenario"></div>
                        Bla Bla
                    </div>
                </div>
            </article>
        </section>
    )
}