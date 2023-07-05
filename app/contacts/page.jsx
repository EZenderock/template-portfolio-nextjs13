"use client";

import ContactLineComponent from "@/components/ContactLineComponent"
import HeaderComponent from "@/components/HeaderComponent"
import { set_animation } from "@/components/HeroComponent";
import TitleComponent from "@/components/TitleComponent"
import { motion } from "framer-motion";

export default function ContactsPage() {
    return (
        <>
            <HeaderComponent dark />
            <main className="h-full px-[10%] mt-[5%]">
                <motion.div initial="hidden" animate="visible" variants={set_animation(.5)} className="flex flex-col gap-4 items-center justify-center">
                    <p className="h-[150px] inline-block bg-center bg-cover w-[150px] rounded-full bg-neutral-800" style={{
                        backgroundImage: "url(/zenderock.jpg)"
                    }}></p>
                    <motion.p initial="hidden" animate="visible" variants={set_animation(.8)} className="font-medium">Web developer</motion.p>
                </motion.div>
                <motion.nav initial="hidden" animate="visible" variants={set_animation(1)}>

                    <TitleComponent label="Contacts" />
                </motion.nav>
                <motion.aside initial="hidden" animate="visible" variants={set_animation(1.2)} className="mt-[5%] bg-white shadow-lg p-4 rounded-lg space-y-5">
                    <ContactLineComponent />
                    <ContactLineComponent />
                    <ContactLineComponent />
                </motion.aside>
                <br /> <br />
                <motion.nav initial="hidden" animate="visible" variants={set_animation(1.4)}>
                    <TitleComponent label="Socials" />
                </motion.nav>
                <motion.aside initial="hidden" animate="visible" variants={set_animation(1.6)} className="mt-[5%] bg-white shadow-lg p-4 rounded-lg space-y-5">
                    <ContactLineComponent />
                    <ContactLineComponent />
                    <ContactLineComponent />
                </motion.aside>
                <br />
            </main>
        </>
    )
}
