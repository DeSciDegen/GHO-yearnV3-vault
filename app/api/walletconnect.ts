// pages/api/walletconnect.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const alchemyId = process.env.ALCHEMY_ID;
  const walletConnectProjectId = process.env.WALLETCONNECT_PROJECT_ID;

  // Your server-side logic here

  res.status(200).json({ success: true /*, other data */ });
}
