import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	BsFillBellFill,
	BsToggles2,
	MdLogout,
	MdSearch,
} from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { Avatar } from "../assets";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setUserNull } from "../context/actions/userActions";
import { app } from "../config/firebase.config";

const DBHeader = () => {
	const user = useSelector((state) => state.user);

	const firebaseauth = getAuth(app);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const signOut = () => {
		firebaseauth
			.signOut()
			.then(() => {
				dispatch(setUserNull());
				navigate("/login", { replace: true });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="w-full flex items-center justify-between gap-3">
			<p className="text-2xl text-headingColor">
				Welcome to City
				{user?.data.name && (
					<span className="block text-base text-gray-500">{`Hello ${user?.data.name}!`}</span>
				)}
			</p>

			<div className="flex items-center justify-center gap-4">
				<div className="flex items-center justify-center gap-3 px-4 py-2 bg-lightOverlay backdrop-blur-md rounded-md shadow-md">
					<MdSearch className="text-gray-400 text-2xl" />
					<input
						type="text"
						placeholder="Search Here..."
						className="border-none outline-none bg-transparent w-32 text-base font-semibold text-textColor"
					/>
					<BsToggles2 className="text-gray-400 text-2xl" />
				</div>
				<motion.div
					{...buttonClick}
					className="w-10 h-10 rounded-md cursor-pointer bg-lightOverlay
					backdrop-blur-md shadow-md flex items-center justify-center"
				>
					<BsFillBellFill className="text-gray-400 text-xl" />
				</motion.div>

				<div className="flex items-center justify-center gap-2">
					<div className="w-10 h-10 rounded-md shadow-md cursor-pointer overflow-hidden">
						<motion.img
							className="w-full h-full object-cover"
							src={
								user?.data.picture ? user?.data.picture : Avatar
							}
							whileHover={{ scale: 1.15 }}
							referrerPolicy="no-referrer"
						/>
					</div>
					<motion.div
						{...buttonClick}
						className="w-10 h-10 rounded-md cursor-pointer bg-lightOverlay backdrop-blur-md shadow-md flex items-center justify-center"
						onClick={signOut}
					>
						<MdLogout className="text-gray-400 text-xl" />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default DBHeader;