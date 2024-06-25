import { useState } from "react";
import { NAVLINKS } from "../../constants/navLiks";

export default function NavBar() {
    const [selectedLinks, setSelectedLinks] = useState<string[]>(['about']);
    const [activeLink, setActiveLink] = useState<string>('about');

    const handleClick = (link: string):void => {
        setActiveLink(link);
    };

    const handleSelectedLink = (link: string):void => {
        setSelectedLinks([...selectedLinks, link]);
    };

    const handleUnselectedLink = (link: string):void => {
        const newActivesLink = selectedLinks.filter(x => x !== link);
        setSelectedLinks(newActivesLink);
    };

    return (
        <nav className="hidden lg:block lg:mt-12">
            <ul className="inline-flex flex-col">
                {NAVLINKS.map((link, index) => (
                    <li key={index} className="pb-4">
                        <a className={`flex items-center group ${(activeLink === link || selectedLinks.includes(link)) ? 'active' : ''}`} onMouseEnter={() => handleSelectedLink(link)} onMouseLeave={() => handleUnselectedLink(link)} onClick={() => handleClick(link)} href={`#${link}`}>
                            <span className="flex items-center">
                                <span className="h-0.5 w-10 bg-slate-100 group-[.active]:bg-sky-400 group-[.active]:scale-x-150 transition-all ease-in-out duration-500 group-[.active]:translate-x-1/4"></span>
                            </span>
                            <span className="ml-3 font-semibold text-sm text-slate-100 group-[.active]:text-sky-400 transition-transform group-[.active]:translate-x-6 ease-in-out duration-300">{link.toUpperCase()}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

