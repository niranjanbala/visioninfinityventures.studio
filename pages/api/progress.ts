import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const userId = (session.user as any).id;

    // Fetch user's progress for all phases
    const progress = await prisma.progress.findMany({
      where: { userId },
      include: {
        checklists: {
          orderBy: { createdAt: 'asc' },
        },
      },
      orderBy: { phase: 'asc' },
    });

    // If no progress exists, create initial progress
    if (progress.length === 0) {
      const progressRecords = [];
      for (let phase = 1; phase <= 10; phase++) {
        progressRecords.push({
          userId,
          phase,
          status: phase === 1 ? 'IN_PROGRESS' : 'NOT_STARTED',
          startDate: phase === 1 ? new Date() : null,
        });
      }

      await prisma.progress.createMany({
        data: progressRecords,
      });

      // Fetch the newly created progress
      const newProgress = await prisma.progress.findMany({
        where: { userId },
        include: {
          checklists: {
            orderBy: { createdAt: 'asc' },
          },
        },
        orderBy: { phase: 'asc' },
      });

      return res.status(200).json({ progress: newProgress });
    }

    res.status(200).json({ progress });
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 