import axios from "axios";

export const baseURL = "http://localhost:5001/yumyumyard-eb507/us-central1/app";

// Verify the user's JWT token
export const validateUserJWTToken = async (token) => {
	try {
		const response = await axios.get(
			`${baseURL}/api/users/jwtVerification`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		return response.data;
	} catch (err) {
		return null;
	}
};

// Add a new product to the database
export const addNewProduct = async (data) => {
	try {
		const res = await axios.post(`${baseURL}/api/products/create`, {
			...data,
		});
		return res.data.data;
	} catch (err) {
		return null;
	}
};

// Get all products from the database
export const getAllProducts = async () => {
	try {
		const res = await axios.get(`${baseURL}/api/products/all`);
		return res.data.data;
	} catch (err) {
		return null;
	}
};

// Delete a product from the database
export const deleteProduct = async (productId) => {
	try {
		const res = await axios.delete(
			`${baseURL}/api/products/delete/${productId}`
		);

		return res.data.data;
	} catch (err) {
		return null;
	}
};
