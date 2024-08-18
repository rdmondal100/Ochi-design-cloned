import { useEffect, useRef } from "react";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import NavBar from "./components/NavBar";
import StartProject from "./components/StartProject";
import SmoothScroller from "./components/SmoothScroller";

const App = () => {



	return (
		<SmoothScroller>

			<NavBar />
			<section>
				<Landing />
			</section>
			<section>
				<Marquee />
			</section>
			<section>
				<About />
			</section>
			<section>
				<Eyes />
			</section>
			<section>
				<Featured />
			</section>
			<section>
				<StartProject />
			</section>
			<section>
				<Footer />
			</section>

		</SmoothScroller>
	);
};

export default App;
