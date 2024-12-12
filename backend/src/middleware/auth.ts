import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const sessionId = req.cookies.session;
    if (!sessionId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const session = await prisma.session.findUnique({
      where: { id: sessionId },
      include: { user: true }
    });

    if (!session || new Date() > session.expiresAt) {
      return res.status(401).json({ error: 'Session expired' });
    }

    req.user = session.user;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
};
import { Request, Response, NextFunction } from 'express';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    
    // TODO: Implement actual token verification
    // For now, just mock a user ID
    req.user = { id: 'mock-user-id' };
    
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};
import { Request, Response, NextFunction } from 'express';
import { prisma } from '../lib/prisma';

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
