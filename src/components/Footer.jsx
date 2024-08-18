const Footer = () => {
	return (
		<footer className=' section_container relative h-screen rounded-t-xl   bg-[#F1F1F1] z-50 w-full   pt-16 -mt-2 md:px-5 '>
			<div className='top flex flex-col sm:flex-row  '>
				<div className='left textstructure md:w-1/2  sm:px-6 px-4'>
					<div className='masker'>
						<div className='w-fit flex flex-col justify-start'>
							<h1
								className={`  uppercase text-9xl font-large-font leading-[.60] text-[#212121] text-[9vw] pt-[2vw] -mb-[1vw] `}
							>
								Eye-
							</h1>
							<h1
								className={`  uppercase text-9xl font-large-font leading-[.60] text-[#212121] text-[9vw] pt-[2vw] -mb-[1vw] `}
							>
								opening
							</h1>
						</div>
					</div>
				</div>

				<div className='right md:w-1/2 sm:px-6 px-4 sm:w-full'>
					<h1
						className={`  uppercase text-9xl font-large-font leading-[.60] text-[#212121] text-[9vw] pt-[2vw] -mb-[1vw] `}
					>
						presentations
					</h1>

					<div className='links mt-10  text-[.85rem] font-small-font flex justify-between  flex-wrap relative sm:flex-col w-full '>
						<div className='socialsLInks w-1/2'>
							<div className='socials'>
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
						<div className='otherLinks flex gap-8 flex-col mt-8 '>
							<div className='second'>
								<div className=' flex flex-col gap-3'>
									<div className=' text-left'>L:</div>
									<ul>
										{[
											"202-1965 W 4th Ave",
											"Vancouver, Canada",
											"30 Chukarina St",
											"Lviv, Ukraine",
										].map((item, index) => (
											<li
												key={index}
												className={`${
													index == 2 && " mt-5"
												}`}
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>

							<div className='third'>
								<div className=' flex flex-col gap-3'>
									<div className=' text-left'>E:</div>
									<span>hello@ochi.design</span>
								</div>
							</div>
						</div>

						<div className='mainLnks sm:absolute sm:h-full sm:right-0 order-first sm:order-none w-1/2  sm:items-center sm:justify-end sm:flex '>
							<div className='links   flex flex-col gap-3'>
								<div className=' text-left'>M:</div>
								<ul>
									{[
										"Home",
										"Services",
										"Our work",
										"About us",
										"Insights",
										"Contact us",
									].map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='bottom sm:px-5 px-4  mt-4 flex flex-col sm:flex-row sm:w-full sm:justify-between gap-8 py-8 '>
				<div className='logo sm:w-full'>
					<div className=' col-span-6 logo flex font-moon-font bold-font  text-4xl font-semibold  text-gray-800 '>
						ochi
					</div>
				</div>

				<div className='copywrite sm:w-full sm:flex sm:justify-between sm:items-center  font-small-font text-sm text-black/50'>
					<span>© ochi design clone</span>
					<div className=' mt-3 sm:mt-0'>
						Website by{" "}
						<a
							href='https://www.riday.tech/'
							target='_blanck'
							className=' text-green-700 font-bold tracking-[.2rem] ml-2'
						>
							Riday
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
