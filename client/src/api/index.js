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
