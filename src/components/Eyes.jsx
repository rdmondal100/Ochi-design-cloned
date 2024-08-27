import { useEffect, useRef, useState } from "react";
import { eye } from "../assets";


const Eyes = () => {
	const [leftRotation, setLeftRotation] = useState(0);
	const [rightRotation, setRightRotation] = useState(0);

	const [leftEyeOffset, setLeftEyeOffset] = useState({ x: 0, y: 0 });

	const [rightEyeOffset, setRightEyeOffset] = useState({ x: 0, y: 0 });

	const leftEyeLine = useRef();
	const leftEyeBall = useRef();

	const rightEyeLine = useRef();
	const rightEyeBall = useRef();


	useEffect(() => {
		const handleMouseMove = (e) => {
			const { clientX: mouseX, clientY: mouseY } = e;

			if (leftEyeLine.current) {
				const rect = leftEyeLine.current.getBoundingClientRect();

				const centerX = rect.left + rect.width;
				const centerY = rect.top + rect.height;

				let radian = Math.atan2(mouseX - centerX, mouseY - centerY);
				setLeftRotation(
					Math.round(radian * (180 / Math.PI) * -1 + 270)
				);

				const blackRect = leftEyeBall.current.getBoundingClientRect();
				const eyeX = blackRect.left + blackRect.width;
				const eyeY = blackRect.top + blackRect.height;
				const maxDistance = blackRect.width / 16;

				const deltaX = mouseX - eyeX;
				const deltaY = mouseY - eyeY;

				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
				const ratio = Math.min(maxDistance / distance, 1);

				setLeftEyeOffset({
					x: deltaX * ratio,
					y: deltaY * ratio,
				});
			}

			if (rightEyeLine.current) {
				const rect = rightEyeLine.current.getBoundingClientRect();

				const centerX = rect.left + rect.width;
				const centerY = rect.top + rect.height;

				let radian = Math.atan2(mouseX - centerX, mouseY - centerY);
				setRightRotation(
					Math.round(radian * (180 / Math.PI) * -1 + 270)
				);

				const blackRect = rightEyeBall.current.getBoundingClientRect();
				const eyeX = blackRect.left + blackRect.width;
				const eyeY = blackRect.top + blackRect.height;

				const deltaX = mouseX - eyeX;
				const deltaY = mouseY - eyeY;

				const maxDistance = blackRect.width / 16;
				const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
				const ratio = Math.min(maxDistance / distance, 1);

				setRightEyeOffset({
					x: deltaX * ratio,
					y: deltaY * ratio,
				});
			}
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);



	const [marginBottom, setMarginBottom] = useState(0);

	const eyeElement = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const eyerect = eyeElement.current.getBoundingClientRect();
			// console.log(eyerect);
			// console.log(eyerect.height - eyerect.top);
			// console.log(eyerect.height > eyerect.top);

			if (eyerect.height > eyerect.top) {
				setMarginBottom((eyerect.height - eyerect.top) );
			}
		};

		
		window.addEventListener("scroll", handleScroll);
	}, []);
	
	// console.log(marginBottom)
	return (
		<div    data-scroll data-scroll-speed="-.5"    className=' section_container relative w-full   overflow-hidden cursor-pointer flex justify-center items-center rounded-t-xl   '>
			<div   className='lg:w-full h-full   bg-center relative flex flex-col justify-center items-center '>

				<img ref={eyeElement}  src={eye} alt='' className=' w-full  ' />

				<div className="relative ">

				<div  className='absolute  left-1/2 -translate-x-1/2 bottom-0 flex justify-center gap-6 sm:translate-y-[150%] lg:translate-y-[250%] xl:translate-y-[300%] transition-all duration-0 ease-linear ' 	style={{ marginBottom: `${marginBottom}px` }}>
					<div className='lefteye md:w-48 md:h-48 w-32 h-32 rounded-full bg-[#F4F4F4] flex justify-center items-center relative '>
						<div
							className='leftball  md:w-28 md:h-28 w-20 h-20  rounded-full bg-[#212121] relative flex justify-center items-center transition-transform  ease-linear'
							ref={leftEyeBall}
							style={{
								transform: `translate(${leftEyeOffset.x}px, ${leftEyeOffset.y}px)`,
							}}
						>
							<div
								className='eyeLine w-full'
								style={{
									transform: `rotate(${leftRotation}deg)`,
								}}
								ref={leftEyeLine}
							>
								<div className='bg-[#F4F4F4] md:h-4 md:w-4 h-3 w-3 rounded-full relative '></div>
							</div>
						</div>
						<div className=' uppercase text-white md:text-xl  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-lg '>
							Play
						</div>
					</div>

					<div className='righteye md:w-48 md:h-48 w-32 h-32  rounded-full bg-[#F4F4F4] flex justify-center items-center relative'>
						<div
							className='rightball md:w-28 md:h-28 w-20 h-20 rounded-full bg-[#212121] relative flex justify-center items-center transition-transform  ease-linear'
							ref={rightEyeBall}
							style={{
								transform: `translate(${rightEyeOffset.x}px, ${rightEyeOffset.y}px)`,
							}}
						>
							<div
								className='eyeLine w-full'
								style={{
									transform: `rotate(${rightRotation}deg)`,
								}}
								ref={rightEyeLine}
							>
								<div className='whiteEyeBall bg-[#F4F4F4] md:h-4 md:w-4 h-3 w-3 rounded-full relative  '></div>
							</div>
						</div>
						<div className=' uppercase text-white md:text-xl text-lg  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] '>
							Play
						</div>
					</div>
				</div>

				</div>
			</div>
		</div>
	);
};

export default Eyes;
