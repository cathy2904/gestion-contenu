'use client';
import Principal from "@/components/Principal";
import React, { useEffect, useState } from 'react';

import { Content } from "./types/content";
import { fetchContents } from "./api/route";
import ContentList from "../components/ContentList";
import Link from "next/link";


export default function ContentPage() {
  const [content, setContents] = useState<Content[]>([]);

  useEffect(() => {
    const getContents = async () => {
      const data = await fetchContents();
      setContents(data);
    };
    getContents();
  }, []);
  return (
<Principal titre="Contents">
      <h1>Content Home</h1>

      <div>
      <Link
          href="/content/create"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ➕ Créer un contenu
        </Link>
      <h1>Liste des contenus</h1>
      <ContentList contents={content} />
    </div>
    </Principal>  )
}