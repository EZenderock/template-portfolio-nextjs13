"use client";

import HeaderComponent from "@/components/HeaderComponent"
import TitleComponent from "@/components/TitleComponent"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { set_animation } from "@/components/HeroComponent"

const DynamicCardWork = dynamic(() => import('@/components/WorkCardComponent'), {
    loading: () => <p>Loading card...</p>
})

export default function WorkPage() {
    return (
        <>
            <HeaderComponent dark />
            <main className="h-full px-[10%] mt-[5%]">
                <div className="flex flex-col gap-4 items-center justify-center relative">
                    <motion.p initial="hidden" animate="visible" variants={set_animation(1)} className="h-[150px] inline-block bg-center bg-cover w-[150px] rounded-full bg-neutral-800" style={{
                        backgroundImage: "url(/zenderock.jpg)"
                    }}></motion.p>
                    <motion.p initial="hidden" animate="visible" variants={set_animation(1.2)} className="font-medium text-xl">Web developer</motion.p>
                </div>
                <nav className="absolute right-0 h-full w-[20px] bg-neutral-900"></nav>
                <TitleComponent label="Work" />
                <motion.aside initial="hidden" animate="visible" variants={set_animation(1.6)} className="mt-[5%] space-y-6">
                    <DynamicCardWork />
                    <DynamicCardWork />
                    <DynamicCardWork />
                </motion.aside>
            </main>
        </>
    )
}
