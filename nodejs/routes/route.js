const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new transaction
router.post('/', async (req, res) => {
  const transaction = new Transaction({
    amount: req.body.amount,
    currency: req.body.currency,
  });

  try {
    const newTransaction = await transaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
