import { useState } from "react";
import { NAVLINKS } from "../../constants/navLiks";

export default function NavBar() {
    const [active, setActive] = useState<string>('about');

    const handleClick = (link: string):void => {
        setActive(link);
    };

    return (
        <nav className="hidden lg:block">
            <ul>
                {NAVLINKS.map((link, index) => (
                    <li key={index} onClick={() => handleClick(link)} className="pb-4">
                        <a className={`flex items-center group ${(active === link) ? 'active' : ''}`} href={`#${link}`}>
                            <span className="flex items-center">
                                <span className="h-px w-10 bg-slate-400 group-[.active]:bg-slate-100 group-[.active]:scale-150 transition-all ease-in-out duration-500 group-[.active]:translate-x-1/4"></span>
                            </span>
                            <span className="ml-3 font-semibold text-sm group-[.active]:text-slate-100 transition-transform group-[.active]:translate-x-6 ease-in-out duration-300">{link.toUpperCase()}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

