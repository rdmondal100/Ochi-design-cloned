import { useEffect } from "react";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import NavBar from "./components/NavBar";
import StartProject from "./components/StartProject";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

	useEffect(() => {
		let locoScroll;

		const handleResize = () => {
				const screenWidth = window.innerWidth;

				if (screenWidth <= 768) {
						if (locoScroll) {
								locoScroll.destroy();
								locoScroll = null;
						}
				} else {
						if (!locoScroll) {
								locoScroll = new LocomotiveScroll({
										el: document.querySelector('[data-scroll-container]'), 
										smooth: true,
								});
						}
				}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
				window.removeEventListener('resize', handleResize);
				if (locoScroll) {
						locoScroll.destroy();
				}
		};
}, []);



	return (
		<main className="" data-scroll-container>

			<NavBar />
			<section data-scroll data-scroll-speed="-0.6" className=" relative">
				<Landing />
			</section>
			<section data-scroll data-scroll-speed="-0.3" className=" relative z-[2]">
				<Marquee />
			</section>
			<section data-scroll data-scroll-speed="0.1" className=" relative z-[3]">
				<About />
			</section>
			<section    className=" relative z-[2] w-full md:h-screen justify-center items-center md:mb-60">
				<Eyes />
			</section>
			<section  data-scroll data-scroll-speed="-0.3" className=" z-[3] relative">
				<Featured />
			</section>
			<section className=" relative z-[4]" data-scroll data-scroll-speed=".1">
				<StartProject />
			</section>
			<section className=" relative z-[5]"  data-scroll data-scroll-speed="-.1">
				<Footer />
			</section>

		</main>
	);
};

export default App;
