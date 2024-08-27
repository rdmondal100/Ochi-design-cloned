import {
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import { cuppleImg } from "../assets";
import { useRef } from "react";

const About = () => {
	return (
		<div className=' section_container w-full bg-[#CDEA68]  rounded-t-xl  text-black  box-border  py-12 px-3  xl:translate-y-[10%]'>
			<h1 className=' font-small-font text-[4.5vw] p-[2vw] leading-[5vw] text-left relative'>
				Ochi is a strategic partner for fast-grow­ing tech businesses
				that need to raise funds, sell prod­ucts, ex­plain com­plex
				ideas, and hire great peo­ple.
			</h1>

			<div className=' w-full border-t-[1px] border-[#99AD52] mt-10 flex  font-small-font p-[2vw] '>
				<div className=' md:w-1/2 w-1/3'>
					<p className=' text-[1rem] '>What you can expect:</p>
				</div>
				<div className=' md:w-1/2 w-2/3 flex justify-between items-center '>
					<div className=' w-1/2 flex flex-col gap-9 '>
						<p className=' text-[1rem]'>
							We create tailored presentations to help you
							persuade your colleagues, clients, or investors.
							Whether it’s live or digital, delivered for one or a
							hundred people.
						</p>
						<p className=' text-[1rem]'>
							We believe the mix of strategy and design (with a
							bit of coffee) is what makes your message clear,
							convincing, and captivating.
						</p>
					</div>
					<div className=' flex flex-col gap-3'>
						<div className=' text-left'>S:</div>
						<ul>
							{[
								"Instagram",
								"Behance",
								"Facebook",
								"Linkedin",
							].map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className=' w-full h-full flex border-t-[1px] border-[#99AD52] mt-10 py-[2vw] sm:px-10 px-4 flex-col sm:flex-row gap-10 '>
				<div className='left w-1/2'>
					<h1 className='md:text-[3.8vw] text-3xl  text-[#212121] '>
						Our approach:
					</h1>
					<button className=' bg-[#000000]/85 rounded-full  py-[.9rem] px-[2rem] relative flex justify-center items-center gap-5 mt-[3vw] md:text-[1rem] text-[.7rem] '>
						<p className='uppercase text-[#FFFFFF] '>Read More </p>
						<div className=' w-2 h-2 rounded-full bg-white relative z-10'></div>
					</button>
				</div>

				<div className='right h-full sm:w-1/2 w-full flex justify-end py-2 '>
					<img
						src={cuppleImg}
						alt=''
						className=' rounded-xl w-full h-full'
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
