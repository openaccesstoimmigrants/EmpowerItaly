'use client'

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { HEADER_LINKS } from "@/app/lib/data"

// Declaring Header's props type
type HeaderProps = (typeof HEADER_LINKS)[number]

export default function Header({ name, href}: HeaderProps) {

    const segment = useSelectedLayoutSegment();
    const isActive = `/${segment}` === href;

  console.log('segment:', `/${segment}`); // Log the value of segment
  console.log('href:', href); // Log the value of href

    return (
        <header className="w-full p-6 m-auto animate-fade-in-down">
            <div className="flex justify-between">
                <Link href="/" className="font-bold text-xl text-indigo-600">
                    EmpowerItaly
                </Link>
                <nav>
                    <ul className="flex items-center gap-x-6 cursor-pointer">
                        {HEADER_LINKS.map((link) => (
                            <li key={link.name} className="group nav-button">
                                <Link className={ isActive ? 'bg-indigo-600' : 'text-indigo-600 group-hover:text-indigo-50'} href={link.href}>
                                    {link.name}
                                 </Link> {/* TODO: FIX */}
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* <nav>
                    <ul className="flex items-center gap-x-6 cursor-pointer">
                        <li className="nav-button">
                            <Link className={active ? 'text-red-500' : ''} href={href}>Workflow</Link>
                        </li>
                        <li className="nav-button">
                            <Link className={active ? 'text-red-500' : ''} href={href}>Documentation</Link>
                        </li>
                        <li className="nav-button">
                            <Link href="/datasets">Datasets</Link>
                        </li>
                    </ul>
                </nav> */}
                <button className="outline-button">
                    Github
                </button>
            </div>
        </header>

    )
}


