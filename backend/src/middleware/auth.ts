import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        [key: string]: any;
      };
    }
  }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // For testing purposes, we'll simulate an authenticated user
    if (process.env.NODE_ENV === 'test') {
      req.user = { id: 'user123' };
      return next();
    }

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: 'No authorization header' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    // TODO: Implement proper token verification
    // For now, just set a mock user
    req.user = { id: 'user123' };
    next();
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};
