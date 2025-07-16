/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  
  // Configuration des redirections API vers votre backend
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/:path*`,
      },
    ];
  },

  // Optimisations supplémentaires (optionnel)
  images: {
    domains: ['votre-domaine-images.com'], // Ajoutez les domaines des images externes
  },
  
  // Compatibilité avec Render
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
};

module.exports = nextConfig;

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   experimental: {
//     optimizePackageImports: ["@chakra-ui/react"],
//   },
// };

// export default nextConfig;
