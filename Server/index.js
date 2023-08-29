const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
require("dotenv").config();

mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

const corsOptions = {
  origin: ["http://localhost:5173", "https://molo-steel.vercel.app"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("../../client/html-js"));
app.use(cors(corsOptions));
app.get("/", function (req, res) {
  res.status(200).send("Molo");
});

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        currency_id: "ARS",
        picture_url: req.body.image,
        category_id: "clothing",
        quantity: Number(req.body.quantity),
        unit_price: Number(req.body.price),
      },
    ],
    payer: {
      name: req.body.name,
      email: req.body.email,
      address: {
        street_name: req.body.address,
        street_number: req.body.number,
      },
    },
    back_urls: {
      success: "https://molo-steel.vercel.app",
      failure: "https://molo-steel.vercel.app",
      pending: "https://molo-steel.vercel.app",
    },
    // shipments: {
    //   cost: 1000,
    //   mode: "not_specified",
    // },
    statement_descriptor: "MOLO INDUMENTARIA",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get("/feedback", function (req, res) {
  res.json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});

app.listen(8080, () => {
  console.log("The server is now running on Port 8080");
});
