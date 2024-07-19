// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();

const apiKey = process.env.API_KEY;

app.get('/travel', (req, res) => {
    res.send(`Your API key is ${sk-proj-KRG9QrllYIIjqfqPaCFqT3BlbkFJ36Z8gFV8tPcqoWNRLxdI}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// app.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/destinations', require('./routes/destinationRoute'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
