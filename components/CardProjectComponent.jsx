import Link from "next/link";

const { default: Image } = require("next/image");

const CardProjectComponent = ({ data }) => (
    <nav className="h-[220px] w-full md:w-[400px] rounded-xl relative overflow-hidden">
        <Image fill alt={`Image for ${data.name}`} placeholder={'blur'} blurDataURL="/blur.png" className="rounded-xl" src={"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=820&q=80"} />
        <nav className="absolute h-[30%] bg-black/10 w-full bottom-0 left-0 p-4 flex items-center justify-between">
            <Link href={data.link}>
                <p className="text-lg text-white font-medium hover:underline">{data.name}</p>
            </Link>
            <Link href={data.link}>
                <svg className="h-[23px] w-[23px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 9H8v2h4v3l4-4-4-4v3z" />
                    </g>
                </svg>
            </Link>
        </nav>
    </nav>
)


export default CardProjectComponent;