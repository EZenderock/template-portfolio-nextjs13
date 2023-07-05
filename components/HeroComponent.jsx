"use client";

import { profile } from "@/settings/profile";
import { projects } from "@/settings/projects";
import { contact_link } from "@/settings/navigation_links";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

const DynamicCardProject = dynamic(() => import('@/components/CardProjectComponent'), {
    loading: () => <p>Loading projects...</p>
})

export const set_animation = (delay) => {
    const animation = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: .3,
                delay: delay
            }
        },
        hidden: {
            opacity: 0,
            y: 10,
            transition: {
                when: "afterChildren",
            },
        }
    }

    return animation;
}

const HeroComponent = () => (
    <aside className="h-full w-full px-[5%]">
        <motion.section initial={{ y: 1000, scale: 0, opacity: 0 }} animate={{
            y: 0,
            scale: 1,
            opacity: 1
        }} transition={{ duration: .5 }} className="h-full w-full bg-gradient-to-tr from-neutral-900 to-neutral-950 text-neutral-50 rounded-t-3xl flex items-center justify-center flex-col">
            <p className="h-[150px] inline-block bg-center bg-cover md:hidden w-[150px] rounded-full bg-neutral-800" style={{
                backgroundImage: "url(/zenderock.jpg)"
            }}></p>
            <nav className="flex items-center flex-col w-10/12 mt-[3%]">
                <motion.h1 initial="hidden" animate="visible" variants={set_animation(1)} className="md:text-7xl text-5xl md:w-9/12 w-11/12 text-center font-black bg-gradient-to-tl from-white to-neutral-50 text-transparent bg-clip-text">
                    {profile.domain} Based in {profile.country}
                </motion.h1>
                <br />
                <motion.p initial="hidden" animate="visible" variants={set_animation(1.2)} className="text-center text-neutral-100 opacity-70 w-10/12">
                    {profile.bio}
                </motion.p>
                <br />
                <motion.nav initial="hidden" animate="visible" variants={set_animation(1.4)}>
                    <Link href={contact_link} className="h-[50px] shadow-xl gap-2 uppercase px-6 font-medium rounded-full bg-gradient-to-tr from-sky-500 to-sky-400 transition hover:shadow-none hover:opacity-80 text-white flex items-center">
                        Contact me
                        <svg className="h-[23px] w-[23px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9H8v2h4v3l4-4-4-4v3z" />
                            </g>
                        </svg>
                    </Link>
                </motion.nav>
            </nav>
            <div className="mt-[2%] hidden md:flex flex-col md:flex-row items-center gap-5">
                {projects.slice(0, 2).map((project, i) => {
                    if (i == 0) {
                        i = .9;
                    }
                    return (
                        <motion.nav key={project.id} initial="hidden" animate="visible" variants={set_animation(1 + (i / 2))}>
                            <DynamicCardProject data={project} />
                        </motion.nav>
                    )
                })}
            </div>
        </motion.section>
    </aside>
)


export default HeroComponent;