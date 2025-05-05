import Navbar from './Navbar';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  return (
    <div className="layout">
      {user && <Navbar />}
      <main>{children}</main>
      
      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        main {
          flex: 1;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
}