// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     optimizePackageImports: ["@chakra-ui/react"],
//   },
  
//   // Configuration des redirections API vers votre backend
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: `http://localhost:3000/api/:path*`,
//       },
//     ];
//   },

//   // Optimisations supplémentaires (optionnel)
//   images: {
//     // domains: ['votre-domaine-images.com'], // Ajoutez les domaines des images externes
//      remotePatterns: [
//       // Backend Render
//       {
//         protocol: 'https',
//         hostname: 'votre-backend.onrender.com',
//         pathname: '/uploads/**'
//       },
//       // Pour les avatars/utilisateurs
//       {
//         protocol: 'https',
//         hostname: 'lh3.googleusercontent.com' // Google Auth avatars
//       },
//       {
//         protocol: 'https',
//         hostname: 'platform-lookaside.fbsbx.com' // Facebook avatars
//       },
      
//       // Pour les médias/articles
//       {
//         protocol: 'https',
//         hostname: 'votre-bucket.s3.amazonaws.com' // Exemple AWS S3
//       },
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com' // Si vous utilisez Cloudinary
//       }

    
//     ]
//   },
  
//   // Compatibilité avec Render
//   output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
// };

// module.exports = nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
   reactStrictMode: true,
  output: 'standalone', // permet un déploiement serveur sur Render
};

export default nextConfig;
