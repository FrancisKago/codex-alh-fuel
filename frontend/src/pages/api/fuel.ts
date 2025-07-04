import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('Received fuel transaction', req.body);
    return res.status(200).json({ ok: true });
  }
  res.setHeader('Allow', 'POST');
  res.status(405).end('Method Not Allowed');
}
