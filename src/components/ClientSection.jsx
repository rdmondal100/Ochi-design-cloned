import { clientLogo1, clientLogo2 } from "../assets";

const ClientSection = () => {
	return (
		<section className=' relative flex gap-3 px-10 my-12 flex-col  w-full md:flex-row font-small-font '>
			<div className='left bg-[#004D43] h-[15rem] lg:h-[19rem]  rounded-lg md:flex-1 lg:flex-[2] w-full relative'>
				<div className='mainElement absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
					<span className=' text-6xl  text-[#CDEA68] font-semibold tracking-wider'>
						ochi
					</span>
				</div>
				<div className='bottomLeft absolute bottom-6 left-6'>
					<a
						href=''
						className='btn border-[1.5px] rounded-full px-2 py-1 border-[#CDEA68] text-[#CDEA68] flex'
					>
						<span className=' text-sm'>©2019-2022</span>
					</a>
				</div>
			</div>

			<div className='flex gap-3 md:flex-[2]'>
				<div className='mid bg-[#212121] h-[15rem] lg:h-[19rem]  rounded-lg w-1/2 md:flex-1 relative cursor-pointer'>
					<div className='mainElement absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
						<img src={clientLogo1} alt='' />
					</div>

					<div className='bottomLeft absolute bottom-6 left-6'>
						<a
							href=''
							className='btn border-[1.5px] rounded-full px-2 py-1 border-[#fff] text-[#fff] flex'
						>
							<span className=' text-[.6rem] uppercase'>
								rating 5.0 on clutch
							</span>
						</a>
					</div>
				</div>

				<div className='right bg-[#212121] h-[15rem] lg:h-[19rem]  rounded-lg w-1/2 md:flex-1 relative cursor-pointer'>
					<div className='mainElement absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
						<img src={clientLogo2} alt='' />
					</div>
					<div className='bottomLeft absolute bottom-6 left-6'>
						<a
							href=''
							className='btn border-[1.5px] rounded-full px-2 py-1 border-[#fff] text-[#fff] flex'
						>
							<span className=' text-[.6rem] uppercase'>
								business bootcamp alumni
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClientSection;
