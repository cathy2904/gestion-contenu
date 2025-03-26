'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-4 bg-red-100 text-red-700 rounded">
      <h2 className="font-bold">Erreur !</h2>
      <p>{error.message}</p>
      <button
        onClick={reset}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Réessayer
      </button>
    </div>
  );
}