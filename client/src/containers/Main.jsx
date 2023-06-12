import React, { useEffect } from "react";
import { Cart, Header, Home } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllUsers } from "../api";
import { setAllProducts } from "../context/actions/productActions";
import { setAllUsersDetails } from "../context/actions/allUsersAction";

const Main = () => {
	const products = useSelector((state) => state.products);
	const users = useSelector((state) => state.users);
	const isCart = useSelector((state) => state.isCart);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!products) {
			getAllProducts().then((data) => {
				dispatch(setAllProducts(data));
			});
		}
	}, []);

	useEffect(() => {
		if (!users) {
			getAllUsers().then((data) => {
				dispatch(setAllUsersDetails(data));
			});
		}
	}, []);

	return (
		<main className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
			<Header />
			<div className="w-full flex flex-col items-start justify-center mt-40 px-6 md:px-24 2xl:px-70 gap-12 pb-15">
				<Home />
			</div>
			{isCart && <Cart />}
		</main>
	);
};

export default Main;
