import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Remplace cette URL par l'URL de ton backend NestJS
    const res = await fetch('http://localhost:3003/articles');
    if (!res.ok) {
      throw new Error('Échec de la récupération des articles');
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Erreur lors de la récupération des articles' },
      { status: 500 }
    );
  }
}