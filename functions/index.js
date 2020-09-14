const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQhj1EWOlTjgAuT2OLlCKUvkBv0MkWQnnD5okpJGDSojhVt51gNDRWxNfBVkqfmf5McJd4ugKsxvunnNJ6Ext2K00gCvAwiwD"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-89041/us-central1/api
