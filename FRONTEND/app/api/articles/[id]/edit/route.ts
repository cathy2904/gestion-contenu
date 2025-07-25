// import { NextResponse } from 'next/server';
// import { NextRequest } from 'next/server';

// const API_URL = 'http://localhost:3003/api/articles'; // URL de l'API backend

// export async function GET(request : NextRequest,{ params }: { params: { id: number } }) {
//     const res = await fetch(`${API_URL}/${params.id}`, {
//       next: { revalidate: 10 } ,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//     const result = await res.json()
//     return NextResponse.json(result)
//   }




// export async function PUT(request: NextRequest,{ params }: { params: { id: number } }) {
//     const body = await request.json()
//     const res = await fetch(`${API_URL}/${params.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     })
//     const data = await res.json();
//     return NextResponse.json(data)
  
//   }
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