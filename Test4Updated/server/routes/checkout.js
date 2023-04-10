import express from 'express';
import Checkout from '../models/checkout.js';
import Product from "../models/products.js";
import Stripe from "stripe";


// Stripe integration

const router = express.Router();

const stripe = new Stripe("sk_test_51MtGgQJ8CQqp3LxfMWIk20QJiFn5457UjuFlgT1eWd4XExsvwmwZOLqGCejgKkOwKGhk9QfVc78NWdLwxryuJXAN00mNQJ5yKw");


// Create a new checkout
router.post("/:prodID", async (req, res) => {
    const { email, amount , card_number, card_exp_month, card_exp_year, card_cvc} = req.body;

    const {prodID} = req.params;

    try {
      const prod = await Product.findById(prodID);

      if (!prod) {
        return res.status(404).json({ message: "Product not found" });

      } else {
        
        // Validate card expiry date
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const cardExpiry = new Date(card_exp_year, card_exp_month - 1);

        if (cardExpiry < new Date(currentYear, currentMonth)) {
          return res.status(400).json({ error: "Invalid card expiry date" });
        }

        else{
        // this is our card dat comming from body frontend
        const token = await stripe.tokens.create({
          card: {
            number: card_number,
            exp_month: card_exp_month,
            exp_year: card_exp_year,
            cvc: card_cvc,
          },
        });

        //Charge the customer's card
        const charge = await stripe.charges.create({
          amount,
          currency: "USD",
          source: token.id,
          description: `pa for product ID ${prodID}`,
          receipt_email: email,
        });

        const newOrder = new Checkout({
          productId: prodID,
          email,
          amount,
          payment_Id: charge.id,
          card_number,
          card_cvc,
          card_exp_month,
          card_exp_year,
        });

        const savedOrder = await newOrder.save();
        res
          .status(200)
          .json({ message: "Payment successful", order: savedOrder });
      }
    }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Payment failed", error });
    }
})

export default router

