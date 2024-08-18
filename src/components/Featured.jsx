import useFeaturedProjects from "../hooks/useFeaturedProjects";
import FeaturedCard from "./FeaturedCard";
import ClientSection from "./ClientSection";

const Featured = () => {
	const { projectsToShow, showMore, setShowMore } = useFeaturedProjects();

	return (
		<div

			className=' container relative w-full py-10   bg-[#F1F1F1]  rounded-t-xl  '
		>
			<div className='w-full border-b-[1.5px] pb-10 border-[#B2B2B2] '>
				<h1 className=' xl:text-5xl md:text-4xl text-[2rem] font-small-font px-5 '>
					Featured projects
				</h1>
			</div>

			<div className='cards w-full flex md:grid-cols-2 md:grid  flex-col md:flex-row gap-3 px-3 md:px-12 mt-10 '>
				<FeaturedCard projects={projectsToShow} />
			</div>

			{!showMore && (
				<div className='allCaseStudies w-full flex justify-center items-center'>
					<button
						className=' bg-[#000000]/85 rounded-full  py-[.9rem] px-[2rem] relative flex justify-center items-center gap-5 mt-[3vw] md:text-[1rem] text-[.7rem] '
						onClick={() => setShowMore(true)}
					>
						<p className='uppercase text-[#FFFFFF] tracking-tight '>
							view all case studies{" "}
						</p>
						<div className=' w-2 h-2 rounded-full bg-white relative z-10'></div>
					</button>
				</div>
			)}

			<ClientSection />
		</div>
	);
};

export default Featured;
