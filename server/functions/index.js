const functions = require("firebase-functions");
const admin = require("firebase-admin");

require("dotenv").config();

const serviceAccountKey = require("./serviceAccountKey.json");

const express = require("express");
const app = express();

// Body parser for JSON data
app.use(express.json());

// cross origin
const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
	res.set("Access-Control-Allow-Origin", "*");
	next();
});

// Firebase Credentials
admin.initializeApp({
	credential: admin.credential.cert(serviceAccountKey),
});

// API Endpoints
app.get("/", (req, res) => {
	return res.send("Hello!");
});

const userRoute = require("./routes/user");
app.use("/api/users", userRoute);

const productRoute = require("./routes/products");
app.use("/api/products", productRoute);

exports.app = functions.https.onRequest(app);
