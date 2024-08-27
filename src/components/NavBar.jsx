import { useEffect, useRef, useState } from "react";
import MobileNavBar from "./MobileNavBar";
import gsap from "gsap";

const NavBar = () => {
	const toggle = useRef()
  const topLine = useRef()
  const bottomLine = useRef()
  const mobileNav = useRef()

  const [isOpen,setIsOpen] = useState(false)
	const navigation = useRef();

	useEffect(() => {
		let lastScrollTop = 0;

		const navBarAnimation = () => {
			let scrollPositionY =
				window.scrollY || document.documentElement.scrollTop;

			if ((lastScrollTop < scrollPositionY) && !isOpen) {
				
				gsap.to(navigation.current ,{
					duration:.09,
					y: -250

				})
			} else {
				gsap.to(navigation.current ,{
					duration:.01,
					y: 0
				})			}

			lastScrollTop = scrollPositionY <= 0 ? 0 : scrollPositionY;
		};

		window.addEventListener("scroll", navBarAnimation);
		return () => {
			window.removeEventListener("scroll", navBarAnimation);
		};
	}, [isOpen]);



  useEffect(()=>{
    if(isOpen){
      document.body.style.overflow = 'hidden';

      gsap.to(topLine.current,{
        rotation:45,
        y:9

      })
      gsap.to(bottomLine.current,{
        rotation:-45,
        y:-5

      })

      
      gsap.to(mobileNav.current,{
        y:0,
        duration:.8,
        ease: "power3.out",
      })



    }

    else{
      document.body.style.overflow = 'auto';

      gsap.to(topLine.current,{
        rotation:0,
        y:0,
        backgroundColor:"#898989",

      })
      gsap.to(bottomLine.current,{
        rotation:0,
        y:0,
        backgroundColor:"#898989",


      })
      gsap.to(mobileNav.current,{
        y:-1000,
        duration:.8,
        ease: "power3.out"


      })
    }


  },[isOpen])

  console.log(isOpen)

	return (
		<>
			<nav
				ref={navigation}
				className={`w-full px-6 py-2 grid-cols-12  items-center fixed z-[9999] transition-all duration-500 backdrop-blur-[3px]  grid  ${isOpen? "":"bg-[#F1F1F1]/10"}`}
			>
				<div className={` col-span-6 logo flex font-moon-font bold-font px-1 text-4xl font-semibold  ${isOpen? " text-slate-200":" text-gray-800"} `}>
					ochi
				</div>
				<div className='hidden md:flex col-span-6  links pr-1'>
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

				<div className=' cursor-pointer toggle-container absolute  w-full h-20 flex justify-end items-start right-5 top-3 z-[99999] md:hidden'>
        <div ref={toggle} onClick={()=>setIsOpen(!isOpen)} className="toggle px-2  flex  flex-col justify-center items-center gap-3 py-2">
				<span ref={topLine} className=' w-9 h-[1.6px]  relative inline-block bg-slate-200 '></span>
				<span ref={bottomLine} className=' w-9 h-[1.6px]  relative bg-slate-200  '></span>

        </div>
			</div>

			</nav>
			<div className="mobileBar md:hidden  absolute ">

{<MobileNavBar isOpen={isOpen}/>} 
						</div>
		</>
	);
};

export default NavBar;
