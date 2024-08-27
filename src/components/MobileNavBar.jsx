import { useEffect, useRef, useState } from "react";

import gsap from "gsap"






const MobileNavBar = ({isOpen}) => {

  const mobileNav = useRef()

  useEffect(()=>{
    if(isOpen){
      
      gsap.to(mobileNav.current,{
        y:0,
        duration:.8,
        ease: "power3.out",
      })



    }

    else{
      document.body.style.overflow = 'auto';

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



		<div ref={mobileNav} className=' mobileNav md:hidden fixed right-0 top-0 bg-zinc-900 z-[9997] pt-20 h-screen w-full flex flex-col translate-y-[-100%]'>


			<ul className=' border-[#646464] border-t-[1.5px] mt-10 flex-grow w-full flex flex-col gap- whitespace-nowrap relative px-2 gap-2 py-5 '>
				{[
					"Searvices",
					"Our Works",
					"About Us",
					"Insights",
					"Contact Us",
				].map((item, index) => (
					<li key={index} className={"h-auto"}>
						<a
							href=''
							className={` font-large-font
            uppercase  text-[5rem] xl:text-[1em] h-auto leading-[3.5rem] text-[#ffffff]`}
						>
							{item}
						</a>
					</li>
				))}
			</ul>
		</div>
    </>
	);
};

export default MobileNavBar;
