


// 'use client';

// import { useEffect, useState } from 'react';

// export default function ConnectSocial() {
//   const [status, setStatus] = useState({
//     facebook: false,
//     instagram: false,
//     linkedin: false,
//   });

//   useEffect(() => {
//     const fetchStatus = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/social-status`, {
//           credentials: 'include',
//         });
//         if (res.ok) {
//           const data = await res.json();
//           setStatus(data);
//         }
//       } catch (err) {
//         console.error('Erreur status:', err);
//       }
//     };
//     fetchStatus();
//   }, []);

//   const connect = (platform: string) => {
//     window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${platform}`;
//   };

//   return (
//     <div className="p-8 space-y-4">
//       <h2 className="text-2xl font-bold mb-4">Connexion Réseaux Sociaux</h2>
//       {['facebook', 'instagram', 'linkedin'].map((platform) => (
//         <div key={platform} className="flex items-center justify-between">
//           <span className="capitalize">{platform}</span>
//           {status[platform as keyof typeof status] ? (
//             <span className="text-green-600">Connecté</span>
//           ) : (
//             <button
//               onClick={() => connect(platform)}
//               className="px-4 py-1 bg-blue-600 text-white rounded"
//             >
//               Connecter
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }








'use client';

import { useEffect, useState } from 'react';

interface SocialStatus {
  facebook: boolean;
  instagram: boolean;
  linkedin: boolean;
  displayNames: {
    facebook: string | null;
    instagram: string | null;
    linkedin: string | null;
  };
}

export default function ConnectSocial() {
  const [status, setStatus] = useState<SocialStatus>({
    facebook: false,
    instagram: false,
    linkedin: false,
    displayNames: {
      facebook: null,
      instagram: null,
      linkedin: null,
    },
  });

  // 🔁 Récupération du statut de connexion des réseaux
  const fetchStatus = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/social-status`, {
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        setStatus(data);
      }
    } catch (err) {
      console.error('Erreur lors de la récupération du statut social:', err);
    }
  };

  // 🔗 Redirection vers la page d'auth du réseau
  const connect = (platform: string) => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${platform}`;
  };

  // ❌ Déconnexion du réseau
  const disconnect = async (platform: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/disconnect/${platform}`,
        {
          method: 'GET',
          credentials: 'include',
        }
      );
      if (res.ok) {
        fetchStatus();
      }
    } catch (err) {
      console.error(`Erreur lors de la déconnexion de ${platform}:`, err);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="p-8 space-y-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Connexion aux Réseaux Sociaux</h2>
      {['facebook', 'instagram', 'linkedin'].map((platform) => {
        const isConnected = status[platform as keyof typeof status];
        const displayName = status.displayNames[platform as keyof typeof status.displayNames];

        return (
          <div
            key={platform}
            className="flex items-center justify-between border-b pb-3 pt-2"
          >
            <div>
              <span className="capitalize font-medium">{platform}</span>
              {isConnected && (
                <div className="text-sm text-gray-500">
                  Connecté en tant que <span className="font-semibold">{displayName ?? 'Utilisateur'}</span>
                </div>
              )}
            </div>

            {isConnected ? (
              <button
                onClick={() => disconnect(platform)}
                className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Déconnecter
              </button>
            ) : (
              <button
                onClick={() => connect(platform)}
                className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Connecter
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
