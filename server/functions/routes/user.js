const router = require("express").Router();
const admin = require("firebase-admin");

let data = [];

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
		return res.status(500).send({
			success: false,
			msg: `Error in extracting the token : ${err}`,
		});
	}
});

const listAllUsers = (nextPageToken) => {
	admin
		.auth()
		.listUsers(1000, nextPageToken)
		.then((listUsersResult) => {
			listUsersResult.users.forEach((userRecord) => {
				data.push(userRecord.toJSON());
			});

			if (listUsersResult.pageToken) {
				listAllUsers(listUsersResult.pageToken);
			}
		})
		.catch((error) => {
			console.log("Error listing users:", error);
		});
};

// listAllUsers();

router.get("/all", async (req, res) => {
	listAllUsers();
	try {
		return res
			.status(200)
			.send({ success: true, data: data, dataCount: data.length });
	} catch (error) {
		return res.send({
			success: false,
			msg: `Error in listing users: ${error}`,
		});
	}
});

module.exports = router;
