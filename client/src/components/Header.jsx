import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Avatar, Logo } from "../assets";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { motion } from "framer-motion";
import { buttonClick, slideTop } from "../animations";
import { MdLogout, MdShoppingCart } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { app } from "../config/firebase.config";
import { setUserNull } from "../context/actions/userActions";
import { setCartOn } from "../context/actions/displayCartAction";

const Header = () => {
	const user = useSelector((state) => state.user);
	const cart = useSelector((state) => state.cart);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
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
		<header className="fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6">
			<NavLink
				to={"/"}
				className="flex items-center justify-center gap-4"
			>
				<img src={Logo} alt="logo" className="w-12" />
				<p className="font-semibold text-xl">YumYumYard</p>
			</NavLink>

			<nav className="flex items-center justify-center gap-8">
				<ul className="hidden md:flex items-center justify-center gap-16">
					<NavLink
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
						to={"/"}
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
						to={"/menu"}
					>
						Menu
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? isActiveStyles : isNotActiveStyles
						}
						to={"/about"}
					>
						About Us
					</NavLink>
				</ul>

				<motion.div
					{...buttonClick}
					onClick={() => dispatch(setCartOn())}
					className="relative cursor-pointer"
				>
					<MdShoppingCart className="text-3xl text-textColor" />
					{cart?.length > 0 && (
						<div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1">
							<p className="text-primary text-base font-semibold">
								{cart?.length}
							</p>
						</div>
					)}
				</motion.div>

				{user ? (
					<>
						<div
							className="relative cursor-pointer"
							onClick={() => setIsMenuOpen(true)}
							onMouseLeave={() => {
								setIsMenuOpen(false);
							}}
						>
							<div className="w-12 h-12 rounded-full shadow-md overflow-hidden cursor-pointer flex items-center justify-center">
								<motion.img
									className="w-full h-full object-cover"
									src={user?.picture ? user?.picture : Avatar}
									whileHover={{ scale: 1.15 }}
									referrerPolicy="no-referrer"
								/>
							</div>
							{isMenuOpen && (
								<motion.div
									className="px-6 py-4 w-48 bg-lightOverlay backdrop-blur-md rounded-md shadow-md absolute top-12 right-0 flex flex-col gap-4"
									onMouseLeave={() => {
										setIsMenuOpen(false);
									}}
									{...slideTop}
								>
									{user?.user_id ===
										process.env.REACT_APP_ADMIN_ID && (
										<Link
											className=" hover:text-red-500 text-xl text-textColor"
											to={"/dashboard/home"}
										>
											Dashboard
										</Link>
									)}

									<Link
										className="hover:text-red-500 text-xl text-textColor"
										to={"/profile"}
									>
										My Profile
									</Link>
									<Link
										className=" hover:text-red-500 text-xl text-textColor"
										to={"/user-orders"}
									>
										Orders
									</Link>
									<hr />
									<motion.div
										{...buttonClick}
										className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-100 hover:bg-gray-200 gap-3"
										onClick={signOut}
									>
										<MdLogout className="text-2xl text-textColor group-hover:text-headingColor" />
										<p className="text-textColor text-xl group-hover:text-headingColor">
											Sign Out
										</p>
									</motion.div>
								</motion.div>
							)}
						</div>
					</>
				) : (
					<>
						<NavLink to={"/login"}>
							<motion.button
								{...buttonClick}
								className="px-4 py-2 rounded-md shadow-md bg-lightOverlay border border-red-300 cursor-pointer"
							>
								Login
							</motion.button>
						</NavLink>
					</>
				)}
			</nav>
		</header>
	);
};

export default Header;
