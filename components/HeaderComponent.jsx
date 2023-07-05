"use client";

import { navigation_links } from "@/settings/navigation_links";
import { profile } from "@/settings/profile";
import Link from "next/link";
import { usePathname } from "next/navigation"

const HeaderComponent = ({ dark = false }) => {
    const pathname = usePathname();
    return (
        <>
            <header className="h-[10%] backdrop-blur-lg md:backdrop-blur-0 w-full md:px-[20%] px-[5%] fixed z-30">
                <div className={`md:grid grid-cols-3 h-full hidden w-full rounded-b-3xl ${dark && 'bg-neutral-900/60 backdrop-brightness-50 backdrop-blur-lg text-neutral-50'}`}>
                    <div className="h-full w-full none md:flex items-center justify-around">
                        {navigation_links.slice(0, Math.floor(navigation_links.length / 2)).map((link) => (
                            <Link href={link.link} key={link.id}>
                                <span className={`${pathname == link.link ? 'text-sky-500 font-bold' : 'hover:text-sky-500'}`}>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="h-full w-full none md:flex items-center justify-center">
                        <h1 className="text-lg font-bold">·<Link href={"/"}>{profile.pseudo}</Link>·</h1>
                    </div>
                    <div className="h-full w-full md:flex none items-center justify-around">
                        {navigation_links.slice(Math.floor(navigation_links.length / 2), navigation_links.length).map((link) => (
                            <Link href={link.link} key={link.id}>
                                <span className={`${pathname == link.link ? 'text-sky-500 font-bold' : 'hover:text-sky-500'}`}>{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="h-full w-full flex md:hidden flex-row items-center justify-between">
                    <h1 className="text-lg font-bold">·<Link href={"/"}>{profile.pseudo}</Link>·</h1>
                    <button className="bg-white h-[35px] w-[35px] flex items-center justify-center rounded-lg">
                        <svg className="h-[23px] w-[23px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
                            </g>
                        </svg>

                    </button>
                </div>
            </header>
            <nav className="h-[11.1%] block"></nav></>
    )
}


export default HeaderComponent;