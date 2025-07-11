import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await getSession({ req });

    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.query;
    const { status } = req.body;
    const userId = (session.user as any).id;

    // Verify the checklist belongs to the user
    const checklist = await prisma.checklist.findFirst({
      where: {
        id: id as string,
        userId,
      },
    });

    if (!checklist) {
      return res.status(404).json({ error: 'Checklist not found' });
    }

    // Update the checklist status
    const updatedChecklist = await prisma.checklist.update({
      where: { id: id as string },
      data: {
        status,
        completedDate: status === 'COMPLETED' ? new Date() : null,
      },
    });

    // Check if all checklists in the phase are completed
    const allChecklistsInPhase = await prisma.checklist.findMany({
      where: {
        progressId: checklist.progressId,
        userId,
      },
    });

    const allCompleted = allChecklistsInPhase.every(c => c.status === 'COMPLETED');
    const anyInProgress = allChecklistsInPhase.some(c => c.status === 'IN_PROGRESS');

    // Update phase status
    let phaseStatus: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'BLOCKED' = 'NOT_STARTED';
    if (allCompleted) {
      phaseStatus = 'COMPLETED';
    } else if (anyInProgress) {
      phaseStatus = 'IN_PROGRESS';
    }

    await prisma.progress.update({
      where: { id: checklist.progressId },
      data: {
        status: phaseStatus,
        completedDate: allCompleted ? new Date() : null,
      },
    });

    res.status(200).json({ checklist: updatedChecklist });
  } catch (error) {
    console.error('Error updating checklist:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 