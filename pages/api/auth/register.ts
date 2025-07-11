import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, password, phone, company, persona, stage, industry, location } = req.body;

    // Validation
    if (!name || !email || !password || !persona || !stage || !industry || !location) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone: phone || null,
        company: company || null,
        persona,
        stage,
        industry,
        location,
        role: 'FOUNDER',
      },
    });

    // Create initial progress records for all 12 phases
    const progressRecords = [];
    for (let phase = 1; phase <= 12; phase++) {
      progressRecords.push({
        userId: user.id,
        phase,
        status: phase === 1 ? 'IN_PROGRESS' : 'NOT_STARTED',
        startDate: phase === 1 ? new Date() : null,
      });
    }

    await prisma.progress.createMany({
      data: progressRecords,
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 