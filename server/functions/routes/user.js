/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable new-cap */
const router = require("express").Router();
const admin = require("firebase-admin");

router.get("/", (req, res) => {
	return res.send("Hello from user route!");
});

router.get("/jwtVerification", async (req, res) => {
	if (!req.headers.authorization) {
		return res.status(500).send({ msg: "Token is not provided" });
	}

	const token = req.headers.authorization.split(" ")[1];
	//   return res.status(200).send({ token: token });
	try {
		const decodedValue = await admin.auth().verifyIdToken(token);
		if (!decodedValue) {
			return res
				.status(500)
				.json({ success: false, msg: "Unauthorised Access" });
		}
		return res
			.status(200)
			.json({ success: true, data: decodedValue, msg: "Token is valid" });
	} catch (err) {
		return res
			.status(500)
			.send({
				success: false,
				msg: `Error in extracting the token : ${err}`,
			});
	}
});

module.exports = router;
