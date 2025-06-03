import { NextApiRequest, NextApiResponse } from 'next';
import { getScheduleById, updateSchedule } from '@/lib/scheduleService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const data = await getScheduleById(id as string);
    return res.status(200).json(data);
  }

  if (req.method === 'PUT') {
    const updated = await updateSchedule(id as string, req.body);
    return res.status(200).json(updated);
  }

  return res.status(405).end();
}
