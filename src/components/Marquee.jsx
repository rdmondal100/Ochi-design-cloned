import { motion} from "framer-motion";

const Marquee = () => {



	return (
		<div
		
			className='  w-full  rounded-t-xl bg-[#004D43] pb-20 py-16  overflow-hidden box-border -mt-2  lg:translate-y-[60%] xl:translate-y-[47%]  '
		>
			<div
				className='text flex 
      whitespace-nowrap text-zinc-50 overflow-hidden border-t-[.1px] border-b-[.1px] border-slate-50/50 font-large-font '
			>
				<motion.h1
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{
						ease: "linear",
						repeat: Infinity,
						duration: 10,
					}}
					className=' text-[27vw] leading-none font- uppercase  font-semibold mt-[-5vw] mb-[-2.5vw] pr-6 '
				>
					We are ochi
				</motion.h1>

				<motion.h1
					initial={{ x: 0 }}
					animate={{ x: "-100%" }}
					transition={{
						ease: "linear",
						repeat: Infinity,
						duration: 10,
					}}
					className=' text-[27vw] leading-none font- uppercase  font-semibold mt-[-5vw] mb-[-2.5vw] whitespace-nowrap  pr-6'
				>
					We are ochi{" "}
				</motion.h1>
			</div>
		</div>
	);
};

export default Marquee;
