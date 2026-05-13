import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// Load environment variables
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(helmet());

// Security: restrict CORS to known origins instead of wildcard
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:4000',
  'http://localhost:8000',
];
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

// --- ADDED ROUTES ---

// 1. Root Route (This fixes the "Cannot GET /" error)
app.get('/', (req: Request, res: Response) => {
  res.send('SahiDawa-India API is running successfully!');
});

// 2. Health Check Route
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start the server
app.listen(port, () => {
  console.log(`[API Server]: SahiDawa API is running at http://localhost:${port}`);
});
