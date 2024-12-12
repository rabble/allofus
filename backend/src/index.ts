import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { organizationsRouter } from './routes/organizations';
import { authRouter } from './routes/auth';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/organizations', organizationsRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
