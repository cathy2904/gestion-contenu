'use client';
import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

interface Document {
  _id: string;
  originalName: string;
  fileType: string;
  summary: string;
  createdAt: string;
}

export default function Home() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3003';

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      uploadFile(acceptedFiles[0]);
    },
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
      'text/csv': ['.csv'],
      'text/plain': ['.txt']
    },
    maxFiles: 1
  });

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get(`${API_URL}api/analyze/documents`);
      setDocuments(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des documents:', error);
    }
  };

  const uploadFile = async (file: File) => {
    setLoading(true);
    setUploadProgress(0);
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${API_URL}/analyze/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / (progressEvent.total || 100));
          setUploadProgress(percentCompleted);
        }
      });
      
      // Ajouter le nouveau document à la liste
      setDocuments(prev => [response.data, ...prev]);
      // Sélectionner le document nouvellement téléchargé
      setSelectedDocument(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors du téléchargement:', error);
      setLoading(false);
    }
  };

  const viewDocument = async (id: string) => {
    try {
      const response = await axios.get(`${API_URL}/analyze/documents/${id}`);
      setSelectedDocument(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération du document:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Analyseur de Documents avec GPT</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Zone de téléchargement */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Télécharger un document</h2>
            <div 
              {...getRootProps()} 
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
            >
              <input {...getInputProps()} />
              {loading ? (
                <div>
                  <p>Téléchargement en cours... {uploadProgress}%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                <p>Glissez-déposez un fichier ici, ou cliquez pour sélectionner</p>
              )}
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Formats supportés: PDF, DOCX, XLSX, PPTX, CSV, TXT
            </div>
          </div>
          
          {/* Liste des documents */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Documents récents</h2>
            {documents.length === 0 ? (
              <p className="text-gray-500">Aucun document téléchargé</p>
            ) : (
              <ul className="space-y-2 max-h-96 overflow-y-auto">
                {documents.map((doc) => (
                  <li 
                    key={doc._id} 
                    className={`p-3 rounded-md cursor-pointer hover:bg-gray-100 ${
                      selectedDocument?._id === doc._id ? 'bg-blue-50 border border-blue-200' : ''
                    }`}
                    onClick={() => viewDocument(doc._id)}
                  >
                    <div className="font-medium">{doc.originalName}</div>
                    <div className="text-sm text-gray-500">
                      {new Date(doc.createdAt).toLocaleString()} | {doc.fileType.toUpperCase()}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Résumé du document */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Résumé GPT</h2>
            {selectedDocument ? (
              <div>
                <h3 className="font-medium text-lg">{selectedDocument.originalName}</h3>
                <div className="text-sm text-gray-500 mb-3">
                  {new Date(selectedDocument.createdAt).toLocaleString()} | {selectedDocument.fileType.toUpperCase()}
                </div>
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="whitespace-pre-wrap">{selectedDocument.summary}</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Sélectionnez un document pour voir son résumé</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}







// 'use client';
// import { useState } from 'react';
// import axios from 'axios';

// export default function AnalyzePage() {
//   const [file, setFile] = useState<File | null>(null);
//   const [summary, setSummary] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) setFile(e.target.files[0]);
//   };

//   const handleSubmit = async () => {
//     if (!file) return;

//     setIsLoading(true);
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post(
//         'http://localhost:3003/api/analyze',
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         }
//       );
//       setSummary(response.data.summary);
//     } catch (error) {
//       console.error('Erreur:', error);
//       alert('Échec de l\'analyse');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>Analyse de documents</h1>
//       <input
//         type="file"
//         accept=".txt,.pdf,.docx"
//         onChange={handleFileChange}
//         style={{ margin: '1rem 0' }}
//       />
//       <button 
//         onClick={handleSubmit} 
//         disabled={isLoading}
//         style={{ padding: '0.5rem 1rem' }}
//       >
//         {isLoading ? 'Analyse en cours...' : 'Analyser'}
//       </button>
//       {summary && (
//         <div style={{ marginTop: '2rem' }}>
//           <h2>Résumé</h2>
//           <p style={{ whiteSpace: 'pre-line' }}>{summary}</p>
//         </div>
//       )}
//     </div>
//   );
// }











// // import UploadAndAnalyze from '@/components/UploadAndAnalyze';

// // export default function Home() {
// //   return (
// //     <div>
// //       <UploadAndAnalyze />
// //     </div>
// //   );
// // }