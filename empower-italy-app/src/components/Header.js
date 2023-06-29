import { navLinks } from '../constants'

function Header() {
    return (
        <header className="w-full flex px-4 py-6 justify-between items-center">
            <div className="flex-1">
                <h1 className="logo--typo">EMPOWER ITALY</h1>
            </div>
            <nav id="nav" className="flex-1">
                <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`cursor-pointer ${index === navLinks.length - 1 ? `mr-o` : `mr-10`}`}
                        >
                            <a href={`${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header