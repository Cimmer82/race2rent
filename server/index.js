import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import stripeRoutes from './routes/stripe.js';

dotenv.config();

const app = express();

// Regular middleware for JSON parsing
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/stripe', stripeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});