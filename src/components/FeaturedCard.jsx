const FeaturedCard = ({ projects }) => {
	return (
		<>
			{projects?.map((project, index) => (
				<div
					className='card relative  flex-wrap row-span-1  mb-5 w-full  h-auto rounded-xl   '
					key={index}
				>
					<div className='text uppercase mb-4 flex items-center text-[#212121]'>
						<span className=' w-2 h-2  flex-shrink-0 rounded-full bg-[#212121]  mr-2'></span>
						<span className=' text-[.7rem]'>{project?.title}</span>
					</div>

					<a href='' className=' mb-15 block group  relative  '>
						<div className=' rounded transition-transform group-hover:scale-95 duration-500 group-hover:duration-700 overflow-hidden'>
							<picture className=' w-full'>
								<img
									src={project?.image}
									alt=''
									className='w-full max-w-full rounded transition-transform group-hover:scale-110 duration-500 group-hover:duration-1000 entered loaded'
								/>
							</picture>
						</div>

						<h2
							className={`overflow-hidden  titleTex pointer-events-none    absolute  
          z-50 group-hover:z-50 duration-500  flex justify-center items-center  left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  ${
				index % 2 == 0
					? "md:-translate-x-1/2 md:-translate-y-1/2 md:left-full md:top-1/2"
					: "  md:top-1/2  md:-translate-x-1/2 md:-translate-y-1/2 md:left-0  "
			}`}
						>
							{project?.title?.split("").map((item, index) => (
								<span
									key={index}
									className={` text-[#CEEB69] m-0   text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase font-semibold  whitespace-nowrap  text-center  translate-y-96 group-hover:translate-y-0 transition-transform duration-500  -tracking-widest    `}
									style={{
										transitionDelay: `${index * 0.02}s`,
									}}
								>
									{item}
								</span>
							))}
						</h2>
					</a>

					<div className='btnTextContainer flex flex-wrap mt-5 gap-3 items-start'>
						{project?.btnText.map((text, index) => (
							<div className=' ' key={index}>
								<a
									href=''
									className='btn border-[1.5px] rounded-full px-2 py-1 border-[#212121] flex'
								>
									<span className=' text-sm'>{text}</span>
								</a>
							</div>
						))}
					</div>
				</div>
			))}
		</>
	);
};

export default FeaturedCard;
