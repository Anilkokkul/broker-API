const express = require("express");
require("dotenv").config();
const Alpaca = require("@alpacahq/alpaca-trade-api");
const { db } = require("./db/db.connect");
const app = express();
const API_KEY = "PK0BSOQ9U38IT50A9SHK";
const API_SECRET = "jv2EaQIwWtpCUODk5hRCSvvj9tTpwBWI2zNFvEg9";
db();
const alpaca = new Alpaca({
  keyId: API_KEY,
  secretKey: API_SECRET,
  paper: true,
});

// alpaca.getAccount().then((account) => {
//   // Check if our account is restricted from trading.
//   if (account.trading_blocked) {
//     console.log("Account is currently restricted from trading.");
//   }
//   // Check how much money we can use to open new positions.
//   console.log(`$${account.buying_power} is available as buying power.`);
// });

// Get account information.
// alpaca.getAccount().then((account) => {
//   // Calculate the difference between current balance and balance at the last market close.
//   const balanceChange = account.equity - account.last_equity;
//   console.log(account);
//   // console.log("Today's portfolio balance change:", balanceChange);
// });

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(`<h1>Hello! Welcome to my Broker API</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
