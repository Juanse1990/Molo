const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const nodemailer = require("nodemailer");
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
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: `${process.env.USER_EMAIL}`,
      pass: `${process.env.PASSWORD_EMAIL}`,
    },
  });

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
        street_number: Number(req.body.number),
      },
    },
    back_urls: {
      success: "https://molo-steel.vercel.app",
      failure: "https://molo-steel.vercel.app",
      pending: "https://molo-steel.vercel.app",
    },
    shipments: {
      cost: 1000,
      mode: "not_specified",
    },
    statement_descriptor: "MOLO INDUMENTARIA",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      const mailOptions = {
        from: `${process.env.USER_EMAIL}`,
        to: "moloindumentaria@gmail.com",
        subject: "Detalles de la compra",
        text: `¡Hola!
      
        Tienes un nuevo pedido de un cliente. Aquí están los detalles:
        
        Nombre del comprador: ${req.body.name}
        Correo del comprador: ${req.body.email}
        Producto: ${req.body.description}
        Cantidad: ${req.body.quantity}
        Total: ${req.body.price * req.body.quantity} ${req.body.currency_id}
        Envío: 1000 ARS
        Dirección de envío: ${req.body.address}, ${req.body.number}
        
        ¡Gracias por tu atención!`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Correo enviado:", info.response);
        }
      });
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
