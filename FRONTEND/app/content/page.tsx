'use client';

import Principal from "@/components/Principal";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@/components/ui/button';
import { Calendar, Eye, Pencil, Trash2, Filter, ChevronDown } from "lucide-react";

export interface Content {
  _id: string;
  title: string;
  content: string;
  style: string;
  length: string;
  provider: string;
  user: string;
  publicationDate: Date;
  statut: 'brouillon' | 'programmé' | 'publié';
  platform: 'linkedin' | 'blog'| 'facebook' |'instagram'|'twiter';
  media?: string; 
  createdAt: string;
  updatedAt: string;
}

export default function ContentPage() {
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [user, setUser] = useState(''); // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [style, setStyle] = useState('');
  const [date, setDate] = useState('');
  const [selectedContentId, setSelectedContentId] = useState<string | null>(null);
  const [scheduleDate, setScheduleDate] = useState<string>('');
  const [scheduleTime, setScheduleTime] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);
   const [suggestions, setSuggestions] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ideas, setIdeas] = useState<Content[]>([]);

  const router = useRouter();

  const fetchContents = async (page: number) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/content?page=${page}&limit=10`, {
        params: {
          user: user || undefined,
          style: style || undefined,
          date: date || undefined,
        },
      });
      const data = response.data;
      if (Array.isArray(data.contents)) {
        setContents(data.contents);
        setTotalPages(data.totalPages);
      } else {
        setContents([]);
        console.error('❌ Données inattendues :', data);
      }
    } catch (error) {
      console.error('❌ Erreur lors du chargement des contenus :', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContents(page);
  }, [page, user, style, date]); // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const handlePublish = async (id: string) => { // eslint-disable-next-line @typescript-eslint/no-unused-vars
    try {
      await axios.put(`http://localhost:3000/api/content/${id}/publish`);
      fetchContents(page);
    } catch (error) {
      console.error("Erreur lors de la publication :", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/content/${id}`);
      fetchContents(page);
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  const handleSchedule = async () => {
    if (!selectedContentId || !scheduleDate || !scheduleTime) return;
    const fullDate = new Date(`${scheduleDate}T${scheduleTime}`);
    try {
      await axios.put(`http://localhost:3000/api/content/schedule/${selectedContentId}`, {
        schedule: fullDate,
      });
      setSelectedContentId(null);
      setScheduleDate('');
      setScheduleTime('');
      fetchContents(page);
    } catch (error) {
      console.error("Erreur lors de la planification :", error);
    }
  };

  const getStatusColor = (statut: string) => {
    switch (statut) {
      case 'publié': return 'bg-green-100 text-green-800';
      case 'programmé': return 'bg-yellow-100 text-yellow-800';
      case 'brouillon': return 'bg-black-100 text-black-800';
      default: return 'bg-black-100 text-black-800';
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'linkedin': return 'bg-blue-100 text-blue-800';
      case 'facebook': return 'bg-blue-100 text-blue-800';
      case 'instagram': return 'bg-pink-100 text-pink-800';
      case 'twitter': return 'bg-sky-100 text-sky-800';
      case 'blog': return 'bg-purple-100 text-purple-800';
      default: return 'bg-black-100 text-white-800';
    }
  };

  useEffect(() => {
  axios.get('http://localhost:3000/api/content/suggestions')
    .then((res) => {
      setSuggestions(res.data.suggestions || []);
    })
    .catch((err) => {
      console.error('❌ Erreur lors du fetch des suggestions GPT :', err);
    });
}, []);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % suggestions.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [suggestions]);

  const fetchIdeas = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/content/ideas');
    setIdeas(res.data);
  } catch (err) {
    console.error('Erreur chargement idées :', err);
  }
};

useEffect(() => {
  fetchIdeas();
}, []);

  return (
    <Principal titre="Contents">
      <div className="p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white-900">Liste des Contenus</h1>
          <Link 
            href="/content/create" 
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Créer un contenu
          </Link>
          <Link 
            href="/content/idea" 
            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Enregistrer idée
          </Link>
        </div>

       
       {suggestions.length > 0 && (
  <div className="bg-purple-100 text-purple-800 p-4 rounded mb-6 shadow text-center">
     Essayez ce sujet :
    {" "}
    <Link
      href={`/content/create?title=${encodeURIComponent(suggestions[currentIndex])}`}
      className="underline font-semibold hover:text-purple-700 transition"
    >
      {suggestions[currentIndex]}
    </Link>
  </div>
)}


        {/* Filters */}
        <div className="mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-black-100 rounded-lg hover:bg-black-200 transition-colors md:hidden"
          >
            <Filter className="w-4 h-4" />
            Filtres
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`${showFilters ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-white-700 mb-1">Style</label>
                <select 
                  value={style} 
                  onChange={(e) => setStyle(e.target.value)} 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Tous les styles</option>
                  <option value="standard">Standard</option>
                  <option value="humour">Humour</option>
                  <option value="marketing">Marketing</option>
                  <option value="formal">Formel</option>
                  <option value="casual">Décontracté</option>
                  <option value="professional">Professionnel</option>
                  <option value="academic">Académique</option>
                  <option value="creative">Créatif</option>
                  <option value="persuasive">Persuasif</option>
                  <option value="informative">Informatif</option>
                </select>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-white-700 mb-1">Date</label>
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : contents.length === 0 ? (
          <div className="text-center py-8 text-white-500">
            Aucun contenu trouvé.
          </div>
        ) : (
          <>

          

  {/* ✅ Étape 3 : Bloc des idées */}
  <div className="bg-black-100 p-4 rounded mb-6">
    <h2 className="text-xl font-semibold mb-3">vos iidées de publications  enregistrées</h2>
    <div className="flex space-x-2 overflow-x-auto">
      {ideas.map((idea) => (
        <button
          key={idea._id}
          onClick={() => router.push(`/content/create?title=${encodeURIComponent(idea.title)}`)}
          className="bg-black border px-3 py-2 rounded shadow text-sm whitespace-nowrap hover:bg-blue-100"
        >
          {idea.title}
        </button>
      ))}
    </div>
  </div>

  


            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full bg-black rounded-lg shadow-sm border border-gray-200">
                <thead className="bg-black-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white-700">Titre</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white-700">Fournisseur</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white-700">Style</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white-700">Longueur</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white-700">Réseau</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white-700">Contenu</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white-700">Image</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white-700">Statut</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-white-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contents.map((item) => (
                    <tr key={item._id} className="hover:bg-black-50">
                      <td className="px-4 py-3 font-medium text-white-900">{item.title}</td>
                      <td className="px-4 py-3 text-white-700">{item.provider}</td>
                      <td className="px-4 py-3 text-white-700">{item.style}</td>
                      <td className="px-4 py-3 text-white-700">{item.length}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPlatformColor(item.platform)}`}>
                          {item.platform}
                        </span>
                      </td>
                      <td className="px-4 py-3 max-w-xs truncate text-white-700" title={item.content}>
                        {item.content.slice(0, 100)}...
                      </td>
                      <td className="px-4 py-3">
                        {item.media ? (
                          <img src={item.media} alt="Media" className="w-12 h-12 object-cover rounded-lg" />  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        ) : (
                          <span className="text-white-400 italic text-sm">Aucune</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.statut)}`}>
                          {item.statut}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          <Link href={`/content/read/${item._id}`}>
                            <Button variant="ghost" size="sm" className="hover:bg-blue-100 text-blue-600">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Link href={`/content/edit/${item._id}`}>
                            <Button variant="ghost" size="sm" className="hover:bg-yellow-100 text-yellow-600">
                              <Pencil className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Link href={`/content/schedule/${item._id}`}>
                            <Button variant="ghost" size="sm" className="hover:bg-green-100 text-green-600">
                              <Calendar className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(item._id)}
                            className="hover:bg-red-100 text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile/Tablet Cards */}
            <div className="lg:hidden space-y-4">
              {contents.map((item) => (
                <div key={item._id} className="bg-black rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-medium text-white-900 flex-1 pr-2">{item.title}</h3>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.statut)}`}>
                      {item.statut}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-white-500">Fournisseur:</span>
                      <p className="font-medium">{item.provider}</p>
                    </div>
                    <div>
                      <span className="text-white-500">Style:</span>
                      <p className="font-medium">{item.style}</p>
                    </div>
                    <div>
                      <span className="text-white-500">Longueur:</span>
                      <p className="font-medium">{item.length}</p>
                    </div>
                    <div>
                      <span className="text-white-500">Réseau:</span>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getPlatformColor(item.platform)}`}>
                        {item.platform}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="text-white-500 text-sm">Contenu:</span>
                    <p className="text-white-700 text-sm mt-1">{item.content.slice(0, 150)}...</p>
                  </div>

                  {item.media && (
                    <div className="mb-4">
                      <img src={item.media} alt="Media" className="w-20 h-20 object-cover rounded-lg" /> {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
                    </div>
                  )}

                  <div className="flex gap-2 pt-3 border-t border-gray-100">
                    <Link href={`/content/read/${item._id}`} className="flex-1">
                      <Button variant="ghost" size="sm" className="w-full hover:bg-blue-100 text-blue-600">
                        <Eye className="w-4 h-4 mr-2" />
                        Voir
                      </Button>
                    </Link>
                    <Link href={`/content/edit/${item._id}`} className="flex-1">
                      <Button variant="ghost" size="sm" className="w-full hover:bg-yellow-100 text-yellow-600">
                        <Pencil className="w-4 h-4 mr-2" />
                        Éditer
                      </Button>
                    </Link>
                    <Link href={`/content/schedule/${item._id}`} className="flex-1">
                      <Button variant="ghost" size="sm" className="w-full hover:bg-green-100 text-green-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        Planifier
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(item._id)}
                      className="hover:bg-red-100 text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Schedule Modal */}
        {selectedContentId && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-black rounded-lg p-6 w-full max-w-md">
              <h3 className="text-lg font-bold mb-4">Planifier la publication</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white-700 mb-1">Date</label>
                  <input 
                    type="date" 
                    value={scheduleDate} 
                    onChange={(e) => setScheduleDate(e.target.value)} 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white-700 mb-1">Heure</label>
                  <input 
                    type="time" 
                    value={scheduleTime} 
                    onChange={(e) => setScheduleTime(e.target.value)} 
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={handleSchedule} 
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Confirmer
                  </button>
                  <button 
                    onClick={() => setSelectedContentId(null)} 
                    className="flex-1 bg-black-300 text-white-700 px-4 py-2 rounded-lg hover:bg-black-400 transition-colors"
                  >
                    Annuler
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
          <span className="text-sm text-white-700">
            Page {page} sur {totalPages}
          </span>
          <div className="flex gap-2">
            <button 
              onClick={() => setPage((p) => Math.max(p - 1, 1))} 
              disabled={page === 1} 
              className="px-4 py-2 bg-black-200 rounded-lg disabled:opacity-50 hover:bg-black-300 transition-colors"
            >
              Précédent
            </button>
            <button 
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))} 
              disabled={page === totalPages} 
              className="px-4 py-2 bg-black-200 rounded-lg disabled:opacity-50 hover:bg-black-300 transition-colors"
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </Principal>
  );
}