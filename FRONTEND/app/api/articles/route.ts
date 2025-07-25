// import { NextResponse } from 'next/server';

// const API_URL = 'http://localhost:3003/api/articles'; // URL de l'API backend



// // GET : Récupérer tous les articles
// export async function GET() {
//   try {
//     const res = await fetch(API_URL);
//     if (!res.ok) {
//       throw new Error('Échec de la récupération des articles');
//     }
//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch (error) { // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     return NextResponse.json(
//       { message: 'Erreur lors de la récupération des articles' },
//       { status: 500 }
//     );
//   }
// }

// // POST : Créer un nouvel article
// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const res = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });
//     if (!res.ok) {
//       throw new Error('Échec de la création de l\'article');
//     }
//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch (error) { // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     return NextResponse.json(
//       { message: 'Erreur lors de la création de l\'article' },
//       { status: 500 }
//     );
//   }
// }

// // PUT : Mettre à jour un article
// export async function PUT(request: Request) {
//   try {
//     const { id, ...body } = await request.json();
//     const res = await fetch(`${API_URL}/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     });
//     if (!res.ok) {
//       throw new Error('Échec de la mise à jour de l\'article');
//     }
//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch (error) { // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     return NextResponse.json(
//       { message: 'Erreur lors de la mise à jour de l\'article' },
//       { status: 500 }
//     );
//   }
// }

// // DELETE : Supprimer un article
// export async function DELETE(request: Request) {
//   try {
//     const { id } = await request.json();
//     const res = await fetch(`${API_URL}/${id}`, {
//       method: 'DELETE',
//     });
//     if (!res.ok) {
//       throw new Error('Échec de la suppression de l\'article');
//     }
//     const data = await res.json();
//     return NextResponse.json(data);
//   } catch (error) { // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     return NextResponse.json(
//       { message: 'Erreur lors de la suppression de l\'article' },
//       { status: 500 }
//     );
//   }
// }