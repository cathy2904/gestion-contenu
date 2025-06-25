// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// type Account = { displayName: string };
// type Social = { facebook?: Account; instagram?: Account; linkedin?: Account };

// export default function ConnectSocialPage() {
//   const [social, setSocial] = useState<Social>({});

//   const fetchSocial = async () => {
//     const res = await axios.get('/social/me', { withCredentials: true });
//     setSocial(res.data.socialAccounts || {});
//   };

//   const connect = (provider: string) => (window.location.href = `/auth/${provider}`);
//   const disconnect = async (provider: string) => {
//     await axios.delete(`/social/${provider}`, { withCredentials: true });
//     fetchSocial();
//   };

//   useEffect(() => { fetchSocial(); }, []);

//   return (
//     <div className="p-6 space-y-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold">Gérer mes connexions</h2>
//       {['facebook', 'instagram', 'linkedin'].map((prov) => (
//         <div key={prov} className="flex justify-between items-center border p-4 rounded">
//           <span className="capitalize">{prov}</span>
//           {social[prov] ? (
//             <>
//               <span>Connecté ({social[prov]?.displayName})</span>
//               <button className="text-red-500" onClick={() => disconnect(prov)}>Déconnecter</button>
//             </>
//           ) : (
//             <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={() => connect(prov)}>Connecter</button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }


// 'use client'

// import { useEffect, useState } from 'react'

// export default function ConnectSocial() {
//   const [status, setStatus] = useState({
//     facebook: false,
//     instagram: false,
//     linkedin: false,
//   });

//   useEffect(() => {
//     const fetchStatus = async () => {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/social-status`, {
//         credentials: 'include',
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setStatus(data);
//       }
//     };
//     fetchStatus();
//   }, []);

//   const connect = (platform: string) => {
//     window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${platform}`;
//   };

//   return (
//     <div className="space-y-4">
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

export default function ConnectSocial() {
  const [status, setStatus] = useState({
    facebook: false,
    instagram: false,
    linkedin: false,
  });

  useEffect(() => {
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
        console.error('Erreur status:', err);
      }
    };
    fetchStatus();
  }, []);

  const connect = (platform: string) => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/api/auth/${platform}`;
  };

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Connexion Réseaux Sociaux</h2>
      {['facebook', 'instagram', 'linkedin'].map((platform) => (
        <div key={platform} className="flex items-center justify-between">
          <span className="capitalize">{platform}</span>
          {status[platform as keyof typeof status] ? (
            <span className="text-green-600">Connecté</span>
          ) : (
            <button
              onClick={() => connect(platform)}
              className="px-4 py-1 bg-blue-600 text-white rounded"
            >
              Connecter
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
