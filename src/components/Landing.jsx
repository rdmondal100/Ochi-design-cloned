import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
import { creator } from "../assets";

const Landing = () => {
	return (
		<>
			<div className=' section_container relative  bg-[#F1F1F1] h-[99vh] md:h-[80vh]  lg:h-screen lg:mb-2 '>
				<div className=' w-full pt-1 h-[90vh] lg:h-screen  box-border flex flex-col justify-around  '>
					<div className='textstructure  mt-10  sm:px-6 px-4'>
						{["we creat", "eye-opening", "presentations"].map(
							(item, index) => {
								return (
									<div className='masker' key={index}>
										<div className='w-fit flex justify-center items-end '>
											{index === 1 && (
												<motion.div
													initial={{ width: 0 }}
													animate={{ width: `` }}
													transition={{
														ease: [
															0.76, 0, 0.24, 1,
														],
														duration: 1,
													}}
													className=' mt-[1vw] w-14 h-9 md:w-[9vw] rounded-md md:h-[5.7vw]   -mb-[1.5vw] mr-3 uppercase text-clip text-[3vw] font-[900] bg-contain bg-center bg-no-repeat bg-[#004D43]  '
													style={{
														backgroundImage: `url(${creator})`,
													}}
												></motion.div>
											)}
											<h1
												className={`  uppercase  font-large-font leading-[.7] md:leading-[.60] text-[#212121] text-6xl md:text-[9vw] pt-[2vw] -mb-[1vw]  `}
											>
												{item}
											</h1>
										</div>
									</div>
								);
							}
						)}
					</div>

					<div className=' md:mb-20 w-full border-t-[1.5px] border-slate-400 mt-24  '>
						<div className=' font-moon-font text-[.8rem] gap-5 md:px-5 pt-4 w-full  flex justify-between flex-col md:flex-row px-4 sm:px-6'>
							{[
								"Websites building from scratch",
								"Fix bug's in a existing website ",
							].map((item, index) => (
								<p key={index} className=' '>
									{item}
								</p>
							))}
							<div className='startProject gap-1 flex uppercase group cursor-pointer'>
								<button className=' rounded-full border-[1px] border-slate-400 bg-[#F1F1F1] group-hover:bg-black group-hover:text-white px-2 py-1 uppercase text-[.7rem] '>
									Start The Project
								</button>
								<div className='arrow  bg-[#F1F1F1] rounded-full w-7 h-7  justify-center items-center  border-[1px] border-slate-400 hidden lg:flex group-hover:bg-black group-hover:text-white'>
									<span className='rotate-[45deg] text-[.8rem]'>
										<FaArrowUpLong />
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
