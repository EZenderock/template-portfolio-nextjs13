"use client";

import HeaderComponent from "@/components/HeaderComponent";
import { set_animation } from "@/components/HeroComponent";
import TechnoCardComponent from "@/components/TechnoCardComponent";
import TitleComponent from "@/components/TitleComponent";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <><HeaderComponent dark />
            <main className="h-full w-full flex items-center justify-center px-[10%] gap-8">
                <div className="w-4/12 md:flex hidden items-center justify-center">
                    <motion.nav initial="hidden" animate="visible" variants={set_animation(.5)} className="h-[400px] w-[400px] bg-black/10 relative rounded-3xl bg-center bg-cover" style={{
                        backgroundImage: "url(/zenderock.jpg)"
                    }}>
                        <nav className="absolute h-full w-full top-0 left-0 border-8 border-neutral-50 rotate-6"></nav>
                        <nav className="absolute h-full w-full top-0 left-0 border-8 border-neutral-50 -rotate-6"></nav>
                    </motion.nav>
                </div>
                <div className="md:w-8/12 w-full flex items-center justify-start text-left md:h-[400px] flex-col">
                    <nav>
                        <motion.h1 initial="hidden" animate="visible" variants={set_animation(1)} className="text-4xl font-bold">Hi!, I&apos;m Emmanuel Zenderock </motion.h1>
                        <motion.p initial="hidden" animate="visible" variants={set_animation(1.2)} className="mt-3 text-neutral-800 text-md">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil inventore nemo ea repellat aliquid porro laudantium deleniti dolore, distinctio, explicabo reprehenderit earum asperiores pariatur nisi eligendi odit aperiam ut ratione.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates recusandae veritatis nostrum odit ut impedit optio architecto culpa vel doloremque praesentium illo numquam cumque facere ex repellendus, quasi nihil dolorum.
                        </motion.p>
                    </nav>
                    <motion.nav initial="hidden" animate="visible" variants={set_animation(1.4)} className="w-full p-4 rounded-xl bg-white shadow-lg mt-5">
                        <h4 className="font-medium mb-3">Languages</h4>
                        <nav className="h-[40px] flex items-center gap-3">
                            <p>French</p>
                            <p className="h-[20px] w-10/12 bg-gradient-to-br from-green-400 to-green-600 rounded"></p>
                        </nav>
                        <nav className="h-[40px] flex items-center gap-3">
                            <p>English</p>
                            <p className="h-[20px] w-9/12 bg-gradient-to-br from-blue-400 to-blue-600 rounded"></p>
                        </nav>
                        <nav className="h-[40px] flex items-center gap-3">
                            <p>Espagnol</p>
                            <p className="h-[20px] w-5/12 bg-gradient-to-br from-orange-400 to-orange-600 rounded"></p>
                        </nav>
                    </motion.nav>
                </div>
            </main>

            <aside className="h-[300px] bg-neutral-950 relative -translate-y-[30%]">
                <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center text-center">
                    <h1 className="text-4xl text-neutral-50 opacity-80 uppercase font-medium">Creer des applications est ma passion</h1>
                </div>
                <div className="h-2/6 absolute w-full bg-neutral-50 -top-[1%] rounded-b-[100%] left-0">
                    <div className="bg-transparent translate-y-[20%] z-10 h-[80px] flex items-center justify-center">
                        <motion.a initial="hidden" animate="visible" variants={set_animation(1.8)} href="#skills" className="h-[45px] px-6 rounded-full z-10 shadow-xl uppercase shadow-sky-500/20 transition-all hover:bg-sky-700 text-sky-50 gap-2 bg-sky-500 flex items-center justify-center font-medium">
                            See my Skills
                            <svg className="h-[25px] w-[25px] fill-sky-50 animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm1-8h3l-4 4-4-4h3V8h2v4z" />
                                </g>
                            </svg>

                        </motion.a>
                    </div>
                </div>
                <div className="h-2/6 absolute w-full bg-neutral-50 -bottom-[1%] rounded-t-[100%] left-0"></div>
            </aside>
            <aside className="min-h-[100px] px-[10%]">
                <TitleComponent label="Languages" />
                <div className="p-6 rounded-lg bg-white shadow-lg grid md:grid-cols-5 grid-cols-2 gap-5">
                    <TechnoCardComponent />
                    <TechnoCardComponent />
                    <TechnoCardComponent />
                    <TechnoCardComponent />
                    <TechnoCardComponent />
                    <TechnoCardComponent />
                    <TechnoCardComponent />
                    <TechnoCardComponent />
                    <TechnoCardComponent />
                    <TechnoCardComponent />
                </div>
                <br />
            </aside>
        </>
    )
}
