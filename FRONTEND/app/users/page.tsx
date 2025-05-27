'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  _id: string;
  username: string;
  email: string;
  role: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3003/api/users'); // ← backend NestJS
      setUsers(res.data);
    } catch (err) {
      console.error('Erreur de chargement des utilisateurs', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      setUpdating(userId);
      await axios.patch(`http://localhost:3003/api/users/${userId}/role`, {
        role: newRole,
      });
      fetchUsers(); // refresh
    } catch (error) {
      console.error('Erreur de mise à jour du rôle', error);
    } finally {
      setUpdating(null);
    }
  };

  if (loading) return <p className="">Chargement...</p>;

  return (
    <div className="w-full h-screen p-6 bg-black text-[#ececec]">
      <h1 className="text-3xl font-bold mb-6">les utilisateurs et leurs Rôles</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-black-700 text-left">
          <thead className="bg-black-800 text-white">
            <tr>
              <th className="px-6 py-3 border">Nom</th>
              <th className="px-6 py-3 border">Email</th>
              <th className="px-6 py-3 border">Rôle</th>
              <th className="px-6 py-3 border">Action</th>
            </tr>
          </thead>
          <tbody className="bg-black-900">
            {users.map((user) => (
              <tr key={user._id} className="border-b border-black-700">
                <td className="px-6 py-3">{user.username}</td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3 capitalize">{user.role}</td>
                <td className="px-6 py-3">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    disabled={updating === user._id}
                    className="px-3 py-1 rounded border bg-black-800 text-white"
                  >
                    <option  value="user">user</option>
                    <option  value="admin">admin</option>
                    {/* <option  value="editor">editeur</option> */}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
