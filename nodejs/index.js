const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


const transactionRoutes = require('./routes/transactions');
const staticRouter = require("./routes/staticRoute");
// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/crypto_payment_dashboard', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


// Use transaction routes
app.use('/',staticRouter)
app.use('/transactions', transactionRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
