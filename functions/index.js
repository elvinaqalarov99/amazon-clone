const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HvBDCIwMszZdGHJn6qEP7yxo4yelrEsNxUJ4MMMVMRDDwANoJRqAFa36FYwZx4YaklrTtsbhFQNikDcQ8cS8esS00e89HDLfK"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app
  .get("/", (request, response) => response.status(200).send("hello world"))
  .post("/payments/create", async (req, res) => {
    const total = req.query.total && req.query.total;
    console.log("Payment Request recieved", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    //OK - Created
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

// - Listen command
exports.api = functions.https.onRequest(app);
