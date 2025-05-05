// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token');  // Récupère le token depuis les cookies

  const isAuthPage = request.nextUrl.pathname.startsWith('/auth');  // Vérifie si l'utilisateur est sur la page d'authentification
  const isProtectedPage = !isAuthPage;  // Si ce n'est pas une page d'authentification, c'est une page protégée

  // Si l'utilisateur n'est pas authentifié et tente d'accéder à une page protégée
  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL('/auth/login', request.url));  // Redirige vers /auth/login
  }

  // Si l'utilisateur est déjà authentifié et tente d'accéder à la page d'authentification
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url));  // Redirige vers la page d'accueil
  }

  return NextResponse.next();  // Laisse passer la requête si elle n'entre dans aucun des cas précédents
}

// Applique ce middleware à toutes les pages protégées, mais pas aux pages d'authentification
export const config = {
  matcher: ['/', '/dashboard', '/profile', '/admin'],  // Liste des pages protégées
};


// 'use client';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('token');

//   const isAuthPage = request.nextUrl.pathname.startsWith('/auth');
//   const isProtectedPage = !isAuthPage;

//   if (!token && isProtectedPage) {
//     return NextResponse.redirect(new URL('/auth/login', request.url));
//   }

//   if (token && isAuthPage) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   return NextResponse.next();
// }

// // Apply middleware to all pages except static files
// export const config = {
//   matcher: ['/', '/dashboard', ], // ou toutes les routes à protéger
// };
