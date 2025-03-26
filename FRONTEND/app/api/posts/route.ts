import { NextRequest, NextResponse } from 'next/server'


//const PATH_URL_BACKEND = 'http://localhost:3003'
// export async function GET() {
//   const res = await fetch(process.env.PATH_URL_BACKEND+'/api/posts', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   const result = await res.json()
//   return NextResponse.json({ result })
// }
// GET : Récupérer tous les articles
export async function GET() {
  try {
    const res = await fetch(process.env.PATH_URL_BACKEND+'/api/posts');
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
export async function POST(request: NextRequest) {
  const body = await request.json()
  const res = await fetch(process.env.PATH_URL_BACKEND+'/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await res.json();
  return NextResponse.json(data)

}