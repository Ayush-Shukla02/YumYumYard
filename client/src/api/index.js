import axios from "axios";

export const baseURL = "http://localhost:5001/yumyumyard-eb507/us-central1/app";

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
