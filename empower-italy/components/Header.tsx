'use client'

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface HeaderLink {
    name: string;
    href: string;
}

interface HeaderProps {
    links: HeaderLink[];
}

export default function Header({ links }: HeaderProps) {

    const segment = useSelectedLayoutSegment();

    return (
        <header className="w-full p-6 m-auto animate-fade-in-down pb-12">
            <div className="flex justify-between">
                <Link href="/" className="font-bold text-xl text-indigo-600">
                    EmpowerItaly
                </Link>
                <nav>
                    <ul className="flex items-center gap-x-6 cursor-pointer">
                        {links.map((link) => ( 
                            <Link key={link.name} className={`/${segment}` === link.href ? 'nav-button-active' : 'nav-button'} href={link.href}>
                                <li className="">
                                    {link.name}
                                </li>
                            </Link> 
                        ))}
                    </ul>
                </nav>
                <Link href="https://github.com/openaccesstoimmigrants/openaccesstoimmigrants" target="_blank" className="outline-button">
                    Github
                </Link>
            </div>
        </header>

    )
}


