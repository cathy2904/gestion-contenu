import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import { Readable } from 'stream';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const config = {
  api: {
    bodyParser: false, // Désactiver le bodyParser pour gérer les fichiers
  },
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    console.log('Réception du fichier...'); // Log la réception du fichier

    const chunks: Uint8Array[] = [];
    const readable = new Readable({
      read() {
        this.push(req);
        this.push(null);
      },
    });

    readable.on('data', (chunk) => {
      chunks.push(chunk);
    });

    readable.on('end', async () => {
      const buffer = Buffer.concat(chunks);
      const filePath = `/tmp/${Date.now()}.txt`;
      fs.writeFileSync(filePath, buffer);

      const fileContent = fs.readFileSync(filePath, 'utf-8');
      console.log('Contenu du fichier:', fileContent); // Log le contenu du fichier

      const response = await openai.completions.create({
        model: 'gpt-4o',
        prompt: `Analysez le document suivant et fournissez un résumé:\n\n${fileContent}`,
        max_tokens: 150,
      });

      console.log('Réponse OpenAI:', response); // Log la réponse OpenAI

      const summary = response.choices[0].text.trim();

      fs.unlinkSync(filePath);

      res.status(200).json({ summary });
    });
  } catch (error) {
    console.error('Erreur:', error); // Log l'erreur
    res.status(500).json({ message: 'Erreur lors de l\'analyse du document' });
  }
}