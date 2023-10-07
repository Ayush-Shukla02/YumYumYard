import React, { useEffect } from "react";
import { Cart, Header } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api";
import { setAllProducts } from "../context/actions/productActions";
import { Logo } from "../assets";

function About() {
	const products = useSelector((state) => state.products);
	const isCart = useSelector((state) => state.isCart);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!products) {
			getAllProducts().then((data) => {
				dispatch(setAllProducts(data));
			});
		}
	}, []);

	return (
		<main className="w-screen min-h-screen flex items-center justify-center flex-col bg-primary">
			<Header />
			<img
				src={Logo}
				alt="Background"
				className="w-[90%] h-[90%] absolute opacity-10"
			/>
			<div className="w-full flex flex-col items-center justify-center mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
				<p className="text-2xl text-center font-sans">
					Welcome to YumYumYard, where we are passionate about
					bringing you the best in culinary experiences. Our team is
					dedicated to ensuring that your food ordering journey is not
					only convenient but also a delightful adventure.
				</p>
				<p className="text-2xl text-center font-sans">
					At YumYumYard, we believe that good food brings people
					together. Whether you're a food enthusiast or a restaurant
					owner, we are here to serve your needs. Our goal is to make
					your online food ordering experience memorable and
					hassle-free. Join us on this culinary journey, and let us be
					your trusted companion for all your food cravings.
				</p>
				<p className="text-3xl font-sans font-bold text-center text-orange-600">
					Bon appétit!
				</p>
			</div>

			{isCart && <Cart />}
		</main>
	);
}

export default About;
