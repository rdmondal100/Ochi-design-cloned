import { useEffect, useRef } from "react";
import { GiDevilMask } from "react-icons/gi";

const NavBar = () => {
	const navigation = useRef();

	useEffect(() => {
		let lastScrollTop = 0;

		const navBarAnimation = () => {
			let scrollPositionY =
				window.scrollY || document.documentElement.scrollTop;

			if (lastScrollTop < scrollPositionY) {
				navigation.current.classList.add("navAnimation");
			} else {
				navigation.current.classList.remove("navAnimation");
			}

			lastScrollTop = scrollPositionY <= 0 ? 0 : scrollPositionY;
		};

		window.addEventListener("scroll", navBarAnimation);
		window.removeEventListener("scroll", navBarAnimation);
	}, []);

	return (
		<>
			<nav
				ref={navigation}
				className='w-full px-6 py-2 grid-cols-12 grid items-center fixed z-[999] transition-all duration-500 backdrop-blur-[3px] bg-[#F1F1F1]/10'
			>
				<div className=' col-span-6 logo flex font-moon-font bold-font px-1 text-4xl font-semibold  text-gray-800 '>
					ochi
				</div>
				<div className=' col-span-6 lg:flex links pr-1'>
					<ul className=' flex-grow w-full flex gap-[2vw] whitespace-nowrap relative'>
						{[
							"Searvices",
							"Our Works",
							"About Us",
							"Insights",
							"Contact Us",
						].map((item, index) => (
							<li
								key={index}
								className={`${
									index === 4 && "absolute right-0"
								}`}
							>
								<a
									href=''
									className={`${
										index === 4 && "ml-[10vw] "
									} font-small-font 
            capitalize tracking-tight  text-[.8rem] lg:text-[.9rem] xl:text-[1em] text-[#3B3B3B]`}
								>
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
