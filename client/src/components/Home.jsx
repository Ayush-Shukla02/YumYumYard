import React from "react";
import { motion } from "framer-motion";
import { Delivery } from "../assets";
import { buttonClick } from "../animations";

const Home = () => {
	return (
		<motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
			<div className="flex flex-col items-start justify-start gap-6">
				<div className="px-4 py-1 flex items-center justify-center gap-2 bg-orange-100 rounded-full">
					<p className="text-lg font-semibold text-orange-500">
						Free Delivery
					</p>
					<div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md">
						<img
							src={Delivery}
							className="w-full h-full object-contain"
						/>
					</div>
				</div>
				<p className="text-[40px] text-headingColor md:text-[72px] font-sans font-extrabold tracking-wider">
					Fastest Delivery in{" "}
					<span className="text-orange-600">Your City</span>
				</p>
				<p className="text-textColor text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
					voluptates qui molestiae, et numquam recusandae explicabo
					ducimus pariatur ea consequuntur quasi tempora. Reiciendis
					delectus laudantium rem aut eum perspiciatis nobis?
				</p>
				<motion.button
					{...buttonClick}
					className="bg-gradient-to-bl from-orange-400 to-orange-600 px-4 py-2 rounded-xl text-black text-base font-semibold"
				>
					Order Now
				</motion.button>
			</div>
			<div className="">2</div>
		</motion.div>
	);
};

export default Home;
