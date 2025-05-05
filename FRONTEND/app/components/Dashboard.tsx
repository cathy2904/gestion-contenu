import { useAuth } from "../contexts/authContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    // No need for navigation as the parent component will handle it
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
          <div className="flex items-center">
            <span className="text-gray-600 mr-4">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Bienvenue sur votre tableau de bord</h2>
            <p className="text-gray-600">
              Vous êtes connecté en tant que <span className="font-medium">{user?.email}</span>
            </p>
            {/* Ajoutez ici votre contenu de tableau de bord */}
            <div className="mt-6 p-4 bg-gray-50 rounded border border-gray-200">
              <p className="text-gray-700">Contenu du tableau de bord...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
