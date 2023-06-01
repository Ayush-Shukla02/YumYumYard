import React from "react";
import { motion } from "framer-motion";
import { Delivery } from "../assets";

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
			</div>
			<div className="">2</div>
		</motion.div>
	);
};

export default Home;
